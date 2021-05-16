import React, { Component,Fragment } from 'react'
import DemosetState from './components/01_setState'
import DemolazyLoad from './components/02_lazyLoad'
import Demohooks from './components/03_hooks'
import DemoContext from './components/05_Context'
import Demooptimize from './components/06_optimize'
import DemorenderProps from './components/07_renderProps'
import DemoError from './components/08_ErrorBoundary'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <DemosetState x={101}/> */}
        <hr/>
        {/* <DemolazyLoad/> */}
        <hr/>
        {/* <Demohooks/> */}
        <hr/>
        {/* <DemoContext/> */}
        <hr/>
        {/* <Demooptimize/> */}
        <hr/>
        {/* <DemorenderProps/> */}
        <hr/>
        <DemoError/>
      </Fragment>
    )
  }
}