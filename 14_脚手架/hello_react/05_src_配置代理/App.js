import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  getStudentData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      response => {
        console.log(response.data);
      },
      error => {
        console.log(error);
      }
    )
  }
  getCarData = () => {
    axios.get('http://localhost:3000/api2/cars').then(
      response => {
        console.log(response.data);
      },
      error => {
        console.log(error);
      }
    )
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>getStudentData</button>
        <button onClick={this.getCarData}>getStudentData</button>
      </div>
    )
  }
}