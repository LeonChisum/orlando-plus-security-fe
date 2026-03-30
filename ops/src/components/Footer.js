import React from 'react'
import './Footer/Footer.css'
import logo from '../images/OPSLogo.png'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">

        {/* brand */}
        <div className="footer-brand">
          <img src={logo} alt="Orlando Plus Security logo" className="footer-logo" />
          <p className="footer-tagline">Strong. Friendly. Reliable.</p>
          <a
            href="https://www.facebook.com/OrlPlus/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="Follow us on Facebook"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M24 12.073C24 5.403 18.627 0 12 0S0 5.403 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.265h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
            </svg>
            Facebook
          </a>
        </div>

        {/* nav */}
        <div className="footer-col">
          <h3 className="footer-col-title">Explore</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#training">Training</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* services list */}
        <div className="footer-col">
          <h3 className="footer-col-title">Services</h3>
          <ul>
            <li>Security Officers</li>
            <li>Event Staffing</li>
            <li>CCTV Installations</li>
            <li>Security Consulting</li>
            <li>Contracted Services</li>
          </ul>
        </div>

        {/* contact */}
        <div className="footer-col">
          <h3 className="footer-col-title">Contact</h3>
          <ul>
            <li>
              <a href="tel:4078015323">(407)-801-5323</a>
            </li>
            <li>
              <a href="mailto:info@orlandoplussecurity.com">
                info@orlandoplussecurity.com
              </a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=7616+Southland+Blvd+Ste+108+Orlando+FL+32809"
                target="_blank"
                rel="noopener noreferrer"
              >
                7616 Southland Blvd, Ste 108<br />
                Orlando, FL 32809
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <small>
          &copy; {year} Orlando Plus Security &amp; Event Staffing, LLC. All Rights Reserved.
        </small>
        <a href="#home" className="footer-back-top" aria-label="Back to top">↑</a>
      </div>
    </footer>
  )
}
