import React from 'react'

const ForwRef=React.forwardRef((props,ref)=>{
    return (
        <div>
          <input type='text' ref={ref}/>
        </div>
      )
})

export default ForwRef;