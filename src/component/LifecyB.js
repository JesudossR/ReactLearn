import React, { Component } from 'react'

class LifecyB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      console.log("LifecycleB constructor")
    }
    
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleB getDerivedStateFromProps")
        return null;
    }
    componentDidMount(){
        console.log("LifecycleB Component")
    }
  render() {
    console.log("LifecycleB render")
    return (
      <div>
        LifecycleB
      </div>
    )
  }
}

export default LifecyB
