import React, { Component } from 'react'
import qs from 'querystring'

export default class Detail extends Component {
  data = [
    {id:'001',content:'001号'},
    {id:'002',content:'002号'},
    {id:'003',content:'003号'},
  ]
  
  render() {
    console.log(this.props);
    {/* 声明接收params参数 */}
    // const {id, title} = this.props.match.params

    {/* 声明接收search参数 */}
    const {search} = this.props.location
    const {id, title} = qs.parse(search.slice(1))

    const findResult = this.data.find(dataObj => dataObj.id === id)
    return (
      <ul>
        <li>ID:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{findResult.content}</li>
      </ul>
    )
  }
}
