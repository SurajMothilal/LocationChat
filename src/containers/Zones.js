import React, { Component } from 'react'
import axios from 'axios'
import Zone from '../components/Zone'
import styles from './style'

class Zones extends Component {
    constructor(){
        super()
        this.state = {
            list:[],
            zone:{
                name:'',
                zipcodes:'',
                timestamp:'12:00'
            }
        }
    }
    
    componentDidMount(){
        let updatedList = Object.assign([], this.state.list)
        
        axios.get('/api/zone').then(function(results){
           results.data.content.map((zone)=>{
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
        let updatedList = Object.assign([], this.state.list)
        console.log(this.state.zone)
        updatedList.push(this.state.zone)
        this.setState({
            list:updatedList
        })
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