import React from 'react'
import { Link } from 'react-router-dom'
import * as BiIcons from 'react-icons/bi'
import './Footer.css'
const Footer = () => {

  const scrollup=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
 
  return (
    <div className='footer'>
      <div className="sec2">
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/Contact'}>Contact</Link></li>
          <li><Link to={'/About'}>About</Link></li>
          <div className="top-button">
              <BiIcons.BiArrowToTop className='top-icon' onClick={scrollup}/>
          </div>
        </ul>
      </div>
      <div className="sec3">
        <ul>
          
           <li onClick={()=>{window.open("https://www.linkedin.com/in/amin-salkovic-662896245/")}}><i className="fab fa-linkedin"></i></li>
           <li onClick={()=>{window.open("https://github.com/AminSalkovic")}}><i className="fa-brands fa-github"></i></li>
           <li onClick={()=>{window.open("https://www.instagram.com/amin_salkovic/")}}><i className="fab fa-instagram"></i></li> 
           <li onClick={()=>{window.open("https://sr-rs.facebook.com/amin.salkovic.9")}}><i className="fab fa-facebook"></i></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;