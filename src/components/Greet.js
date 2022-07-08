import React from 'react'
// function Greet(){
//     return <h1>hello good morning</h1>
// }
 const Greet = props => {
 const {name,heroname} = props
 return  (
    <div>
      <h1>hello {name} with {heroname}
      </h1>
    </div>
 )
 }
 export default Greet