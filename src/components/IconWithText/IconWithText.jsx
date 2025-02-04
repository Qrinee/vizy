import React from 'react'
import './iconwithtext.css'
export default function IconWithText({icon, title, content}) {
  return (
    <div className='iconwithtext'>
        <img src={icon} alt={title} width={70} />
        <h3 className='icon-text'>{title}</h3>
        <p className='icon-content'>{content}</p>
    </div>
  )
}
