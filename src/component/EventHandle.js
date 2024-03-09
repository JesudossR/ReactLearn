import React, { Component } from 'react'

class EventHandle extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          answer:'hello how are you'
       }
      // this.clickHandler=this.clickHandler.bind(this)
     }
    //  clickHandler(){
    //     this.setState({
    //                 answer:"iam fine"
    //             })
    //     console.log("logged here")
    //  }
    clickHandler=()=>{
        this.setState({
            answer:'how are you'
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.answer}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}>click me!</button> */}
        {/* <button onClick={()=>this.clickHandler()}>click me!</button> */}
        {/* <button onClick={this.clickHandler}>click me!</button> */}
        <button onClick={()=>this.clickHandler()}>click me!</button>
      </div>
    )
  }
}

export default EventHandle
