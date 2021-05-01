import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {
  search = async () => {
    const {keyWordElement:{value:keyWord}} = this
    PubSub.publish('res',{isFirst:false,isLoading:true})

    // axios
/*     axios.get(`/api1/search/users2?q=${keyWord}`).then(
      response => {
        PubSub.publish('res',{
          isLoading:false,
          users:response.data.items
        })
      },
      error => {
        PubSub.publish('res',{
          isLoading:false,
          errMsg:error.message
        })
      }
    ) */

    // fetch(未优化)
/*     fetch(`/api1/search/users2?q=${keyWord}`)
    .then(
      response => {
        console.log('连接服务器成功！');
        return response.json()
      },
      error => {
        console.log('连接服务器失败！',error);
        return new Promise()
      }
    ).then(
      response => {
        console.log('获取数据成功！');
        console.log(response);
      },
      error => {
        console.log('获取数据失败！',error);
      }
    ) */
    
    // fetch(优化Ⅰ)
/*     fetch(`/api1/search/users2?q=${keyWord}`)
    .then(
      response => {
        console.log('连接服务器成功！');
        return response.json()
      }
    ).then(
      response => {
        console.log('获取数据成功！');
        console.log(response);
      }
    ).catch(
      error => {
        console.log('失败！',error);
      }
    ) */

    // fetch(优化Ⅱ)
    try{
      const response = await fetch(`/api1/search/users2?q=${keyWord}`)
      const data = await response.json()
      PubSub.publish('res',{
        isLoading:false,
        users:data.items
      })
    } catch (error) {
      PubSub.publish('res',{
        isLoading:false,
        errMsg:error.message
      })
    }
    
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
