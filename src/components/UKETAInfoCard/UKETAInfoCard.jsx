import React from 'react';
import './UKETAInfoCard.css';
import { FaCalendarAlt, FaPlaneArrival, FaClock, FaFire } from 'react-icons/fa';

const UKETAInfoCard = ({ valid, entries, onSubmit, loading }) => {
  return (
    <>
            <div className="badge"><FaFire/> Most popular</div>

    <div className="eta-card">
      
      <div className="card-content">

        <h2>United Kingdom ETA</h2>
        <div className="divider"></div>
        
        <div className="eta-info">
          <div className="eta-item">
            <div className="icon-container">
              <FaCalendarAlt className="icon" />
            </div>
            <div className="info-text">
              <div className="label">Valid for</div>
              <div className="value">{valid || 'Select visa type'}</div>
            </div>
          </div>
          
          <div className="eta-item">
            <div className="icon-container">
              <FaPlaneArrival className="icon" />
            </div>
            <div className="info-text">
              <div className="label">Number of entries</div>
              <div className="value">Multiple entry</div>
            </div>
          </div>
          
          <div className="eta-item">
            <div className="icon-container">
              <FaClock className="icon" />
            </div>
            <div className="info-text">
              <div className="label">Max stay</div>
              <div className="value">186 days per entry</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-footer">
        {/* Optional submit button here */}
      </div>
    </div>
        </>
  );
};

export default UKETAInfoCard;
