import React, { Component } from 'react'
import LifecyB from './LifecyB'

class LifecyA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      console.log("LifecycleA constructor")
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleA getDerivedStateFromProps")
        return null;
    }
    componentDidMount(){
        console.log("LifecycleA Component")
    }
  render() {
    console.log("LifecycleA render")
    return (
      <div>
        <LifecyB/>
        LifecycleA
      </div>
    )
  }
}

export default LifecyA
