// src/components/Header.js
import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa';

function Header() {
  return (
    <header className="header d-flex justify-content-between align-items-center py-3">
      <div className="contact-info d-flex align-items-center">
        <p className="mb-0 me-3" style={{ marginLeft: '2rem' }}><FaPhone /> +1 307-317-1773</p>
        <p className="mb-0 me-3"><FaEnvelope /> contact@dreamnextllc.com</p>
      </div>
      <div className="social-icons d-flex align-items-center">
        <a href="https://instagram.com" className="me-2"><FaInstagram /></a>
        <a href="https://linkedin.com" className="me-2"><FaLinkedin /></a>
        <a href="https://facebook.com" className="me-2"><FaFacebook /></a>
        <a href="https://twitter.com" className="me-2"><FaTwitter /></a>
      </div>
    </header>
  );
}

export default Header;
