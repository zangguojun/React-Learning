import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Demohooks extends Component {
  state = {
    count:0
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(state => ({count:state.count + 1}))
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer)
    console.log('卸载前');
  }
  add = () => {
    this.setState(state => ({count:state.count + 1}))
  }
  unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }
  attention = React.createRef()
  show = () => {
    console.log(this.attention.current.value);
  }
  render() {
    return (
      <div>
        当前数值为{this.state.count}
        <button onClick={this.add}>Click + 1</button>
        <hr/>
        <button onClick={this.unmount}>Unmount</button>
        <hr/>
        <input type="text" ref = {this.attention}/>
        <button onClick={this.show}>show</button>
      </div>
    )
  }
}

// function Demohooks() {
//   const [count, setCount] = React.useState(0)
//   React.useEffect(() => {
//     let timer = setInterval(() => {
//       setCount(count => count + 1)
//     }, 1000);
//     return () => {
//       clearInterval(timer)
//     }
//   },[])
//   const add = () => {
//     // setCount(count + 1)
//     setCount(count => count + 1)
//   }

//   const unmount = () => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//   }


//   const attention = React.useRef()
//   const show = () => {
//     console.log(attention.current.value);
//   }
//   return (
//     <div>
//       当前数值为{count}
//       <button onClick={add}>Click + 1</button>
//       <hr/>
//       <button onClick={unmount}>Unmount</button>
//       <hr/>
//       <input type="text" ref={attention}/>
//       <button onClick={show}>show</button>
//     </div>
//   )
// }

export default Demohooks