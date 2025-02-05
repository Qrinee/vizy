import React from 'react'
import './threeitems.css'

export default function ThreeItemsLayout({first, second, third}) {
  return (
    <div className='three-items-layout'>
        <div className='f-item til'>{first}</div>
        <div className='s-item til'>{second}</div>
        <div className='t-item til'>{third}</div>
    </div>
  )
}
