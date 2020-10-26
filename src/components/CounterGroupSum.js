import React, { Component } from 'react'

class CounterGroupSum extends Component {
    render() {
        return (
            <div className="container-group">
                <label className="container-group-label">Sum</label>
                <input className="container-group-input" 
                    type="number" value={this.props.sum} disabled />
            </div>
        )
    }
}

export default CounterGroupSum