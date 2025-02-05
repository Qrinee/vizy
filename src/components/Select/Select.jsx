import React from 'react';
import './select.css'

export default function Select({ label, question, placeholder, bottomText, required, left, options }) {
  return (
    <div className='input'>
      <div>
        {label ? (
                <label>
                    {label} {required && <span className="star">*</span>}
                </label>
        ) : null}
        <div className="input-container">
          {left}
          <select className='select' placeholder={placeholder}>
                {options && options.map(e => (
                    <option>
                        {e}
                    </option>
                ))}
          </select>
          <div className="question-container">
            <button className="question-mark">?</button>
            {question && <p className="question">{question}</p>}
          </div>
        </div>
        <p>{bottomText}</p>
      </div>
    </div>
  );
}
