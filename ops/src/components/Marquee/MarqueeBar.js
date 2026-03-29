import React from 'react'
import './MarqueeBar.css'

const clients = [
  'Amazon',
  'Oracle',
  'SAP',
  'Zumba',
  "McDonald's",
  'International Sleep Products Association',
  'Las Vegas Convention Center',
  'Orange County Convention Center',
  'McCormick Place',
  'Mandalay Bay',
  'San Diego Convention Center',
]

// Duplicate for seamless loop
const track = [...clients, ...clients]

export default function MarqueeBar() {
  return (
    <div className="marquee-bar" aria-label="Clients and venues we have worked with">
      <div className="marquee-label" aria-hidden="true">Trusted by</div>
      <div className="marquee-viewport" aria-hidden="true">
        <ul className="marquee-track">
          {track.map((name, i) => (
            <li key={i} className="marquee-item">
              <span className="marquee-dot" aria-hidden="true">✦</span>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
