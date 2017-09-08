import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Home from './layout/Home'

class App extends Component {
    render(){
        return (
            <div>
                <Home />
            </div>    
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
