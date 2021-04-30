import React, { Component } from 'react'

import './index.css'

export default class List extends Component {
  render() {
    const {isFirst,isLoading,errMsg,users} = this.props
    return (
      <div className="row">
        {
          isFirst ? <h3>请输入想要搜索的Github用户名</h3> :
          isLoading ? <h3>正在搜索，请稍后...</h3> :
          errMsg ? <h3 style={{color:'red'}}>{errMsg}</h3> :
          users.map(userObj => {
            return (
              <div key={userObj.id} className="card">
                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                  <img alt="head" src={userObj.avatar_url} style={{width:'100px'}}/>
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
