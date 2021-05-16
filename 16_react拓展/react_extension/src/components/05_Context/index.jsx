import React, { Component } from 'react'

const UsernameContext = React.createContext()
const {Provider, Consumer} = UsernameContext
export default class DemoContext extends Component {
  state = {
    username:'Tom',
    age:21
  }
  render() {
    const {username, age} = this.state
    return (
      <div style={{backgroundColor:'red',padding:'5px'}}>
        <h3>我是A组件</h3>
        <h4>我的用户名：{username}</h4>
        <Provider value={{username, age}}>
          <B username={username}/>
        </Provider>
      </div>
    )
  }
}
class B extends Component {
  render() {
    return (
      <div style={{backgroundColor:'skyblue',padding:'5px'}}>
        <h3>我是B组件</h3>
        {/* <h4>我接到的用户名：{this.props.username}</h4> */}
        {/* <B username={this.props.username}/> */}
        <C/>
      </div>
    )
  }
}
// class C extends Component {
//   static contextType = UsernameContext
//   render() {
//     const {username, age} = this.context
//     return (
//       <div style={{backgroundColor:'gray',padding:'5px'}}>
//         <h3>我是C组件</h3>
//         <h4>我接到的用户名：{username}，年龄为:{age}</h4>
//       </div>
//     )
//   }
// }

function C () {
  return (
    <div style={{backgroundColor:'gray',padding:'5px'}}>
      <h3>我是C组件</h3>
      <h4>我接到的用户名：
        <Consumer>
          {
            value => `${value.username}，年龄为:${value.age}`
          }
        </Consumer>
        </h4>
    </div>
  )
}