import Counter from './Counter'

function CounterGroup(props) {
    function buildCounterComponents(size) {
        let counterComponents = []

        for (let i = 0; i < size; i++) {
            counterComponents[i] = <Counter key={i} onIncrease={props.onIncrease} 
                onDecrease={props.onDecrease} />
        }

        return counterComponents
    }

    return (
        <div className="container-group container-group-scrollable">
            {buildCounterComponents(props.size)}
        </div>
    )
}

export default CounterGroup