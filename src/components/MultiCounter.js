import React, { Component } from 'react'
import CounterSizeGenerator from './CounterSizeGenerator'
import CounterGroupSum from './CounterGroupSum'
import CounterGroup from './CounterGroup'

class MultiCounter extends Component {
    constructor(props) {
        super(props)

        this.state = { size: 0, sum: 0}
    }

    onGenerate = (size) => {
        this.setState({ size: size })
    }

    onIncrease = () => {
        this.setState((prevState) => ({ sum: prevState.sum + 1 }))
    }

    onDecrease = (count) => {
        this.setState((prevState) => ({ sum: prevState.sum - count }))
    }

    render() {
        return (
            <div className="multi-counter">
                <CounterSizeGenerator size={this.state.size} onGenerate={this.onGenerate} />
                <CounterGroupSum sum={this.state.sum} />
                <CounterGroup size={this.state.size} 
                    onIncrease={this.onIncrease} onDecrease={this.onDecrease} />
            </div>
        )
    }
}

export default MultiCounter