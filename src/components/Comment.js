import React, { Component } from 'react'
import styles from './style'

class Comment extends Component {
    render(){
        return (
            <div>
                <span style={styles.comment.name}>{this.props.payload.name}</span><br />
                <span style={styles.comment.comment}>{this.props.payload.comment}</span><br />
                <span style={styles.comment.times}>{this.props.payload.timestamp}</span>
                <hr />
            </div>    
        )
    }
}

export default Comment