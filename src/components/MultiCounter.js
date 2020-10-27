import React, { Component } from 'react'
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer'
import CounterGroupSum from './CounterGroupSum'
import CounterGroupContainer from '../containers/CounterGroupContainer'

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
                <CounterSizeGeneratorContainer size={this.state.size} />
                <CounterGroupSum sum={this.state.sum} />
                <CounterGroupContainer size={this.state.size} 
                    onIncrease={this.onIncrease} onDecrease={this.onDecrease} />
            </div>
        )
    }
}

export default MultiCounter