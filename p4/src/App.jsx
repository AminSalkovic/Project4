import React from 'react';
import {Routes ,Route} from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import './App.css';

const App=()=> {
  return (

    <>
       <div className="container">
        <Navbar/>
        <Routes>
          <Route path='/'  element={<Header/>}/> 
          <Route path={'/contact'} element={<Contact/>}/>
          <Route path={'/about'} element={<About/>}/>
        </Routes>
        
       </div> 
    </>

   
   
  );
}

export default App;

