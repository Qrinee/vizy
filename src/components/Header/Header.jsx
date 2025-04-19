import React from 'react'
import './header.css'
import logo from '../../assets/visa.png'
import { useLanguage } from '../../context/LanguageContext'
import { Link } from 'react-router'

export default function Header() {
  const { language, switchLanguage } = useLanguage()

  return (
    <header>
      <div className='header-conent'>
        <div className='logo'>
          <Link to={'/'}>
            <img src={logo} alt='logo' />
          </Link>
        </div>

        <div className='header-actions'>
          <select value={language} onChange={(e) => switchLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="de">Deutch</option>
            <option value="fr">Francais</option>
            <option value="es">Espanol</option>
            <option value="nl">Nederlands</option>
            <option value="ja">Japan</option>
            <option value="tw">Taiwan</option>
            <option value="ko">Korean</option>
            <option value="it">Italiano</option>
            <option value="pt">Portugues</option>
            <option value="cs">Cestina</option>
          </select>

          <Link to="/contact" className="contact-button">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  )
}
