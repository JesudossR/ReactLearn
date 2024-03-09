import React, { Component } from 'react'

class Child extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         child:'child'
      }
    }
    
  render() {
    return (
      <div>
        <button onClick={()=>this.props.jesu(this.state.child)}>click</button>
      </div>
    )
  }
}

export default Child
