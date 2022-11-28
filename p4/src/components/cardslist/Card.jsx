import React from 'react'
import './Card.css'
import 'animate.css'


const Card = ({heading,text}) => {
  return (
    <section>
    <div className='card' >
          <div className="images">
                  <div className="front">
                        <h1>{heading}</h1>
                  </div>
                  <div className="back">
                        <p>{text}</p>
                  </div>
          </div>
    </div>
    </section>
  )
}

export default Card