import React, { useState } from 'react'
import './TrainingSection.css'
import ScrollReveal from '../ScrollReveal'
import guardImg from '../../images/securityguard2.png'

const requirements = [
  'Must be 18 years of age.',
  'No disqualifying criminal history. (Background check run by the Division of Licensing.)',
  'Legally allowed to work in the United States.',
  'Must achieve a score of 75% on both written examinations to pass.',
]

const courseTopics = [
  'Chapter 493 Florida Statute',
  'Chapter 5N-1 Florida Administrative Code',
  'Chapter 790 Florida Statute — Weapons & Firearms',
  'Chapter 316 Florida Statute — Vehicles Used by Security Agencies',
  'Chapter 843 Florida Statute — Unlawful Symbols of Authority',
  'Legal Liability Issues',
  'Basic Emergency First Aid',
  'Emergency Procedures',
]

export default function TrainingSection() {
  const [open, setOpen] = useState(null)
  const toggle = key => setOpen(open === key ? null : key)

  return (
    <section id="training" className="section training-section" aria-labelledby="training-title">

      {/* background guard image */}
      <div
        className="training-bg"
        style={{ backgroundImage: `url(${guardImg})` }}
        aria-hidden="true"
      />
      <div className="training-overlay" aria-hidden="true" />

      <div className="section-inner training-inner">

        {/* left: content */}
        <div className="training-content">
          <ScrollReveal>
            <span className="section-label">Class D License Training</span>
            <h2 id="training-title" className="section-title" style={{ textAlign: 'left' }}>
              Security Officer <span>&ldquo;D&rdquo; License</span>
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0, marginRight: 0 }}>
              We offer the State of Florida Class "D" Unarmed Security License program,
              instructed by State-licensed Class DI Instructors with years of hands-on experience.
            </p>

            <div className="training-meta">
              <div className="training-meta-item">
                <span className="training-meta-label">Duration</span>
                <span className="training-meta-value">42 Hours</span>
              </div>
              <div className="training-meta-divider" aria-hidden="true" />
              <div className="training-meta-item">
                <span className="training-meta-label">Cost</span>
                <span className="training-meta-value gold">$125.00</span>
              </div>
              <div className="training-meta-divider" aria-hidden="true" />
              <div className="training-meta-item">
                <span className="training-meta-label">Pass Score</span>
                <span className="training-meta-value">75%</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            {/* accordion */}
            <div className="training-accordion">

              <div className={`t-accord${open === 'desc' ? ' t-accord-open' : ''}`}>
                <button
                  className="t-accord-trigger"
                  onClick={() => toggle('desc')}
                  aria-expanded={open === 'desc'}
                  aria-controls="ta-desc"
                >
                  <span>Course Description</span>
                  <span className="t-accord-icon" aria-hidden="true">{open === 'desc' ? '−' : '+'}</span>
                </button>
                <div id="ta-desc" className="t-accord-body">
                  <ul>
                    {courseTopics.map(t => (
                      <li key={t}><span className="t-bullet" aria-hidden="true">▸</span>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`t-accord${open === 'req' ? ' t-accord-open' : ''}`}>
                <button
                  className="t-accord-trigger"
                  onClick={() => toggle('req')}
                  aria-expanded={open === 'req'}
                  aria-controls="ta-req"
                >
                  <span>Eligibility Requirements</span>
                  <span className="t-accord-icon" aria-hidden="true">{open === 'req' ? '−' : '+'}</span>
                </button>
                <div id="ta-req" className="t-accord-body">
                  <ol>
                    {requirements.map((r, i) => (
                      <li key={i}><span className="t-num">{i + 1}.</span>{r}</li>
                    ))}
                  </ol>
                  <p className="t-note">
                    Cost of <strong className="gold-text">$125.00</strong> paid prior to or on the first day of class.
                    No exceptions regarding late payment.
                  </p>
                </div>
              </div>

            </div>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <div className="training-cta-row">
              <a href="#contact" className="btn-gold">Schedule a Class</a>
              <a href="tel:4078015323" className="btn-outline">(407)-801-5323</a>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  )
}
