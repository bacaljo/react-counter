import React, { Component } from 'react'
import './index.css'

class CounterSizeGenerator extends Component {
    constructor(props) {
        super(props)

        this.state = { size: this.props.size }
    }

    onGenerate = (event) => {
        const size = event.target.value

        this.setState(() => {
            return { size: size }
        }, () => this.props.onGenerate(size))
    }

    render() {
        return (
            <div className="counter-size-generator">
                <label className="counter-size-generator-label">Size</label>
                <input className="counter-size-generator-size" 
                    type="number" min={0} value={this.state.size} onChange={this.onGenerate}/>
            </div>
        )
    }
}

export default CounterSizeGenerator