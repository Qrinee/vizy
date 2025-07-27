import React, { useState } from 'react';
import './ToggleRadio.css';

const ToggleRadio = ({selected, setSelected}) => {
  return (
    <div className="toggle-radio">
      <label
        className={`radio-option ${selected === 'yes' ? 'selected' : ''}`}
        onClick={() => setSelected('yes')}
      >
        <input
          type="radio"
          name="toggle"
          value="yes"
          checked={selected === 'yes'}
          onChange={() => setSelected('yes')}
        />
        <span className="circle" />
        Yes
      </label>
      <label
        className={`radio-option ${selected === 'no' ? 'selected' : ''}`}
        onClick={() => setSelected('no')}
      >
        <input
          type="radio"
          name="toggle"
          value="no"
          checked={selected === 'no'}
          onChange={() => setSelected('no')}
        />
        <span className="circle" />
        No
      </label>
    </div>
  );
};

export default ToggleRadio;
