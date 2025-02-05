import React from "react";
import "./radio.css";

export default function Radio({ radio, name, value, onChange }) {
  return (
    <div className="cont">
      {radio &&
        radio.map((e, index) => (
          <div className="radio-container" key={index}>
            <input
              type="radio"
              id={`radio-${index}`}
              name={name || "radio-group"}
              className="radio-input"
              value={e.option} 
              checked={value === e.option} 
              onChange={(event) => onChange(event.target.value)} 
            />
            <label htmlFor={`radio-${index}`} className="radio-label">
              {e.option}
            </label>
          </div>
        ))}
    </div>
  );
}
