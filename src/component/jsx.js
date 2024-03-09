import React from 'react'

const Jsx = () => {
//   return (
//     <div>
//         <h1>jsx element</h1>
//     </div>
//   )
  return React.createElement('div',null,React.createElement('h1',null,'ram'));
}

export default Jsx;