import React from 'react';
import './ProgressSteps.css';

const steps = [
  { number: 1, label: 'Trip details' },
  { number: 2, label: 'Your info' },
  { number: 3, label: 'Checkout' },
];

export default function ProgressSteps({ step }) {
  return (
    <div className="progress-container">
      {steps.map((s, index) => {
        const isCompleted = s.number < step;
        const isActive = s.number === step;

        return (
          <React.Fragment key={s.number}>
            <div className={`step ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}>
              <div className="step-number">
                {isCompleted ? '✓' : s.number}
              </div>
              <span className="step-label">{s.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className={`line ${s.number < step ? 'filled' : ''}`}></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
