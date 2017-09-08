import React, { Component } from 'react'
import axios from 'axios'
import Comment from '../components/Comment'
import styles from './style'

class Comments extends Component {
    constructor(){
        super()
        this.state = {
            list:[],
            comment:{
                name:'',
                comment:'',
                timestamp:'12:00'
            }
        }
    }
    
    componentDidMount(){
        let updatedList = Object.assign([], this.state.list)
        
        axios.get('/api/comment').then(function(results){
            results.data.content.map((comment)=>{
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
        let updatedList = Object.assign([], this.state.list)
        updatedList.push(this.state.comment)
        this.setState({
            list:updatedList
        })
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