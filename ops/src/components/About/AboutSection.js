import React, { useState } from 'react'
import './AboutSection.css'
import ScrollReveal from '../ScrollReveal'
import { managementData } from '../../data/data'
import orlandoImg from '../../images/orlando.jpg'

export default function AboutSection() {
  const [activeCard, setActiveCard] = useState(null)

  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="section-inner">

        {/* header */}
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Meet the Team</span>
            <h2 id="about-title" className="section-title">
              Leadership Built on <span>Experience</span>
            </h2>
            <p className="section-subtitle">
              Decades of law enforcement, hospitality, and event operations expertise
              at every level of our team.
            </p>
            <hr className="gold-rule" />
          </div>
        </ScrollReveal>

        {/* management cards */}
        <div className="about-grid">
          {managementData.map((person, i) => (
            <ScrollReveal key={person.id} delay={i * 100}>
              <div
                className={`mgmt-card${activeCard === person.id ? ' mgmt-card-active' : ''}`}
                onClick={() => setActiveCard(activeCard === person.id ? null : person.id)}
                role="button"
                tabIndex={0}
                aria-expanded={activeCard === person.id}
                onKeyDown={e => e.key === 'Enter' && setActiveCard(activeCard === person.id ? null : person.id)}
              >
                <div className="mgmt-card-img-wrap">
                  <img src={orlandoImg} alt="" aria-hidden="true" className="mgmt-card-bg" />
                  <img src={person.image} alt={person.name} className="mgmt-card-portrait" />
                </div>
                <div className="mgmt-card-info">
                  <h3 className="mgmt-card-name">{person.name}</h3>
                  <p className="mgmt-card-title-label">{person.title}</p>
                </div>
                <div className="mgmt-card-bio">
                  <p>{person.bio}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* testimonial */}
        <ScrollReveal delay={120}>
          <div className="testimonial-block">
            <div className="testimonial-quote-mark" aria-hidden="true">&ldquo;</div>
            <blockquote className="testimonial-text">
              You are so organized, knowledgeable and skilled at creating plans which balance
              the needs of both the facility and the clients. It was always reassuring to see
              your name listed by clients as their primary contact for event security. You
              guys make a solid professional team with years of valuable experience...
            </blockquote>
            <footer className="testimonial-footer">
              <span className="testimonial-name">Beth Barrett</span>
              <span className="testimonial-role">Convention Event Security, retired</span>
            </footer>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
