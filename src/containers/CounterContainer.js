import {increaseSum, decreaseSum, decreaseCounterValue} from '../actions'
import {connect} from 'react-redux'
import Counter from '../components/Counter'

const mapDispatchToProps = dispatch => ({
    increaseSum: () => dispatch(increaseSum()),
    decreaseSum: () => dispatch(decreaseSum()),
    decreaseCounterValue: (current) => dispatch(decreaseCounterValue(current)),

})

const CounterContainer = connect(null, mapDispatchToProps)(Counter)

export default CounterContainer