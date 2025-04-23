import React from 'react';
import './Terms.css'
import Header from '../components/Header/Header';

export default function Terms() {
  return (
    <>
    <Header/>
    <div className="terms-container">
      <h1 className="terms-title">GENERAL TERMS AND CONDITIONS OF USE</h1>

      <section className="terms-section">
        <p>
          Welcome to our website – <strong>govduige.co</strong>. By accessing and using this platform operated
          by <strong>DYZMAS sp. z o.o.</strong>, a limited liability company registered in Poland, you
          acknowledge that you have read, understood, and agree to be legally bound by these
          Terms of Use.
        </p>
        <p>
          We are a private third-party intermediary and not affiliated with any government or
          embassy. We do not issue visas ourselves, nor do we guarantee visa approvals.
        </p>
        <p>
          Instead, we provide administrative support services such as application assistance,
          document verification, and customer service.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="terms-subtitle">§1. Acceptance of conditions and policies of the Service</h2>
        <p>
          This service (hereinafter the "Service") is subject to the following terms and
          conditions: these Terms of Use, our Privacy Policy and our Cookies Policy.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="terms-subtitle">§2. Responsibilities of a user</h2>
        <ul>
          <li>Provide accurate, complete, and up-to-date information</li>
          <li>Ensure you have the legal right to submit all documents</li>
          <li>Take full responsibility for reviewing the final documents before submission</li>
          <li>Refrain from misusing our services for fraudulent or illegal purposes</li>
          <li>Inform us immediately if there is any change in your circumstances</li>
          <li>Confirm understanding and acceptance of the distinction between our services and government services</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2 className="terms-subtitle">§3. Our Services</h2>
        <p>
          We provide assistance with visa applications, document processing, and customer support.
          Our team will help you prepare your application according to the requirements specified by the relevant embassy or immigration authority.
        </p>
        <p>
          However, we do not guarantee visa approval or influence the decision of any government authority.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="terms-subtitle">§4. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services.
        </p>
        <p>
          This includes, but is not limited to, errors in submitted documents, application rejections, or delays in processing.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="terms-subtitle">§5. Intellectual Property</h2>
        <p>
          All content, design elements, and materials on our platform are the intellectual property of DYZMAS sp. z o.o. or our partners and are protected by applicable laws.
        </p>
        <p>
          You may not reproduce, modify, or distribute any materials without explicit written permission.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="terms-subtitle">§6. Modifications to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Use at any time. Any changes will be effective upon posting on this website.
        </p>
        <p>
          It is your responsibility to regularly review the Terms of Use to stay informed of updates.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="terms-subtitle">§7. Governing Law</h2>
        <p>
          These Terms shall be governed by and interpreted in accordance with the laws of Poland.
          Any disputes shall be subject to the exclusive jurisdiction of Polish courts.
        </p>
      </section>
    </div>
  </>
  );
}