import React, { Component, Fragment } from 'react'

export default class DemoFragment extends Component {
  render() {
    return (
      <Fragment key={1}>
        <input type="text" />
      </Fragment>
      // <>
      //   <input type="text" />
      // </>
    )
  }
}
