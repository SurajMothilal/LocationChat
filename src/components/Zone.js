import React, { Component } from 'react'
import styles from './style'

class Zone extends Component {
    
    selectZone(event){
        event.preventDefault()
        this.props.onSelect(this.props.selectKey)
    }
    
    render(){
        const title = (this.props.isSelected) ? <h3><a style={styles.zone.selectedHeader} href="#">{this.props.payload.name}</a></h3> : <h3><a style={styles.zone.header} href="#">{this.props.payload.name}</a></h3>
        
        
        return (
            <div style={styles.zone.zoneContainer}>
                <div onClick={this.selectZone.bind(this)}>
                    {title}
                </div>
                <span style={styles.zone.zips}>{this.props.payload.zipcodes}</span><br />
                <span style={styles.zone.times}>{this.props.payload.timestamp}</span>
            </div>
        )
    }
}

export default Zone