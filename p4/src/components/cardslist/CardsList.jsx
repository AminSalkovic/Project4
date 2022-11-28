import React from 'react'
import Card from './Card'
import * as MdIcons from 'react-icons/md'
import './CardsList.css'
import CardItems from './CardItems'

const CardsList = () => {
  return (
    <>
    <h5><MdIcons.MdArrowBackIosNew className='tag'/> section <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
    <div className='cards-list'>
         {CardItems.map((item,index)=>{
            return <Card key={index} 
            heading={item.title}
            text={item.text}
            />
         })}
    </div>
    <h5><MdIcons.MdArrowBackIosNew className='tag'/> /section <MdIcons.MdOutlineArrowForwardIos className='tag'/></h5>
    </>
  )
}

export default CardsList