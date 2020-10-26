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
    }

    onGenerate(size) {
        this.setState({ size: size })
    }

    render() {
        return (
            <div className="multi-counter">
                <CounterSizeGenerator size={this.state.size} onGenerate={this.onGenerate} />
                <CounterGroupSum sum={this.state.sum} />
                <CounterGroup size={this.state.size} />
            </div>
        )
    }
}

export default MultiCounter