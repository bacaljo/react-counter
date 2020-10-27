import {increaseSum} from '../actions'
import {connect} from 'react-redux'
import Counter from '../components/Counter'

const mapDispatchToProps = dispatch => ({
    increaseSum: () => dispatch(increaseSum())
})

const CounterContainer = connect(null, mapDispatchToProps)(Counter)

export default CounterContainer