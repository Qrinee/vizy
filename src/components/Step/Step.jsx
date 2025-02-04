import React from 'react'
import './step.css'
export default function Step({number, title, active}) {
  return (
    <div className={`step  ${active ? 'active' :  ''}`}>
        <div className='step-number'>{number}</div>
        <div>{title}</div>
    </div>
  )
}
