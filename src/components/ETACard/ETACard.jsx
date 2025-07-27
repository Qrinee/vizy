import React from 'react'
import gb from '../../assets/GB.webp'
import { FaUser } from 'react-icons/fa6'
import './ETACard.css'
export default function ETACard() {
  return (
    <div>
        <div className='badge'>Standard Processing</div>
        <div className='card'>
            <div className='flex'>
            <h2>United Kingdom ETA</h2>
            <img src={gb} className='flag'/>
            </div>
            <div style={{fontWeight: '500'}}>
                <p>Valid for: <b>2 years after issued</b></p>
                <p>Max stay: <b>186 days per entry</b></p>
                <p>Number of entries: <b>Multiple entry</b></p>
            </div>
            <div className='divider'></div>
            <div>
                <p className='txt'>Travelers:</p>
                <FaUser style={{marginRight: '7px'}}/> Krystian Niemczyk
            </div>
        </div>
    </div>
  )
}
