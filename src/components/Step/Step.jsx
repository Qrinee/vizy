import React from 'react';
import './step.css';

export default function Step({ number, title, active, completed }) {
  return (
    <div className={`step ${active ? 'active' : ''} ${completed ? 'completed' : ''}`}>
      <div className="step-number">
        {completed ? '✓' : number}
      </div>
      <div className="step-title">{title}</div>
    </div>
  );
}
