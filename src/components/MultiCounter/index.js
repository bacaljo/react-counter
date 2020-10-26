import React, { Component } from 'react'
import CounterSizeGenerator from '../CounterSizeGenerator/'
import CounterGroup from '../CounterGroup/'
import './index.css'

class MultiCounter extends Component {
    constructor(props) {
        super(props)

        this.state = { size: 5}

        this.onGenerate = this.onGenerate.bind(this)
    }

    onGenerate(size) {
        this.setState({ size: size })
    }

    render() {
        return (
            <div className="multi-counter">
                <CounterSizeGenerator size={this.state.size} onGenerate={this.onGenerate} />
                <CounterGroup size={this.state.size} />
            </div>
        )
    }
}

export default MultiCounter