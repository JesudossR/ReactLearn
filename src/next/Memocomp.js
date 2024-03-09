import React from 'react'

function Memocomp({name}) {
    console.log("render memo")
  return (
    <div>
      {name}
    </div>
  )
}
export default React.memo (Memocomp)