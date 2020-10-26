import React, { Component } from 'react'
import CounterSizeGenerator from './CounterSizeGenerator'
import CounterGroupSum from './CounterGroupSum'
import CounterGroup from './CounterGroup'

class MultiCounter extends Component {
    constructor(props) {
        super(props)

        this.state = { size: 5, sum: 0}
    }

    onGenerate = (size) => {
        this.setState({ size: size })
    }

    increase = () => {
        this.setState((prevState) => ({ sum: prevState.sum + 1 }))
    }

    decrease = (count) => {
        this.setState((prevState) => ({ sum: prevState.sum - count }))
    }

    render() {
        return (
            <div className="multi-counter">
                <CounterSizeGenerator size={this.state.size} onGenerate={this.onGenerate} />
                <CounterGroupSum sum={this.state.sum} />
                <CounterGroup size={this.state.size} 
                    increase={this.increase} decrease={this.decrease} />
            </div>
        )
    }
}

export default MultiCounter