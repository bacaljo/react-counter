import React, { Component } from 'react'
import './index.css'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            current: 0
        }
    }

    increase = () => {
        this.setState((prevState) => ({current: prevState.current + 1}), 
            () => this.props.increase())
    }

    decrease = (count) => {
        this.setState((prevState) => ({current: prevState.current - count}), 
            () => this.props.decrease(count))
    }

    componentWillUnmount = () => {
        this.props.decrease(this.state.current)
    }

    render() {
        return (
            <div>
                <button className="counter-button" onClick={() => this.decrease(1)}>-</button>
                <span className="counter-value">{this.state.current}</span>
                <button className="counter-button" onClick={this.increase}>+</button>
            </div>
        )
    }
}

export default Counter