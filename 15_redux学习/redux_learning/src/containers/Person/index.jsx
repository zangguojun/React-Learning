import { nanoid } from 'nanoid'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../../redux/actions/person'

class Person extends Component {
  addPerson = () => {
    const personObj = {
      id:nanoid(),
      name:this.nameNode.value,
      age:this.ageNode.value
    }
    this.props.addPerson(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
  }
  render() {
    return (
      <div>
        <input ref={c=>this.nameNode=c} type="text" placeholder='输入名字' />
        <input ref={c=>this.ageNode=c} type="text" placeholder='输入年龄' />
        <button onClick={this.addPerson}>添加用户</button>
        <ul>
          {
            this.props.persons.map((p) => {
              return <li key={p.id}>{p.name} -- {p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  persons:state.person
})

const mapDispatchToProps = {
  addPerson:createAddPersonAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Person)
