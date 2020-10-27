import CounterContainer from '../containers/CounterContainer'

function CounterGroup(props) {
    function initializeArrayKeys(size) {
        return Array.from(Array(Number(size)).keys())
    }

    return (
        <div className="container-group container-group-scrollable">
            {
                initializeArrayKeys(props.size).map(key =>
                    <CounterContainer key={key} />
                )
            }
        </div>
    )
}

export default CounterGroup