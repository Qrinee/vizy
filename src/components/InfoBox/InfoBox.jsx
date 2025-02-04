import React from 'react'
import './infobox.css'

export default function InfoBox({title, children}) {
  return (
    <div className='info-box'>
        <div className='info-box-title'>{title}</div>
        <div>{children}</div>
    </div>
  )
}
