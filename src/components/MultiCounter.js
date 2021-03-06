import React, { Component } from 'react'
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer'
import CounterGroupContainer from '../containers/CounterGroupContainer'
import CounterGroupSumContainer from '../containers/CounterGroupSumContainer'

class MultiCounter extends Component {
    constructor(props) {
        super(props)

        this.state = { size: 0, sum: 0}
    }

    render() {
        return (
            <div className="multi-counter">
                <CounterSizeGeneratorContainer size={this.state.size} />
                <CounterGroupSumContainer sum={this.state.sum} />
                <CounterGroupContainer size={this.state.size} />
            </div>
        )
    }
}

export default MultiCounter