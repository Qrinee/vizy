import React, { useEffect } from 'react';
import MainLayout from '../layouts/Main-Layout/MainLayout';
import './Success.css';  
import { Link } from 'react-router';

export default function Success() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-357796121/PTQSCIPgnL0CEJmSzqoB',
        transaction_id: '123', 
      });
    }
  }, []);
  return (
    <MainLayout>
      <div className="success-container">
        <h1 className="success-title">Payment Successful!</h1>
        
        <div className="success-message">
          <p>Thank you for your purchase! Your payment was successfully processed.</p>
        </div>

        <div className="billing-info">
          <h2>What Happens Next?</h2>
          <ul>
            <li>A confirmation email with your billing details has been sent to your email address.</li>
            <li>You can expect to receive an invoice for your records shortly.</li>
            <li>If you have any questions regarding your payment, feel free to contact us.</li>
          </ul>
        </div>

        <div className="cta">
          <p>Return to <Link to={'/'}>Home Page</Link> or check your email for more details.</p>
        </div>
      </div>
    </MainLayout>
  );
}
