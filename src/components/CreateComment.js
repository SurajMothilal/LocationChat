import React, { Component } from 'react'

class CreateComment extends Component {
    constructor(){
        super()
        this.state = {
            comment:{
                name:'',
                comment:''
            }
        }
    }
    
    updateComment(event){
        let updatedComment = Object.assign({}, this.state.comment)
        updatedComment[event.target.id] = event.target.value
        this.setState({
            comment:updatedComment
        })
    }
    
    submitComment(){
        this.props.onCreate(this.state.comment)
    }
        
    render(){
        return(
            <div>
                <input onChange={this.updateComment.bind(this)} className="form-control" type="text" name="name" id="name" placeholder="Enter your name" />
                <input onChange={this.updateComment.bind(this)} className="form-control" type="text" name="comment" id="comment" placeholder="Enter the comment" />
                <input onClick={this.submitComment.bind(this)} className="btn btn-primary" type="submit" value="Submit Comment" />    
            </div>
        )
    }
}

export default CreateComment