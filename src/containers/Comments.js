import React, { Component } from 'react'
import Comment from '../components/Comment'
import styles from './style'
import APIManager from '../utils/APIManager'
import CreateComment from '../components/CreateComment'

class Comments extends Component {
    constructor(){
        super()
        this.state = {
            list:[]
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
    
    submitComment(comment){
        APIManager.post('api/comment', comment, function(err, response){
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
                <CreateComment onCreate={this.submitComment.bind(this)} />
            </div>    
        )
    }
}

export default Comments