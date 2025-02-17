import React from 'react'
import './positiveslayout.css'
import { useLanguage } from '../../context/LanguageContext'
import { Link } from 'react-router'

export default function PositivesLayout({title, children}) {
    const { t } = useLanguage()
  return (
    <div className='positives-layout'>
    <h3 className='title'>{title}</h3>
    <div className='positives-holder'>
        {children}
    </div>
      <Link to={'/application'}>
        <button className='primary'>{t.btn_start}</button>
      </Link>
    </div>
  )
}
