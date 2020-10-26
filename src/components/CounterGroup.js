import React, { Component } from 'react'
import Counter from './Counter'

class CounterGroup extends Component {
    constructor(props) {
        super(props)
    }

    buildCounterComponents = (size) => {
        let counterComponents = []

        for (let i = 0; i < size; i++) {
            counterComponents[i] = <Counter key={i} 
                increase={this.props.increase} decrease={this.props.decrease} />
        }

        return counterComponents
    }

    render() {
        const size = this.props.size

        return (
            <div className="counter-group">
                {this.buildCounterComponents(size)}
            </div>
        )
    }
}

export default CounterGroup