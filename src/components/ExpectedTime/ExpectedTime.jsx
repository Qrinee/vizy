import React from 'react'
import { FaCalendar } from 'react-icons/fa6'
import './ExpectedTime.css'
export default function ExpectedTime() {
  return (
    <div className='time'><FaCalendar style={{marginRight: '10px'}}/> Expected delivery date: Tomorrow by 12:33 PM</div>
  )
}
