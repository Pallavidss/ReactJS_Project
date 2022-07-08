import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message:'Hello'
         
      }
      //*event binding third way,this method can bind the event handler
     //*in render method and also in constructor ,*this also used more

     // this.clickHandler = this.clickHandler.bind(this)
    }
    //clickHandler(){
        // *here we got error,this keyword in event handler is undefined
       //*hence event binding is necessary in react class component
        // this.setState({
        //    message: 'Goodbye!'
        // })
        // console.log(this)

   // }
   //* this is forth way to bind the event handler,
   //*this method is use arrow function as class property basically
  // * change the way u defined ur method in class ,*this method is used more
   clickHandler = () => {
    this.setState({
        message:'Goodbye!'
    })
   }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/*event binding * first way but we cant use bcs of performance implecation*/}
       {/*} <button onClick={this.clickHandler.bind(this)}>click</button>*/}
          {/*event binding second way not use bcs same reason like first one*/} 
          {/*}  <button onClick={() => this.clickHandler()}>click</button>*/}
     {/*event * binding third way,this method can bind the event handler
     in render  method and also in constructor*/}
     <button onClick={this.clickHandler}>click</button>

      </div>
    )
  }
}

export default EventBind