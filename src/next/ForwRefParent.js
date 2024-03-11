import React, { Component } from 'react'
import ForwRef from './ForwRef'

class ForwRefParent extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef=React.createRef();
    }

    clickHandler=()=>{
        this.inputRef.current.focus();
    }
    
  render() {
    return (
      <div>
        <ForwRef ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Focus input</button>
      </div>
    )
  }
}

export default ForwRefParent
