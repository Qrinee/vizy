import React from 'react';
import './infobox.css';

export default function InfoBox({ title, children }) {
  return (
    <div className="info-box">
      <div className="info-box-header">
        <span className="info-box-title">{title}</span>
      </div>
      <div className="info-box-content">
        {children}
      </div>
    </div>
  );
}
