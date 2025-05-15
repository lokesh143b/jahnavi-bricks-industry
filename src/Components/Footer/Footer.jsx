import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-top">
        <div className="footer-brand">
          <p className="logo" aria-label="Jahnavi Bricks Logo">JAHNAVI BRICKS</p>
          <p>Trusted for Strength. Built for Generations.</p>
        </div>

        <nav className="footer-links" aria-label="Quick navigation links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/#home">Home</a></li>
            <li><a href="/#products">Products</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </nav>

        <address className="footer-contact">
          <h4>Contact Us</h4>
          <p>📍 Mandapalli, Kothapeta Mandal, Andhra Pradesh</p>
          <p>📞 +91 9493777571</p>
          <p>✉️ <a href="mailto:info@jahnavibricks.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@jahnavibricks.com</a></p>
        </address>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Jahnavi Bricks. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
