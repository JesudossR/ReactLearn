import React, { Component } from 'react'

class Refsdemo extends Component {

    constructor(props) {
      super(props)
      this.inputRef=React.createRef()
      this.cBref=null
      this.setBref=(element)=>{
        this.cBref=element
      }
    }

    componentDidMount(){
      //callback ref
      if(this.cBref){
          this.cBref.focus()
      }
      //normal ref creation
        // this.inputRef.current.focus()
    }

    clickHandle=()=>{
        alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        <input type='text'ref={this.inputRef}/>
        <input type='text' ref={this.setBref}/>
        <button onClick={this.clickHandle}>click</button>
      </div>
    )
  }
}

export default Refsdemo
