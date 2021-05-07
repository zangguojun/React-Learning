import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class Header extends Component {
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
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
            <button onClick={this.back}>back</button>&nbsp;
            <button onClick={this.forward}>forward</button>&nbsp;
            <button onClick={this.go}>go</button>&nbsp;
          </div>
        </div>
      </div>
    )
  }
}
export default withRouter(Header)