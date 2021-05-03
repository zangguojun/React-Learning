import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr:[
      {id:'001',title:'消息1'},
      {id:'002',title:'消息2'},
      {id:'003',title:'消息3'},
    ]
  }
  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((msgObj) => {
              return (
                <li key={msgObj.id}>
                  {/* 传递params参数 */}
                  {/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                  {/* 传递search参数 */}
                  <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>
                  

                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/* 声明接收params参数 */}
        {/* <Route path='/home/message/detail/:id/:title' component={Detail}/> */}

        {/* search参数无需申明接收，正常注册路由即可 */}
        <Route path='/home/message/detail' component={Detail}/>



      </div>
    )
  }
}
