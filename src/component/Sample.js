import React from 'react'

// function Sample(){
//     return <h1> hello jesu</h1>
// }
const Sample=()=><h1>hello jesu</h1>
export let A=()=><h1>hello</h1>;
export let Props=(props)=>{
   return (
    <div>
        <h1>hello {props.name} welcome {props.city}</h1>
        {props.children}
    </div>
   )
}
export default Sample