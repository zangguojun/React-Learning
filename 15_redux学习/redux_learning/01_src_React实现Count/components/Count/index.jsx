import React, { Component } from 'react'

export default class Count extends Component {
  state = {
    count:0
  }

  increment = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    this.setState({
      count : count + value * 1
    })
  }
  decrement = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    this.setState({
      count : count - value * 1
    })
  }
  incrementIfOdd = () => {
    const {count} = this.state
    if (count % 2 !== 0){
      const {value} = this.selectNumber
      this.setState({
        count : count + value * 1
      })
    }
  }
  incrementAsync = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    setTimeout(() => {
      this.setState({
        count : count + value * 1
      })
    })
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>当前值：{count}</h1>
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
