import React, { Component } from 'react'
import withCounter from './withCounter'

 class ClickCounter extends Component {
    
  render() {

   
   const {count,incrementCount} = this.props
// when we specify props here it not send down to this componenet ,it will send to HOC componenet   
    return  <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
     
    
  }
}

export default withCounter(ClickCounter,5)