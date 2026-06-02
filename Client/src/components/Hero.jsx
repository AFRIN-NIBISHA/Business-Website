import React from 'react'
import { MessageSquare, PhoneCall, ChevronRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  const whatsappUrl = `https://wa.me/919487858108?text=${encodeURIComponent('Hi, I need a quotation for a construction/design project. Let me know how we can proceed.')}`

  const handleScrollToContact = (e) => {
    e.preventDefault()
    const element = document.querySelector('#contact')
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
    <section id="home" className="relative min-h-[92vh] flex items-center pt-20 overflow-hidden font-sans">
      {/* Background Image with Dark Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_banner.png"
          alt="Modern House Exterior"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradients to adapt background for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay-from via-hero-overlay-via to-hero-overlay-to transition-colors duration-300"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-transparent to-transparent transition-colors duration-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 px-4 py-1.5 rounded-full text-yellow-500 text-sm font-semibold tracking-wide uppercase">
              <CheckCircle2 className="h-4 w-4" />
              Trusted Building & Renovating Partner
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight leading-tight text-hero-text transition-colors duration-300">
              We Build Structures<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300">
                That Last For Generations
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-hero-text-muted max-w-2xl leading-relaxed transition-colors duration-300">
              Premium architecture, robust construction planning, custom interior styling, and structural renovations. Franklin turns your design dreams into absolute reality.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-yellow-500/15 hover:-translate-y-0.5 transition-all duration-200"
              >
                Send Inquiry
                <ChevronRight className="h-5 w-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-emerald-500/15 hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageSquare className="h-5 w-5 fill-current" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-card-border max-w-xl">
              <div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-hero-text transition-colors duration-300">
                  25+
                </div>
                <div className="text-sm text-hero-text-muted mt-1 transition-colors duration-300">Years of Experience</div>
              </div>
              <div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-yellow-500">
                  100+
                </div>
                <div className="text-sm text-hero-text-muted mt-1 transition-colors duration-300">Buildings in Tamil Nadu</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-hero-text transition-colors duration-300">
                  100%
                </div>
                <div className="text-sm text-hero-text-muted mt-1 transition-colors duration-300">Quality Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Quick Floating Cards / Aesthetic Showcase Panel */}
          <div className="lg:col-span-4 hidden lg:block relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
            <div className="relative space-y-6">
              {/* Card 1 */}
              <div className="bg-hero-card-bg backdrop-blur-md p-6 rounded-2xl border border-hero-card-border shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-display font-bold text-lg text-hero-text mb-2 transition-colors duration-300">Quality Materials</h3>
                <p className="text-sm text-hero-text-muted transition-colors duration-300">We source only the finest steel, premium grade concrete, and structural wood to ensure durability.</p>
              </div>
              {/* Card 2 */}
              <div className="bg-hero-card-bg backdrop-blur-md p-6 rounded-2xl border border-hero-card-border shadow-xl transform translate-x-4 hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-display font-bold text-lg text-yellow-500 mb-2 transition-colors duration-300">Detailed Quotation</h3>
                <p className="text-sm text-hero-text-muted transition-colors duration-300">Get transparent billing estimations and materials schedules before starting construction.</p>
              </div>
              {/* Card 3 */}
              <div className="bg-hero-card-bg backdrop-blur-md p-6 rounded-2xl border border-hero-card-border shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-display font-bold text-lg text-hero-text mb-2 transition-colors duration-300">On-Time Delivery</h3>
                <p className="text-sm text-hero-text-muted transition-colors duration-300">Strict progress tracking ensures we hand over your completed dream project on schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
