// import React, { Component } from 'react'

// class Counter extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0
//       }
//     }
//     increment(){
//         this.setState({
//             count:this.state.count+1
//         }
//         )
//     }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={()=> this.increment()}></button>
//       </div>
//     )
//   }
// }

// export default Counter


//// destructuring props in functional components
import React from 'react'

const Counter = (props) => {
    const {name1,city1}=props
  return (
    <div><h1>hello{name1},{city1}</h1></div>
  )
}

export default Counter

// import React from 'react'

// const Counter = ({name1,city1}) => {
    
//   return (
//     <div><h1>hello{name1},{city1}</h1></div>
//   )
// }

// export default Counter