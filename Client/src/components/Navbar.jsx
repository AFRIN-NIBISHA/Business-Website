import React, { useState, useEffect } from 'react'
import { Menu, X, Hammer, PhoneCall, Sun, Moon } from 'lucide-react'

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Track scroll position to change background transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ScrollSpy: Track active section in viewport
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'projects', 'testimonials', 'contact']
    
    const observers = sections.map(sectionId => {
      const element = document.getElementById(sectionId)
      if (!element) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId)
          }
        },
        {
          // Trigger when the section occupies a significant center portion of the screen
          rootMargin: '-30% 0px -60% 0px'
        }
      )
      observer.observe(element)
      return { observer, element }
    })

    return () => {
      observers.forEach(item => {
        if (item && item.element) {
          item.observer.unobserve(item.element)
        }
      })
    }
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-nav-base backdrop-blur-md border-b border-card-border py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="bg-yellow-500 text-slate-950 p-2 rounded-lg group-hover:bg-yellow-600 transition-colors">
              <Hammer className="h-6 w-6" />
            </div>
            <span className="font-display font-bold text-2xl tracking-wider text-text-base">
              FRANKLIN<span className="text-yellow-500">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative py-1.5 font-medium tracking-wide transition-all duration-300 ${
                    isActive ? 'text-yellow-500 font-bold' : 'text-text-mut hover:text-yellow-500'
                  }`}
                >
                  {link.name}
                  {/* Sliding Underline Indicator */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-yellow-500 rounded-full transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              )
            })}
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="text-text-mut hover:text-yellow-500 p-2 rounded-xl bg-btn-sec/20 border border-card-border hover:bg-btn-sec/55 transition-colors cursor-pointer"
              aria-label="Toggle theme mode"
            >
              {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg shadow-md hover:shadow-yellow-500/10 transition-all duration-200"
            >
              <PhoneCall className="h-4 w-4" />
              Get Quote
            </a>
          </div>

          {/* Mobile Actions: Toggle theme + Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="text-text-mut hover:text-yellow-500 p-2 rounded-xl bg-btn-sec/20 border border-card-border hover:bg-btn-sec/55 transition-colors cursor-pointer"
              aria-label="Toggle theme mode"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-mut hover:text-text-base focus:outline-none p-1.5 rounded-lg border border-card-border"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-[65px] left-0 w-full h-[calc(100vh-65px)] bg-bg-base border-t border-card-border transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-8 space-y-6 flex flex-col justify-between h-full pb-20">
          <div className="space-y-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block text-xl font-medium py-2 border-b border-card-border transition-all duration-200 ${
                    isActive
                      ? 'text-yellow-500 font-bold pl-3 border-l-4 border-yellow-500'
                      : 'text-text-mut hover:text-yellow-500'
                  }`}
                >
                  {link.name}
                </a>
              )
            })}
          </div>
          <div className="space-y-4">
            <a
              href="tel:+919487858108"
              className="flex items-center justify-center gap-3 w-full border border-card-border text-text-base font-medium py-3 rounded-lg text-lg bg-btn-sec/10"
            >
              <PhoneCall className="h-5 w-5 text-yellow-500" />
              Call Directly
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="flex items-center justify-center gap-3 w-full bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold py-3 rounded-lg text-lg"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
