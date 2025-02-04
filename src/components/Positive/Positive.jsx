import React from 'react'
import './positive.css'
export default function Positive({icon, title, content}) {
  return (
    <div className='positive'>
        <img src={icon} alt={title} width={100} />
        <div className='positive-content'>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    </div>
  )
}
