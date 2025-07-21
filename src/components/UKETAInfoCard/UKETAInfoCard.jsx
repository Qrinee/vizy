import React from 'react';
import './UKETAInfoCard.css';

const UKETAInfoCard = ({ valid, entries, onSubmit, loading }) => {
  return (
    <div className="eta-card">
      <div className="card-header">
        <div className="badge">🔥 Most popular</div>
      </div>
      
      <div className="card-content">
        <h2>United Kingdom ETA</h2>
        <div className="divider"></div>
        
        <div className="eta-info">
          <div className="eta-item">
            <div className="icon-container">
              <span className="icon">📅</span>
            </div>
            <div className="info-text">
              <div className="label">Valid for</div>
              <div className="value">{valid || 'Select visa type'}</div>
            </div>
          </div>
          
          <div className="eta-item">
            <div className="icon-container">
              <span className="icon">🛬</span>
            </div>
            <div className="info-text">
              <div className="label">Number of entries</div>
              <div className="value">Multiple entry</div>
            </div>
          </div>
          
          <div className="eta-item">
            <div className="icon-container">
              <span className="icon">⏱️</span>
            </div>
            <div className="info-text">
              <div className="label">Max stay</div>
              <div className="value">186 days per entry</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card-footer">
        <button 
          className="apply-btn" 
          onClick={onSubmit}
          disabled={loading}
        >
          {loading ? 'Submitting application...' : 'Start your application'}
        </button>
      </div>
    </div>
  );
};

export default UKETAInfoCard;