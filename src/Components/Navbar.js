import React from 'react';
import logo from '../Asserts/DM.png';
import { FaHandshake } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mb-4">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <img src={logo} alt="DreamNext Global LLC" className="logo" />
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About Us</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#services"
                id="servicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><a className="dropdown-item" href="#web-development">Web Development</a></li>
                <li><a className="dropdown-item" href="#app-development">App Development</a></li>
                <li><a className="dropdown-item" href="#seo">SEO</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#why-us"
                id="whyUsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Why Choose Us
              </a>
              <ul className="dropdown-menu" aria-labelledby="whyUsDropdown">
                <li><a className="dropdown-item" href="#commitment">Commitment</a></li>
                <li><a className="dropdown-item" href="#quality">Quality</a></li>
                <li><a className="dropdown-item" href="#support">Support</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#industry"
                id="industryDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Industry We Work
              </a>
              <ul className="dropdown-menu" aria-labelledby="industryDropdown">
                <li><a className="dropdown-item" href="#healthcare">Healthcare</a></li>
                <li><a className="dropdown-item" href="#finance">Finance</a></li>
                <li><a className="dropdown-item" href="#education">Education</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact Us</a>
            </li>
          </ul>
          <a className="nav-link btn-primary" href="#demo">
            <FaHandshake className="icon" />
            <span>Schedule a Demo</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
