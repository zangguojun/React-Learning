import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    const {updateAppState} = this.props
    const {keyWordElement:{value:keyWord}} = this
    updateAppState({isFirst:false,isLoading:true})
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      response => {
        updateAppState({
          isLoading:false,
          users:response.data.items
        })
      },
      error => {
        updateAppState({
          isLoading:false,
          errMsg:error.message
        })
      }
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="输入Github用户"/>
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
