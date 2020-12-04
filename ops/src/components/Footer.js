import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-nav">
        <section>
          <h5>Orlando Plus Security</h5>
          <p>Strong. Friendly. Reliable.</p>
        </section>
        <section>
          <h5>Explore</h5>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
        </section>
        <section>
          <div className="flex-vertical">
            <h5>Visit</h5>
            <a
              href="http://maps.google.com/?q=7616SouthlandBlvd,Ste108Orlando,FL32809"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Orlando Plus Security & Event Staffing</span>
              <br />
              <span>7616 Southland Blvd, Ste 108</span>
              <br />
              <span>Orlando, FL 32809</span>
              <br />
              <br />
            </a>
            <h5>Contact</h5>
            <a href="mailto:info@Orlandoplussecurity.com" target="_blank" rel="noopener noreferrer">
              info@orlandoplussecurity.com
            </a>
            <a href="tel:4078015323">(407)-801-5323</a>
          </div>
        </section>
        <section>
          <h5>Follow</h5>
          <a href="https://www.facebook.com/OrlPlus/" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </section>
      </div>
      <small className="footer-copyright">
        &copy; 2020 Orlando Plus Security & Event Staffing, LLC. All Rights
        Reserved.
      </small>
    </div>
  );
}
