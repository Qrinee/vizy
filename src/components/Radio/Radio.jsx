import React from "react";
import "./radio.css";

export default function Radio({ radio, name, value, onChange, ind }) {
  return (
    <div className="cont">
      {radio &&
        radio.map((e, index) => (
          <div className="radio-container" key={index}>
            <input
              type="radio"
              id={`radio-${ind}-${index}`} 
              name={`radio-group-${ind}`}  
              className="radio-input"
              value={e.option}
              checked={value === e.option}
              onChange={(event) => onChange(event.target.value)}
            />
            <label htmlFor={`radio-${ind}-${index}`} className="radio-label">
              {e.option}
            </label>
          </div>
        ))}
    </div>
  );
}
