import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Reveal from './components/Reveal'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  // Synchronize theme state with DOM classList and localStorage
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="min-h-screen flex flex-col bg-bg-base text-text-base selection:bg-yellow-500 selection:text-slate-900 transition-colors duration-300">
      {/* Sticky Responsive Header with Theme Toggle props */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Page Layout Sections */}
      <main className="flex-grow">
        <Hero />
        
        <Reveal>
          <About />
        </Reveal>
        
        <Reveal>
          <Services />
        </Reveal>
        
        <Reveal>
          <Projects />
        </Reveal>
        
        <Reveal>
          <Testimonials />
        </Reveal>
        
        <Reveal>
          <Contact />
        </Reveal>
      </main>

      {/* Footer and Floating Widgets */}
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
