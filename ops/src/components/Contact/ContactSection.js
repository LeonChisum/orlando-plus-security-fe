import React, { useState } from 'react'
import './ContactSection.css'
import ScrollReveal from '../ScrollReveal'

export default function ContactSection() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    setStatus('sending')

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'))
  }

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="section-inner">

        <div className="contact-grid">

          {/* left info col */}
          <ScrollReveal>
            <div className="contact-info">
              <span className="section-label">Get in Touch</span>
              <h2 id="contact-title" className="section-title" style={{ textAlign: 'left' }}>
                Let&rsquo;s Secure<br /><span>Your Event</span>
              </h2>
              <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0, marginRight: 0 }}>
                Whether you need a quote, want to schedule training, or have questions —
                our team is ready to help.
              </p>

              <ul className="contact-details">
                <li>
                  <span className="contact-detail-icon" aria-hidden="true">📞</span>
                  <a href="tel:4078015323">(407)-801-5323</a>
                </li>
                <li>
                  <span className="contact-detail-icon" aria-hidden="true">✉️</span>
                  <a href="mailto:info@orlandoplussecurity.com">
                    info@orlandoplussecurity.com
                  </a>
                </li>
                <li>
                  <span className="contact-detail-icon" aria-hidden="true">📍</span>
                  <a
                    href="https://maps.google.com/?q=7616+Southland+Blvd+Ste+108+Orlando+FL+32809"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    7616 Southland Blvd, Ste 108<br />
                    Orlando, FL 32809
                  </a>
                </li>
                <li>
                  <span className="contact-detail-icon" aria-hidden="true">👍</span>
                  <a
                    href="https://www.facebook.com/OrlPlus/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook — OrlPlus
                  </a>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* right form col */}
          <ScrollReveal delay={100}>
            <div className="contact-form-wrap">
              {status === 'success' ? (
                <div className="contact-success" role="alert">
                  <span className="contact-success-icon" aria-hidden="true">✓</span>
                  <h3>Message Sent!</h3>
                  <p>We'll be in touch shortly. Thank you for reaching out.</p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="contact-form"
                  noValidate
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="contact-honeypot" aria-hidden="true">
                    <label>
                      Don't fill this out: <input name="bot-field" tabIndex={-1} />
                    </label>
                  </p>

                  <div className="contact-row">
                    <label className="contact-field">
                      <span>Name</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        autoComplete="name"
                      />
                    </label>
                    <label className="contact-field">
                      <span>Email</span>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                        autoComplete="email"
                      />
                    </label>
                  </div>

                  <label className="contact-field">
                    <span>Message</span>
                    <textarea
                      name="message"
                      placeholder="Tell us about your event or security needs..."
                      rows={5}
                      required
                    />
                  </label>

                  {status === 'error' && (
                    <p className="contact-error" role="alert">
                      Something went wrong. Please try emailing us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn-gold contact-submit"
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}
