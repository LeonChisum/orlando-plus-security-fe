import React, { useState, useEffect, useRef } from 'react'
import './ServicesSection.css'
import ScrollReveal from '../ScrollReveal'
import SVGIcon from '../../icons/SVG'
import { servicesData } from '../../data/data'
import camerasImg from '../../images/many-cameras.jpg'

/* ── Modal ────────────────────────────────────────────────── */
function ServiceModal({ service, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="svc-modal-backdrop"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label={service.title}
    >
      <div className="svc-modal">
        <button className="svc-modal-close" onClick={onClose} aria-label="Close">✕</button>

        <div className="svc-modal-icon">
          <SVGIcon name={service.icon} fill="#d4af37" width={48} />
        </div>

        <h3 className="svc-modal-title">{service.title}</h3>
        <hr className="svc-modal-rule" />
        <p className="svc-modal-body">{service.info}</p>

        <a href="#contact" className="btn-gold svc-modal-cta" onClick={onClose}>
          Request a Quote →
        </a>
      </div>
    </div>
  )
}

/* ── Card ─────────────────────────────────────────────────── */
function ServiceCard({ service, onLearnMore }) {
  const { title, info, icon } = service
  return (
    <div className="service-card">
      <div className="service-card-icon">
        <SVGIcon name={icon} fill="#d4af37" width={52} />
      </div>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-desc">{info}</p>
      <button
        className="service-card-link"
        onClick={() => onLearnMore(service)}
        aria-label={`Learn more about ${title}`}
      >
        Learn more <span aria-hidden="true">→</span>
      </button>
    </div>
  )
}

/* ── Section ──────────────────────────────────────────────── */
export default function ServicesSection() {
  const [active, setActive]   = useState(0)
  const [modal, setModal]     = useState(null)
  const trackRef              = useRef(null)

  const total    = servicesData.length
  const maxIndex = total - 1

  const prev = () => setActive(i => Math.max(0, i - 1))
  const next = () => setActive(i => Math.min(maxIndex, i + 1))

  return (
    <section id="services" className="section services-section" aria-labelledby="services-title">
      <div className="services-bg-image" style={{ backgroundImage: `url(${camerasImg})` }} aria-hidden="true" />
      <div className="services-bg-overlay" aria-hidden="true" />

      <div className="section-inner">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">What We Do</span>
            <h2 id="services-title" className="section-title">
              Professional <span>Security Services</span>
            </h2>
            <p className="section-subtitle">
              "Planned preparation prevents poor performance" — OPS delivers proven security
              solutions for trade shows, conventions, and special events across the US.
            </p>
            <hr className="gold-rule" />
          </div>
        </ScrollReveal>

        {/* ── Mobile: stacked grid ── */}
        <div className="services-mobile-grid">
          {servicesData.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 70}>
              <ServiceCard service={service} onLearnMore={setModal} />
            </ScrollReveal>
          ))}
        </div>

        {/* ── Tablet/Desktop: carousel ── */}
        <div className="services-carousel" aria-label="Services carousel">
          <button
            className="carousel-arrow carousel-arrow-prev"
            onClick={prev}
            disabled={active === 0}
            aria-label="Previous service"
          >
            ‹
          </button>

          {/* outer clips horizontal overflow; inner gives vertical room for hover lift */}
          <div className="carousel-clip">
            <div className="carousel-window" ref={trackRef}>
              <div
                className="carousel-track"
                style={{ transform: `translateX(calc(-${active} * (var(--card-w) + var(--card-gap))))` }}
              >
                {servicesData.map(service => (
                  <div key={service.id} className="carousel-slide">
                    <ServiceCard service={service} onLearnMore={setModal} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            className="carousel-arrow carousel-arrow-next"
            onClick={next}
            disabled={active === maxIndex}
            aria-label="Next service"
          >
            ›
          </button>
        </div>

        {/* dots */}
        <div className="carousel-dots" role="tablist" aria-label="Service slides">
          {servicesData.map((s, i) => (
            <button
              key={s.id}
              className={`carousel-dot${i === active ? ' carousel-dot-active' : ''}`}
              onClick={() => setActive(i)}
              role="tab"
              aria-selected={i === active}
              aria-label={`Show ${s.title}`}
            />
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="services-cta-row">
            <a href="#contact" className="btn-gold">Request a Quote</a>
            <a href="#about" className="btn-outline">Meet the Team</a>
          </div>
        </ScrollReveal>
      </div>

      {modal && <ServiceModal service={modal} onClose={() => setModal(null)} />}
    </section>
  )
}
