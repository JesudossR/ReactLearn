import React, { Component } from 'react'
// import Regcomp from './Regcomp'
// import Purecomp from './Purecomp'
import Memocomp from './Memocomp'

// in pure component if there is no change between the current state and the previous state then it will stop rerender
// Purecomponent extends shouldComponentUpdate lifecycle method by performing shallow comparison
// for ex:
// var a=[1,2,3]
// var b=[1,2,3]
// var c=a;
// // a (sc) b return true if a and b both contains same value and the same type. 
// console.log(a===b)//false
// console.log(a===c)//true

class Parentcomp extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         name:"jesu"
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"jesu"
            })
        },2000)
    }
    
  render (){
    console.log("parent comp");
    return(
        <div>
        Parentcomp
      {/* <Purecomp name={this.state.name}/>
      <Regcomp/> */}
      <Memocomp name={this.state.name}/>
    </div>
    )
  }
}

export default Parentcomp
