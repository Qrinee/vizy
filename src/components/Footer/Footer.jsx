import React from 'react';
import { Link } from 'react-router';
import './footer.css'
const Footer = () => {
  return (
    <>
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/cookies" className="footer-link">Cookies Policy</Link>
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms" className="footer-link">Terms of Use</Link>
        </div>
        <div className="footer-info">
          <p className="copyright">
            © {new Date().getFullYear()} Immigration Support ESTA division of GovGuide.co
          </p>

        </div>
      </div>

    </footer>
    </>
  );
};

export default Footer;