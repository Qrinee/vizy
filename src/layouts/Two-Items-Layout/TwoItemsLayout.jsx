import React from 'react'
import './twoitemslayout.css'
export default function TwoItemsLayout({first, second}) {
  return (
    <div className='two-items-layout'>
        <div className='l-first'>{first}</div>
        <div className='l-second'>{second}</div>
    </div>
  )
}
