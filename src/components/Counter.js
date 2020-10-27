import React, { Component } from 'react'

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

    decrease = () => {
        const ONE = 1

        this.setState((prevState) => ({current: prevState.current - ONE}), 
            () => this.props.decrease(ONE))
    }

    componentWillUnmount = () => {
        this.props.decrease(this.state.current)
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-button" onClick={this.decrease}>-</button>
                <span className="counter-value">{this.state.current}</span>
                <button className="counter-button" onClick={this.increase}>+</button>
            </div>
        )
    }
}

export default Counter