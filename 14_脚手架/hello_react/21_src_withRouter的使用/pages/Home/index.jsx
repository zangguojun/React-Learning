import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import MyNavLink from '../../components/MyNavLink'
import Message from './Message'
import News from './News'

export default class Home extends Component {
  
  componentDidMount () {
    this.timer = setTimeout(() => {
      this.props.history.push('/home/message')
    }, 2000);
  }
  componentWillUnmount () {
    clearTimeout(this.timer)
  }
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to='/home/news'>News</MyNavLink>
            </li>
            <li>
              <MyNavLink to='/home/message'>Message</MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route path='/home/news' component={News}/>
            <Route path='/home/message' component={Message}/>
            <Redirect to='/home/news'/>
          </Switch>
        </div>
      </div>
    )
  }
}
