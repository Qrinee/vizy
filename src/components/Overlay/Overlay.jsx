import React from 'react'

import './overlay.css'

export default function Overlay({img, bg, children}) {
  return (
    <div className='overlay'>
        <div className='content' style={{backgroundColor: bg}}>{children}</div>
        <img src={img} alt='usa' className='overlay-image' />
    </div>
  )
}
