import React from 'react'
import './positiveslayout.css'
import { useLanguage } from '../../context/LanguageContext'

export default function PositivesLayout({title, children}) {
    const { t } = useLanguage()
  return (
    <div className='positives-layout'>
    <h3 className='title'>{title}</h3>
    <div className='positives-holder'>
        {children}
    </div>
    <button className='primary'>{t.btn_start}</button>
    </div>
  )
}
