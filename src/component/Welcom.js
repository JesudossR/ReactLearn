// import React,{Component} from 'react'

// class Welcome extends Component{
// //   render() {
// //    return  (
// //     <h1>welcome</h1>
// //    )
// //   }
//   render(){
//     return(
//         <div><h1>class props {this.props.info}</h1>
//         {this.props.children}</div>    
//     )
//   }
// }

// export default Welcome;



/////destructuring props in class components
import React,{Component} from 'react'

class Welcome extends Component{
  render(){
    const{info}=this.props
    return(
        <div><h1>class props {info}</h1>
        {this.props.children}</div>    
    )
  }
}

export default Welcome;