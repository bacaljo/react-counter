import React, { Component } from 'react'
import CounterSizeGenerator from '../CounterSizeGenerator/'
import CounterGroupSum from '../CounterGroupSum/'
import CounterGroup from '../CounterGroup/'
import './index.css'

class MultiCounter extends Component {
    constructor(props) {
        super(props)

        this.state = { size: 5, sum: 0}

        this.onGenerate = this.onGenerate.bind(this)
        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }

    onGenerate(size) {
        this.setState({ size: size })
    }

    increase() {
        this.setState((prevState) => ({ sum: prevState.sum + 1 }))
    }

    decrease() {
        this.setState((prevState) => ({ sum: prevState.sum - 1 }))
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