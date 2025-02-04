import React from 'react'
import './partlayout.css'
export default function PartLayout({img, children}) {
  return (
    <section className='part-layout'>
      <div className='wrapper'>
        <div className='img-part'>
        <img src={img} alt='image' className='part-img' />
        </div>
        <div  className='children-part'>
          {children}
        </div>
        </div>
    </section>
  )
}
