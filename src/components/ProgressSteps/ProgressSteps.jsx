import React from 'react';
import './ProgressSteps.css';

const steps = [
  { number: 1, label: 'Trip details', completed: true },
  { number: 2, label: 'Your info', completed: false },
  { number: 3, label: 'Checkout', completed: false },
];

export default function ProgressSteps() {
  return (
    <div className="progress-container">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className={`step ${step.completed ? 'completed' : ''} ${index === 1 ? 'active' : ''}`}>
            <div className="step-number">
              {step.completed ? '✓' : step.number}
            </div>
            <span className="step-label">{step.label}</span>
          </div>
          {index < steps.length - 1 && (
            <div className={`line ${index < 1 ? 'filled' : ''}`}></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
