import React from 'react'
import { Hammer, Mail, Phone, MapPin, MessageSquare } from 'lucide-react'

export default function Footer() {
  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
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
    <footer className="bg-section-base border-t border-card-border pt-16 pb-8 text-text-mut font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-yellow-500 text-slate-950 p-2 rounded-lg">
                <Hammer className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-wider text-text-base">
                FRANKLIN<span className="text-yellow-500">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-text-mut">
              Building dreams into reality. We offer premium construction, structural renovation, modern interior designing, and commercial engineering services with top-tier craftsmanship.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-yellow-500 transition-colors p-2 bg-btn-sec/10 rounded-lg hover:bg-btn-sec border border-card-border" aria-label="Facebook">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors p-2 bg-btn-sec/10 rounded-lg hover:bg-btn-sec border border-card-border" aria-label="Instagram">
                <svg className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors p-2 bg-btn-sec/10 rounded-lg hover:bg-btn-sec border border-card-border" aria-label="Twitter">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text-base font-display font-bold uppercase tracking-wider text-sm mb-6 border-l-2 border-yellow-500 pl-3">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Projects & Gallery', href: '#projects' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact Us', href: '#contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="hover:text-yellow-500 transition-colors text-sm flex items-center gap-1 group"
                  >
                    <span className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-150 mr-1">&rsaquo;</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-text-base font-display font-bold uppercase tracking-wider text-sm mb-6 border-l-2 border-yellow-500 pl-3">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                'House Construction',
                'Renovation & Remodeling',
                'Interior Designing',
                'Commercial Buildings',
                'Structural Planning',
                'Cost Estimation Quotations',
              ].map((service) => (
                <li key={service} className="text-sm hover:text-text-base transition-colors">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-text-base font-display font-bold uppercase tracking-wider text-sm mb-6 border-l-2 border-yellow-500 pl-3">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                <span className="text-sm text-text-mut">
                  101c/5A, Jothi street, Christhu Nager,<br />
                  Vetturnimadam(p.o), Nagercoil-03
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yellow-500 shrink-0" />
                <a href="tel:+919487858108" className="text-sm text-text-mut hover:text-yellow-500 transition-colors">
                  +91 94878 58108
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yellow-500 shrink-0" />
                <a href="mailto:info@franklinbuilders.com" className="text-sm text-text-mut hover:text-yellow-500 transition-colors">
                  info@franklinbuilders.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-text-mut/70 gap-4">
          <p>&copy; {new Date().getFullYear()} Franklin Constructions. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-text-base transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text-base transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
