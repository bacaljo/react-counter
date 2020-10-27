import {increaseSum} from '../actions'
import {decreaseSum} from '../actions'
import {connect} from 'react-redux'
import Counter from '../components/Counter'

const mapDispatchToProps = dispatch => ({
    increaseSum: () => dispatch(increaseSum()),
    decreaseSum: () => dispatch(decreaseSum()),
    decreaseCounterValue: () => dispatch(decreaseSum()),

})

const CounterContainer = connect(null, mapDispatchToProps)(Counter)

export default CounterContainer