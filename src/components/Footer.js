import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pg-footer">
      <footer className="footer">
        <svg
          className="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            className="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg>
        <div className="footer-content">
          <div className="footer-content-column">
            <div className="footer-logo">
              <Link className="footer-logo-link" to="/">
                <img src="/images/logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name">Get Started</h2>
              <ul id="menu-get-started" className="footer-menu-list">
                <li className="menu-item">
                  <Link to="/services">Explore</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">Company</h2>
              <ul id="menu-company" className="footer-menu-list">
                <li className="menu-item">
                  <Link to="/about">About</Link>
                </li>
                <li className="menu-item">
                  <Link to="/services">Services</Link>
                </li>
                <li className="menu-item">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">Quick Links</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                <li className="menu-item">
                  <Link to="" rel="noopener noreferrer">
                    Support Center
                  </Link>
                </li>

                <li className="menu-item">
                  <Link to="/">Review</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title">Let's Chat</h2>
              <p className="footer-call-to-action-description">
                Have a support question?
              </p>
              <Link
                className="footer-call-to-action-button button"
                to="/contact"
              >
                Get in Touch
              </Link>
            </div>
            <div className="footer-call-to-action">
              <h2 className="footer-call-to-action-title">Call Us</h2>
              <p className="footer-call-to-action-link-wrapper">
                <a
                  className="footer-call-to-action-link"
                  href="tel: +977 9856061728"
                  aria-label="Call us at  +977 9856061728"
                >
                  +977 9856061728
                </a>
              </p>
            </div>
          </div>
          <div className="footer-social-links">
            <a
              className="footer-social-link facebook"
              href="https://www.facebook.com/focusiteducation/?referrer=services_landing_page"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={26} />
              <span className="hidden-link-text">Facebook</span>
            </a>

            <Link
              className="footer-social-link instagram"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={26} />
              <span className="hidden-link-text">Instagram</span>
            </Link>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">
            <p className="footer-copyright-text">
              <Link className="footer-copyright-link" href="#">
                ©2024. | Designed By: Gajendra Tiwari. | All rights reserved.
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
