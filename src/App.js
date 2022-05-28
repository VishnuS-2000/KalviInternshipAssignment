import { useEffect,useState } from 'react';

import { Home } from './components/home';

import { NavBar } from './components/navbar';

import { Education } from './components/education';

import { Work } from './components/work';

import { Achievements } from './components/achievements';

import {Hobbies} from "./components/hobbies"

import { Footer } from './components/footer';

import "./App.css"

import Desktop from "./Assets/Images/Desktop.png"

const DesignWarning=()=>{

  return <div className='warning__main'>
    <img src={Desktop}/>
    <h1>Sorry This Website was Designed mainly for Desktop Users.Mobile and Tablet Version is Currently under Design.
    <br/>
    <span>Please Check Later</span></h1>

  </div>



}





function App() {


const [width,setWidth]=useState(window.innerWidth)
  useEffect(()=>{
    const handleResize=(e)=>{
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize',handleResize)


    return ()=>window.removeEventListener('resize',handleResize)


    
  })
 
  
 
  return (
    <div>
    {width>1100?<div className="App">
      
      <NavBar/>
      <Home/>
      <Education/>
      <Work/>
      <Achievements/>
      <Hobbies/>
      <Footer/>
    </div>:<DesignWarning/>}</div>
  );
}

export default App;
