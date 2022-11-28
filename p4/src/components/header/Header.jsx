import React from 'react'
import * as MdIcons from 'react-icons/md'
import { Link } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import './Header.css'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Footer from '../footer/Footer'
import 'animate.css';
import CardsList from '../cardslist/CardsList'
import Particle from './Particle'



const Header = () => {
  return (
    <div className='container2'>
      <Particle/>
    <div className="header">
        <div className="section1">
          <h3><MdIcons.MdArrowBackIosNew className='tag'/> html <MdIcons.MdOutlineArrowForwardIos className='tag'/></h3>
          <h4><MdIcons.MdArrowBackIosNew className='tag'/> body <MdIcons.MdOutlineArrowForwardIos className='tag'/></h4>
          <h5><MdIcons.MdArrowBackIosNew className='tag'/> h1 <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
          <h2  >
            Hi,
          <Typewriter
             options={{
               autoStart:true,
               loop:true,
               delay:180,
               strings:["I'm Amin,"]
              }}
             />
             web developer 
            </h2>
          <h5><MdIcons.MdArrowBackIosNew className='tag'/>/h1 <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
          <h5><MdIcons.MdArrowBackIosNew className='tag'/> p <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
           <p>Front End Developer</p>
          <h5><MdIcons.MdArrowBackIosNew className='tag'/> /p <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
          <button ><Link to={'/contact'}>Contact me</Link></button>
          <div className="heading-myPortfolio">
          <h5><MdIcons.MdArrowBackIosNew className='tag'/> h2 <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
             <h1>My Portfolio</h1>
          </div>
          <h5><MdIcons.MdArrowBackIosNew className='tag'/> /h2 <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
        </div>
        <div className="section2">   
              <ul >
                  <li><a href="https://www.linkedin.com/in/amin-salkovic-662896245/"><i className="fab fa-linkedin"></i></a></li>
                  <li><a href="https://github.com/AminSalkovic"><i className="fa-brands fa-github"></i></a></li>
                  <li><a href="https://www.instagram.com/amin_salkovic/"><i className="fab fa-instagram"></i></a></li> 
                  <li><a href="https://sr-rs.facebook.com/amin.salkovic.9"><i className="fab fa-facebook"></i></a></li>
              </ul>
        </div>
    </div>
    <About/>
    <CardsList/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Header