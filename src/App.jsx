// import React, {useState} from "react";

// class App extends React.Component {
//     x = 100
//     render (){
//         return(
//             <div>
//                 <h1>React 18 {this.x}</h1>
//             </div>
//         )
//     }
// }

// export default App

// function App() {
//     const [x,setX] = useState(1)
//     const [name, setName] = useState('Bibek')

//     const increment=()=>{
//         setX(x+1)
//     }

//   return (
//     <div>
//       <h1>Hello ReactJs {name}</h1>
//       <input type="text" onChange={(e)=>setName(e.target.value)} />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Header from './Header'


// export default function App() {
//   return (
//     <div>
//         <Header name="Bibek" age="30" />
//         <h1>Hello</h1>
//     </div>
//   )
// }


import React from 'react'
import {Link} from 'react-router-dom'
import RouterComponent from './RouterComponent'

export default function App() {
  return (
    <div>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        <h1>Hello</h1>
        <RouterComponent />
    </div>
  )
}
