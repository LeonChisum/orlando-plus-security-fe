import React from 'react'
import { Route } from 'react-router-dom'

// components
import Nav from '../src/components/Nav'
import Home from '../src/components/Home'

export default function App() {
  return (
    <div>
      <Nav />
      <Route exact path='/' component={Home} />
    </div>
  )
}
