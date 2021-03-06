import React from 'react'
import { Route } from 'react-router-dom'

// components
import Nav from '../src/components/Nav'
import Home from '../src/components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/services' component={Services} />
      <Footer />
    </div>
  )
}
