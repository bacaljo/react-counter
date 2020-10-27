import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            current: 0
        }
    }

    onIncrease = () => {
        this.setState((prevState) => ({current: prevState.current + 1}), 
            () => this.props.increaseSum())
    }

    onDecrease = () => {
        this.setState((prevState) => ({current: prevState.current - 1}), 
            () => this.props.decreaseSum())
    }

    componentWillUnmount = () => {
        this.props.decreaseCounterValue(this.state.current)
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-button" onClick={this.onDecrease}>-</button>
                <span className="counter-value">{this.state.current}</span>
                <button className="counter-button" onClick={this.onIncrease}>+</button>
            </div>
        )
    }
}

export default Counter