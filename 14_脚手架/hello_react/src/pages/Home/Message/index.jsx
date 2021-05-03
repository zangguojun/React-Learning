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
  pushShow = (id, title) => {
    // 传递params参数 
    // this.props.history.push(`/home/message/detail/${id}/${title}`)

    // 传递search参数 
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

    // 传递search参数 
    this.props.history.push({pathname:'/home/message/detail',state:{id,title}})
  }

  replaceShow = (id, title) => {
    // 传递params参数 
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)

    // 传递search参数 
    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

    // 传递state参数 
    this.props.history.replace({pathname:'/home/message/detail',state:{id,title}})
  }
  back = () => {
    this.props.history.goBack()
  }

  forward = () => {
    this.props.history.goForward()
  }

  go = () => {
    this.props.history.go(2)
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
                  {/* <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                  {/* 传递state参数 */}
                  <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
                  &nbsp;<button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>pushShow</button>
                  &nbsp;<button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>replaceShow</button>
                </li>
              )
            })
          }
        </ul>
        <hr/>
        {/* 声明接收params参数 */}
        {/* <Route path='/home/message/detail/:id/:title' component={Detail}/> */}

        {/* search参数无需申明接收，正常注册路由即可 */}
        {/* <Route path='/home/message/detail' component={Detail}/> */}

        {/* state参数无需申明接收，正常注册路由即可 */}
        <Route path='/home/message/detail' component={Detail}/>
        <button onClick={this.back}>back</button>&nbsp;
        <button onClick={this.forward}>forward</button>&nbsp;
        <button onClick={this.go}>go</button>&nbsp;
      </div>
    )
  }
}
