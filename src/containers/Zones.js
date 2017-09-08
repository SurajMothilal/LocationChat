import React, { Component } from 'react'
import Zone from '../components/Zone'
import styles from './style'
import APIManager from '../utils/APIManager'
import CreateZone from '../components/CreateZone'

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
        
    makeZone(zone){
        let updatedZone = Object.assign({}, zone)
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
               <CreateZone onCreate={this.makeZone.bind(this)} />
            </div>    
        )
    }
}

export default Zones