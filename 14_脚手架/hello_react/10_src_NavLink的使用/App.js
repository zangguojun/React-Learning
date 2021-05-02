import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'


import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'

export default class App extends Component {
  render() {
    return (
      <div id="root">
        <div>
          <Header />
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                <NavLink className="list-group-item" to="/about">About</NavLink>
                <NavLink className="list-group-item" to="/home">Home</NavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  <Route path="/about" component={About} />
                  <Route path="/home" component={Home} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
