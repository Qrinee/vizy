import React from "react";
import "./select.css";

export default function Select({
  label,
  question,
  placeholder,
  bottomText,
  required,
  left,
  options,
  value,
  onChange,
}) {
  return (
    <div className="input">
      <div>
        {label ? (
          <label>
            {label} {required && <span className="star">*</span>}
          </label>
        ) : null}
        <div className="input-container">
          {left}
          <select
            className="select"
            placeholder={placeholder}
            value={value}
            onChange={onChange} 
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options &&
              options.map((e, index) => (
                <option key={index} value={e}>
                  {e}
                </option>
              ))}
          </select>
          {question ? (
            <div className="question-container">
              <button className="question-mark">?</button>
              {question && <p className="question">{question}</p>}
            </div>
          ) : null}
        </div>
        <p>{bottomText}</p>
      </div>
    </div>
  );
}
