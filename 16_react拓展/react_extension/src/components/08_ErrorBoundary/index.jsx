import React, { Component } from 'react'

export default class DemoError extends Component {
  state = {
    name:'Tom',
    hasError:''
  }
  static getDerivedStateFromError(error) {
    return {hasError:error}
  }
  componentDidCatch () {
    console.log('渲染Child组件出错！');
  }

  render() {
    const {name} = this.state
    return (
      <div style={{backgroundColor:'red',padding:'5px'}}>
        <h3>我是Parent组件</h3>
        <h4>名字是：{name}</h4>
        <button onClick={this.change}>改名</button>
        {
          this.state.hasError ? <h2>网络异常</h2> : <Child name={name}/>
        }
      </div>
    )
  }
}
class Child extends Component {
  render() {
    return (
      <div style={{backgroundColor:'skyblue',padding:'5px'}}>
        <h3>我是Child组件</h3>
        <h4>我接到的名字是：{this.props.name.map()}</h4>
      </div>
    )
  }
}