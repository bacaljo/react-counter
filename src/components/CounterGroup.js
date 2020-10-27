import React, { Component } from 'react'
import Counter from './Counter'

class CounterGroup extends Component {
    buildCounterComponents = (size) => {
        let counterComponents = []

        for (let i = 0; i < size; i++) {
            counterComponents[i] = <Counter key={i} 
                onIncrease={this.props.onIncrease} onDecrease={this.props.onDecrease} />
        }

        return counterComponents
    }

    render() {
        const size = this.props.size

        return (
            <div className="container-group container-group-scrollable">
                {this.buildCounterComponents(size)}
            </div>
        )
    }
}

export default CounterGroup