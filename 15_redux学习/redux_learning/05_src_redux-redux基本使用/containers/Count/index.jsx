import { connect } from 'react-redux'

import CountUI from '../../components/Count'
import { 
  createDecrementAction,
  createIncrementAction,
  createIncrementAsyncAction
 } from '../../redux/count_action'

const mapStateToProps = (state) => ({
  count:state
})

const mapDispatchToProps = (dispatch) => ({
  jia: number => dispatch(createIncrementAction(number)),
  jian: number => dispatch(createDecrementAction(number)),
  asyncjia: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)