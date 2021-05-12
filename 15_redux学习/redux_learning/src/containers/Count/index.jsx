import { connect } from 'react-redux'
import React, { Component } from 'react'

import { 
  createDecrementAction,
  createIncrementAction,
  createIncrementAsyncAction
 } from '../../redux/actions/count'

 class Count extends Component {
 
   increment = () => {
     const {value} = this.selectNumber
     this.props.jia(value * 1)
   }
   decrement = () => {
     const {value} = this.selectNumber
     this.props.jian(value * 1)
 
   }
   incrementIfOdd = () => {
     const {value} = this.selectNumber
     if (this.props.count % 2 !== 0) {
       this.props.jia(value * 1)
     }
   }
   incrementAsync = () => {
     const {value} = this.selectNumber
     this.props.asyncjia(value * 1, 500)
   }
 
   render() {
     return (
       <div>
         <h1>当前值：{this.props.count}</h1>
         <select ref={c => this.selectNumber = c}>
           <option value='1'>1</option>
           <option value='2'>2</option>
           <option value='3'>3</option>
         </select>&nbsp;
         <button onClick={this.increment}>+</button>&nbsp;
         <button onClick={this.decrement}>-</button>&nbsp;
         <button onClick={this.incrementIfOdd}>奇数+1</button>&nbsp;
         <button onClick={this.incrementAsync}>异步+1</button>&nbsp;
       </div>
     )
   }
 }
 
const mapStateToProps = (state) => ({
  count:state.count
})

const mapDispatchToProps = {
  jia: createIncrementAction,
  jian: createDecrementAction,
  asyncjia: createIncrementAsyncAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)