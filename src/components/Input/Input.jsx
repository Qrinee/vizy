import React from 'react';
import './input.css';

export default function Input({ label, question, placeholder, bottomText, required, type, left, onChange, value, name }) {
  return (
    <div className='input '>
      <div>
        <label>
          {label} {required && <span className="star">*</span>}
        </label>
        <div className="input-container">
          {left}
          <input className='input-all' name={name} type={type} placeholder={placeholder} onChange={onChange} value={value} />
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
    </div>
  );
}
