import Counter from './Counter'

function CounterGroup(props) {
    function initializeArrayKeys(size) {
        const ARRAY_KEYS = []
        for (let i = 0; i < size; i++) {
            ARRAY_KEYS[i] = i
        }

        return ARRAY_KEYS
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