import React, { Component } from 'react'
// import DDD from '../01_setState'

export default class DemorenderProps extends Component {
  render() {
    return (
      <div>
        <h3>我是Parent组件</h3>
        {/* <A>
          <B/>
        </A> */}
        <A render={name => <B name={name}/>}/>
      </div>
    )
  }
}
class A extends Component {
  state = {
    name:'Tom'
  }
  render() {
    return (
      <div style={{backgroundColor:'skyblue',padding:'5px'}}>
        <h3>我是A组件</h3>
        {/* {this.props.children} */}
        {this.props.render(this.state.name)}
      </div>
    )
  }
}
class B extends Component {
  render() {
    console.log(this.props);
    return (
      <div style={{backgroundColor:'gray',padding:'5px'}}>
        <h3>我是B组件,{this.props.name}</h3>
      </div>
    )
  }
}
