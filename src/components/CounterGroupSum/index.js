import React, { Component } from 'react'

import './index.css'

class CounterGroupSum extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="counter-group-sum">
                <label className="counter-group-sum-label">Sum</label>
                <input className="counter-group-sum-sum" 
                    type="number" value={this.props.sum} disabled />
            </div>
        )
    }
}

export default CounterGroupSum