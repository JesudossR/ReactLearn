// import React, { Component } from 'react'

// class Form extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          name:'',
//          details:'',
//          lang:'React'
//       }
//     }
//     handleNameEvent= (event)=>{
//         this.setState({
//            name:event.target.value
//         })
//     }
//     handleDetailsEvent=(event)=>{
//         this.setState({
//             details:event.target.value
//         })
//     }
//     handleLangEvent=(event)=>{
//         this.setState({
//             lang:event.target.value
//         })
//     }
//     handleAlert=(event)=>{
//         alert(`${this.state.name} ${this.state.details} ${this.state.lang}`)
//         event.preventDefault()
//     }
    
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleAlert}>
//           <label>Name</label>
//           <input type="text" value={this.state.name} onChange={this.handleNameEvent} />
//           <label>Details</label>
//           <textarea value={this.state.details} onChange={this.handleDetailsEvent}></textarea>
//           <select value={this.state.lang} onChange={this.handleLangEvent}>
//             <option value="">react</option>
//             <option value="">javasript</option>
//             <option value="">python</option>
//           </select>
//           <button type="submit">submit</button>
//         </form>
//       </div>
//     );
//   }
// }
// export default Form

import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [lang, setLang] = useState('React');

  const handleNameEvent = (event) => {
    setName(event.target.value);
  };

  const handleDetailsEvent = (event) => {
    setDetails(event.target.value);
  };

  const handleLangEvent = (event) => {
    setLang(event.target.value);
  };

  const handleAlert = (event) => {
    alert(`${name} ${details} ${lang}`);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleAlert}>
        <label>Name</label>
        <input type="text" value={name} onChange={handleNameEvent} />
        <label>Details</label>
        <textarea value={details} onChange={handleDetailsEvent}></textarea>
        <select value={lang} onChange={handleLangEvent}>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
        </select>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
