import React, { Component } from 'react'

export class Input extends Component {
    constructor(props) {
      super(props)
    
      this.inpctRef=React.createRef()
    }

    focusInput(){
        this.inptRef.current.focus();
    }
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inptRef}/>
      </div>
    )
  }
}

export default Input
