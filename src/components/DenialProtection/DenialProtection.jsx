import React from 'react'
import { FaShield } from 'react-icons/fa6'
import './DenialProtection.css'
import CheckBox from '../CheckBox/CheckBox'

export default function DenialProtection() {
  return (
    <div className='card fx'>
        <div>
            <FaShield style={{color: 'rgb(255 159 49)', fontSize: '30px', paddingTop: '20px', marginRight: '20px'}}/>
        </div>
        <div>
            <h2>Add denial protection</h2>
            <p>zł 68.65</p>
            <p style={{fontWeight: '400'}}>Get a 100% refund (zł349.12) if your application is rejected by the government for any reason</p>
            <p style={{color: 'rgb(57 79 225'}}>Learn more</p>
        </div>
        <div style={{display: 'flex', alignItems: 'center', margin: '20px'}}>
            <CheckBox />
        </div>
    </div>
  )
}
