import React, { useState, useEffect } from 'react';
import './Nav.css';
import logo from '../../images/OPSLogo.png';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Training', href: '#training' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`nav-header${scrolled ? ' nav-scrolled' : ''}`}
        role='banner'>
        <a
          href='#home'
          onClick={close}
          aria-label='Orlando Plus Security — home'>
          <img src={logo} alt='OPS logo' className='nav-logo' />
        </a>

        <nav aria-label='Primary navigation' className='nav-desktop'>
          <ul className='nav-links'>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href='#contact' className='nav-cta-btn'>
                Get a Quote
              </a>
            </li>
          </ul>
        </nav>

        <button
          className={`nav-toggle${open ? ' nav-toggle-open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls='mobile-menu'>
          <span />
          <span />
          <span />
        </button>
      </header>

      <nav
        id='mobile-menu'
        className={`nav-drawer${open ? ' nav-drawer-open' : ''}`}
        aria-label='Mobile navigation'
        aria-hidden={!open}>
        <ul>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={close}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href='mailto:info@orlandoplussecurity.com'
              onClick={close}
              className='nav-drawer-cta'>
              Get a Quote
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
