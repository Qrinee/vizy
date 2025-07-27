import React, { useState } from 'react'
import { FaShield } from 'react-icons/fa6'
import './DenialProtection.css'
import CheckBox from '../CheckBox/CheckBox'

export default function DenialProtection() {
    const [chk, setChk] = useState(false)
  return (
    <div onClick={() => setChk(!chk)} className='card fx' style={{outline:  `${chk ? '2px solid rgb(11 57 71)' : '0'}`, cursor: 'pointer'}}>
        <div>
            <FaShield style={{color: 'rgb(255 159 49)', fontSize: '30px', paddingTop: '20px', marginRight: '20px'}}/>
        </div>
        <div>
            <h2>Add denial protection</h2>
            <p>17.99 USD</p>
            <p style={{fontWeight: '400'}}>Get a 100% refund if your application is rejected by the government for any reason</p>
            <p style={{color: 'rgb(57 79 225'}}>Learn more</p>
        </div>
        <div style={{display: 'flex', alignItems: 'center', margin: '20px'}}>
            <CheckBox checked={chk} onChange={() => setChk(!chk)} />
        </div>
    </div>
  )
}
