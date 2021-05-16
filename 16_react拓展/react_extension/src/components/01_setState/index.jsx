import React, { Component } from 'react'

export default class DemosetState extends Component {
  state = {
    count:0
  }
  add = () => {
    // 1、对象式的setState（当【不】依赖原来的状态的时候）
    // const {count} = this.state
    // this.setState({
    //   count:count + 1
    // },() => {
    //   console.log(this.state);
    // })
    // 2、对象式的setState（当依赖原来的状态的时候）
    this.setState((state,props) =>({count: state.count + 1}), () => {
        console.log(this.state);
      })
    console.log(this.state);
  }
  render() {
    return (
      <div>
        当前求和为{this.state.count}
        <button onClick={this.add}>Click + 1</button>
      </div>
    )
  }
}
