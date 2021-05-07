import React, { Component } from 'react'

import {Button, DatePicker} from 'antd'
import {WeiboOutlined} from '@ant-design/icons'

const {RangePicker} = DatePicker 
export default class App extends Component {
  render() {
    return (
      <div>
        <Button type='primary'>Primary Key</Button>
        <Button icon={<WeiboOutlined/>}>Primary Key</Button>
        <DatePicker />
        <RangePicker />
      </div>
    )
  }
}
