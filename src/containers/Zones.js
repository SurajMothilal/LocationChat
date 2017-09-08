import React, { Component } from 'react'
import Zone from '../components/Zone'
import styles from './style'
import APIManager from '../utils/APIManager'

class Zones extends Component {
    constructor(){
        super()
        this.state = {
            list:[],
            zone:{
                name:'',
                zipcodes:''
            }
        }
    }
    
    componentDidMount(){
        let updatedList = Object.assign([], this.state.list)
        
        APIManager.get('/api/zone', null, function(err, response){
            if(err){
                alert('Cant get resource'+ err)
                return
            }
            response.forEach((zone)=>{
                updatedList.push(zone)
            })
            this.setState({
                list:updatedList
            })
        }.bind(this))
    
    }
    
    renderList(){
      return this.state.list.map((zone, i)=>{
            return(
                <li key={i} className="list-item"><Zone payload={zone} /></li>
            )
        })
    }
    
    updateZone(event){
        let updatedState = Object.assign({}, this.state.zone)
        updatedState[event.target.id] = event.target.value
        this.setState({
            zone:updatedState
        })
    }
    
    makeZone(){
        let updatedZone = Object.assign({}, this.state.zone)
        updatedZone['zipcodes'] = updatedZone['zipcodes'].split(',')
        let newUpdatedZone = []
        updatedZone['zipcodes'].forEach((zipCode)=>{
            newUpdatedZone.push(zipCode.trim())
        })
        updatedZone['zipcodes'] = newUpdatedZone
        APIManager.post('/api/zone', updatedZone, function(err, response){
            if(err){
                alert('Cant post resource ' + err)
                return
            }
            let updatedList = Object.assign([], this.state.list)
            updatedList.push(response)
            this.setState({
                list:updatedList
            })
        }.bind(this))
        
    }
    
    render(){
        return (
            <div>
                <ul className="list-group" style={styles.mainList}>
                    {this.renderList()}
                </ul>
                <input onChange={this.updateZone.bind(this)} id="name" className="form-control" name="name" placeholder="Enter your name" type="text" />
                <input onChange={this.updateZone.bind(this)} id="zipcodes" className="form-control" name="zipcodes" placeholder="Enter the zipcodes" type="text" />
                <input onClick={this.makeZone.bind(this)}className="btn btn-danger" type="submit" value="Submit Zone" />    
            </div>    
        )
    }
}

export default Zones