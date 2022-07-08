import React, { Component } from 'react'

 class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:false
    }
  }

    
  render() {
    // *short circuit operator if condition is true it 
    // *written right side value otherwise it written nothing
    return this.state.isLoggedIn && <div>welcome anjana</div>
    //*this is third way to use ifelse using ternary operator
    // return this.state.isLoggedIn ?
    //   (<div>wlcome anjana</div>):
    //   (<div>welcome asha</div>)
    // *this is second way to use ifelse condition
    // let message
    // if(this.state.isLoggedIn){
    //   message = <div> Welcome anjana</div>
    // }else{
    //   message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>
  
    // *this is first way to use ifelse condition
    // if(this.state.isLoggedIn){
    //   return <div>welcome vishwas</div>
    // }else{
    //   return <div>welcome Guest</div>
    // }
    // return (
    //   <div>
        
    //   <div>Welcome Anjana</div>
    //   <div>welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting