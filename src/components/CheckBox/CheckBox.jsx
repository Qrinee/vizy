import React from 'react'
import './checkbox.css'

export default function CheckBox({ label, checked, onChange }) {
  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden-checkbox"
      />
      <div className={`custom-checkbox ${checked ? 'checked' : ''}`}>
        {checked && <span className="checkmark">✓</span>}
      </div>
      <span>{label}</span>
    </label>
  )
}
