import Counter from './Counter'

function CounterGroup(props) {
    function initializeArrayKeys(size) {
        return Array.from(Array(Number(size)).keys())
    }

    return (
        <div className="container-group container-group-scrollable">
            {
                initializeArrayKeys(props.size).map(key =>
                    <Counter key={key} onIncrease={props.onIncrease} 
                        onDecrease={props.onDecrease} />
                )
            }
        </div>
    )
}

export default CounterGroup