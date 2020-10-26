import React, { Component } from 'react'

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
            <div className="container-group">
                <label className="container-group-label">Size</label>
                <input className="container-group-input" 
                    type="number" min={0} value={this.state.size} onChange={this.onGenerate}/>
            </div>
        )
    }
}

export default CounterSizeGenerator