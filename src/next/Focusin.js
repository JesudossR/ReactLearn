import React, { Component } from 'react'
import Input from './Input'

class Focusin extends Component {
    constructor(props) {
      super(props)
    
    this.componentRef=React.createRef();  
    }

    clickHandle=()=>{
        this.componentRef.current.focusInput()
    }    
  render() {
    return (
      <div>
        <Input ref={this.componentRef}/>
        <button onClick={this.clickHandle}>Focus input</button>
      </div>
    )
  }
}

export default Focusin
