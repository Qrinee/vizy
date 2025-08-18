import React from 'react';
import './ESTASummary.css';

const ESTASummary = ({total, traveler, price}) => {
  return (
    <div className="container">
      <div className="summary-box">
        <div className="row">
          <span className="titled">United Kingdom ETA</span>
          <span className="traveler">{traveler} Traveler</span>
        </div>
        <div className="row fee-row">
          <span className="fee-label">+ Government fees</span>
          <span className="price">{total}</span>
        </div>
      </div>
      <div className="footer">
        <span className="total-label">Total</span>
        {price ? <>{price}</> : <span className="checkout">Calculated at checkout</span>}
        
      </div>
    </div>
  );
};

export default ESTASummary;