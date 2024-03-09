import React from 'react'
import List1 from './List1'
function List() {
    const list=['jesu','moses','jesu']
    // const list1=list.map((l,index) => <List1 key={index} l={l}/>)
    const list1=list.map((l,index) =>   <h1 key={index}>{l}{index}</h1>)
  return <div>{list1}</div>
}

export default List
