import React, { Component } from 'react'

class CreateZone extends Component {
    constructor(){
        super()
        this.state = {
            zone:{
                name:'',
                zipcodes:''
            }
        }
    }
    
    updateZone(event){
        let updatedState = Object.assign({}, this.state.zone)
        updatedState[event.target.id] = event.target.value
        this.setState({
            zone:updatedState
        })
    }
    
    submitZone(){
        this.props.onCreate(this.state.zone)
    }
    
    render() {
        return (
            <div>
                <input onChange={this.updateZone.bind(this)} id="name" className="form-control" name="name" placeholder="Enter your name" type="text" />
                <input onChange={this.updateZone.bind(this)} id="zipcodes" className="form-control" name="zipcodes" placeholder="Enter the zipcodes" type="text" />
                <input onClick={this.submitZone.bind(this)}className="btn btn-danger" type="submit" value="Submit Zone" /> 
            </div>    
        )
    }
}

export default CreateZone