import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parent:'parent'
      }
      this.greetparent=this.greetparent.bind(this)
    }
    greetparent(childname){
        alert(`hello ${this.state.parent} from ${childname}`)
    }
    
  render() {
    return (
      <div>
       <Child jesu={this.greetparent}></Child>
      </div>
    )
  }
}

export default Parent
