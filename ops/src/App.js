import React from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import MarqueeBar from './components/Marquee/MarqueeBar'
import ServicesSection from './components/Services/ServicesSection'
import AboutSection from './components/About/AboutSection'
import TrainingSection from './components/Training/TrainingSection'
import ContactSection from './components/Contact/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MarqueeBar />
        <ServicesSection />
        <AboutSection />
        <TrainingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
