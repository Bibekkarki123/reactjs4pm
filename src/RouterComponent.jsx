import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import PageNotFound from './components/PageNotFound'

export default function RouterComponent() {
  return (
    <div>
        <Routes>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />

        </Routes>
      
    </div>
  )
}
