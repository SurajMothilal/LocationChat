import React, { Component } from 'react'
import styles from './style'

class Zone extends Component {
    render(){
        return (
            <div style={styles.zone.zoneContainer}>
                <h3 style={styles.zone.header}><a href="#">{this.props.payload.name}</a></h3>
                <span style={styles.zone.zips}>{this.props.payload.zipcodes}</span><br />
                <span style={styles.zone.times}>{this.props.payload.timestamp}</span>
            </div>
        )
    }
}

export default Zone