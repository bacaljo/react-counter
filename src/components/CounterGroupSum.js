function CounterGroupSum(props) {
    return (
        <div className="container-group">
            <label className="container-group-label">Sum</label>
            <input className="container-group-input" 
                type="number" value={props.sum} disabled />
        </div>
    )
}

export default CounterGroupSum