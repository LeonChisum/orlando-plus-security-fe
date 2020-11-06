import React from 'react'
import { Route } from 'react-router-dom'
import "./App.css"

// components
import Nav from '../src/components/Nav/Nav'
import Home from '../src/components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Footer from './components/Footer'
import Courses from './components/Courses/Courses'

export default function App() {
  return (
    <div>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/services' component={Services} />
      <Route exact path='/securitydtraining' component={Courses} />
      <Footer />
    </div>
  )
}
