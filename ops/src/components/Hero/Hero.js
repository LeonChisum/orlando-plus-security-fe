import React from 'react'
import './Hero.css'
import fenceImg from '../../images/fence.jpg'
import logoImg from '../../images/OPSLogo.png'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${fenceImg})` }}
        aria-hidden="true"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-badge">
          <img src={logoImg} alt="" aria-hidden="true" className="hero-badge-logo" />
          <span>Orlando, FL &mdash; Serving Greater Central Florida</span>
        </div>

        <h1 className="hero-headline">
          Our Business is<br />
          <span>Protecting Yours.</span>
        </h1>

        <p className="hero-sub">
          Strong. Friendly. Reliable — armed &amp; unarmed security, event staffing,
          CCTV, and consulting for trade shows &amp; conventions across the US.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-gold">Get a Quote</a>
          <a href="#services" className="btn-outline">Our Services</a>
        </div>

        <div className="hero-trust">
          <div className="hero-trust-item">
            <img src={require('../../images/BBB.png')} alt="Better Business Bureau accredited" />
          </div>
          <div className="hero-trust-item">
            <img src={require('../../images/FDACS-title-seal.png')} alt="Florida FDACS licensed" />
          </div>
        </div>
      </div>

      <a href="#services" className="hero-scroll-hint" aria-label="Scroll to services">
        <span className="hero-scroll-line" />
      </a>
    </section>
  )
}
