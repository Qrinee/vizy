import React from 'react'
import Select from './../Select/Select';
import './selectdate.css'

export default function SelectDate({label, required, bottomText, question}) {
  return (
    <div className='data'>
        <label>{label} {required && <span className="star">*</span>}</label>
        <div className='select-date'>
        <Select options={["1","2","3"]}/>
        <Select options={["January", "Febuary", "March", "April", "May", "Jule", "July", "August", "September", "October", "November", "December"]} />
        <Select options={["1999", "2000", "2001", "2002", "2003"]} />
        {
            question ? (
            <div className="question-container">
              <button className="question-mark">?</button>
              {question && <p className="question">{question}</p>}
            </div>
            ) : null
          }
        </div>
        <p>{bottomText}</p>
    </div>
  )
}
