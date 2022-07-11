import React, { Component } from 'react'
//import logo from './logo.svg';
import './App.css'
import Inline from './components/Inline';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting'
 //import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import RefDemo from './components/RefDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCountTwo from './components/HoverCountTwo';
import User from './components/User';
import CounterTwo from './components/CounterTwo';






class App extends Component {
  render() {
    return (
      <div className="App" >
        <CounterTwo 
        render={(count,incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount}/>
        )}
        />

       <CounterTwo 
        render={(count,incrementCount) => (
        <HoverCountTwo count={count} incrementCount={incrementCount}/>)}/>

        {/*<ClickCounterTwo/>
        <HoverCountTwo/>
    <User render={(isLoggedIn) => isLoggedIn ? 'pallavi':'Guest'}/>*/}

      {/*  <ClickCounter name='pallavi'/>
        <HoverCounter/>*/}
       {/* <ErrorBoundary>
        <Hero heroName="Batman"/>
        </ErrorBoundary>

        <ErrorBoundary>
        <Hero heroName="Superman"/>
        </ErrorBoundary>

        <ErrorBoundary>
        <Hero heroName="joker"/>
        </ErrorBoundary>*/}
        
    

        {/*<PortalDemo/>*/}
        {/*<FRParentInput/>*/}
        {/*<FocusInput/>*/}
        {/*<RefDemo/>*/}
      

       {/*} <ParentComp/>*/}
        {/*<Table/>
       <FragmentDemo/>*/}

       {/* <LifecycleA/> */}
       {/* <Form/>
        
        
       {/*} <h1 className='error'>Error</h1>
        <h1 className='success'>Success</h1>

    <Inline/>*/}
        
       {/* <StyleSheet primary={true}/> */}
        
       {/* 
      <personList/>
       <NameList/>
         <UserGreeting/>
        <ParentComponent/>
        <UserGreeting/>
        
        <EventBind/>
        <ClassClick/>
        <FunctionClick/>
        <Counter />
        <Message />
       <Greet name="pallavi" heroname="xyz"> 
       <p>this is chidren props</p>
       </Greet>
       <Greet name="anjana" heroname="lmn" >
        <button>Action</button>
       </Greet>
       <Greet name="asha" heroname="nnn"/> 
        <Welcome name="anu" heroname="hhh"/> 
        <Welcome name="ammu" heroname="sss"/> 
        <Welcome name="ankita" heroname="aaa"/>  */}
        {/*<Hello />*/}
        
      </div>
    );
  }
}

export default App;
