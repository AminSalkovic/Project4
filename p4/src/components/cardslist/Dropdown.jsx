import React from 'react'
import CardItems from './CardItems'
import './Dropdown.css'
const Dropdown = ({text}) => {
  return (
    <div className='dropdown'>
     <p>{text}</p>
    </div>
  )
}

export default Dropdown