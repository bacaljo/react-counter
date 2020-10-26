import React, { Component } from 'react'
import CounterGroup from '../CounterGroup/'
import './index.css'

class MultiCounter extends Component {
    constructor(props) {
        super(props)

        this.state = { size: 5}
    }

    render() {
        return (
            <div className="multi-counter">
                <CounterGroup size={this.state.size} />
            </div>
        )
    }
}

export default MultiCounter