import React, { PureComponent } from 'react'

export default class Demooptimize extends PureComponent {
  state = {
    name:'Tom'
  }

  change = () => {
    this.setState({name:'Jack'})
  }
  render() {
    const {name} = this.state
    console.log('Parent');
    return (
      <div style={{backgroundColor:'red',padding:'5px'}}>
        <h3>我是Parent组件</h3>
        <h4>名字是：{name}</h4>
        <button onClick={this.change}>改名</button>
        {/* <Child name={name}/> */}
        <Child/>
      </div>
    )
  }
}

class Child extends PureComponent {
  render() {
    console.log('Child');
    return (
      <div style={{backgroundColor:'skyblue',padding:'5px'}}>
        <h3>我是Child组件</h3>
        <h4>我接到的名字是：{this.props.name}</h4>
      </div>
    )
  }
}
