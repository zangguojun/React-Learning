import React, { Component } from 'react'


export default class Detail extends Component {
  data = [
    {id:'001',content:'001号'},
    {id:'002',content:'002号'},
    {id:'003',content:'003号'},
  ]
  
  render() {
    const {id, title} = this.props.match.params
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
