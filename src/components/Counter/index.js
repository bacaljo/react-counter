import React, { Component } from 'react'
import './index.css'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            current: 0
        }

        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
    }

    increase() {
        this.setState((prevState) => ({current: prevState.current + 1}), 
            () => this.props.increase())
    }

    decrease() {
        this.setState((prevState) => ({current: prevState.current - 1}), 
            () => this.props.decrease())
    }

    render() {
        return (
            <div>
                <button className="counter-button" onClick={this.decrease}>-</button>
                <span className="counter-value">{this.state.current}</span>
                <button className="counter-button" onClick={this.increase}>+</button>
            </div>
        )
    }
}

export default Counter