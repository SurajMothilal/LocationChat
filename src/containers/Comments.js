import React, { Component } from 'react'
import Comment from '../components/Comment'
import styles from './style'
import APIManager from '../utils/APIManager'

class Comments extends Component {
    constructor(){
        super()
        this.state = {
            list:[],
            comment:{
                name:'',
                comment:''
            }
        }
    }
    
    componentDidMount(){
        let updatedList = Object.assign([], this.state.list)
        
        APIManager.get('api/comment', null, function(err, response){
            if(err){
                alert("Error loading comments "+err)
                return
            }
            response.forEach((comment)=>{
                updatedList.push(comment)
            })
            this.setState({
                list:updatedList
            })
        }.bind(this))
    }
    
    renderList(){
        return this.state.list.map((comment, i)=>{
            return (
                <li key={i} className="list-item"><Comment payload={comment} /></li>
            )
        })
    }
    
    updateComment(event){
        let updatedComment = Object.assign({}, this.state.comment)
        updatedComment[event.target.id] = event.target.value
        this.setState({
            comment:updatedComment
        })
    }
    
    submitComment(){
        APIManager.post('api/comment', this.state.comment, function(err, response){
            let updatedList = Object.assign([], this.state.list)
            updatedList.push(response)
            this.setState({
                list:updatedList
            })
        }.bind(this))
    }
    
    render() {
        return (
            <div>
                <h3>Comments for Zone </h3>
                <ul style={styles.mainList} className="list-group">
                    {this.renderList()}
                </ul>
                <input onChange={this.updateComment.bind(this)} className="form-control" type="text" name="name" id="name" placeholder="Enter your name" />
                <input onChange={this.updateComment.bind(this)} className="form-control" type="text" name="comment" id="comment" placeholder="Enter the comment" />
                <input onClick={this.submitComment.bind(this)} className="btn btn-primary" type="submit" value="Submit Comment" />    
            </div>    
        )
    }
}

export default Comments