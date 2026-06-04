import React from 'react'
import { CheckCircle2, ShieldCheck, HeartHandshake, Award } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-yellow-500" />,
      title: 'Structural Safety',
      desc: 'All projects strictly comply with load-bearing standards, earthquake resistant design patterns, and municipal regulations.'
    },
    {
      icon: <Award className="h-6 w-6 text-yellow-500" />,
      title: 'Premium Quality',
      desc: 'From primary foundation structural steel down to internal sanitary piping, we select only certified durable materials.'
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-yellow-500" />,
      title: 'Transparent Pricing',
      desc: 'No hidden margins, no surprise changes. We deliver exact details of materials and cost breakdowns beforehand.'
    }
  ]

  return (
    <section id="about" className="py-24 bg-section-base relative font-sans transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side (Mock Collage / Stat box) */}
          <div className="relative">
            {/* Thematic Backing Elements */}
            <div className="absolute inset-0 bg-yellow-500/5 rounded-3xl transform rotate-3 scale-102"></div>
            
            {/* Main Picture Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-card-border shadow-2xl">
              <img
                src="/construction.png"
                alt="Franklin Workers Site"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-section-base via-transparent to-transparent"></div>
            </div>

            {/* Experience overlay badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-500 to-amber-600 p-6 rounded-2xl shadow-2xl max-w-xs border border-white/10 hidden sm:block">
              <div className="font-display font-black text-4xl text-slate-950">25+</div>
              <div className="font-semibold text-slate-900 mt-1 text-sm uppercase tracking-wider">Years of Solid Trust & Heritage in Tamil Nadu</div>
            </div>

            {/* Owner profile overlay card */}
            <div className="absolute -bottom-10 -left-10 bg-card-base border border-card-border p-3.5 rounded-2xl shadow-2xl hidden sm:flex items-center gap-3.5 max-w-[280px]">
              <img
                src="/franklin.jpg"
                alt="Mr. Franklin"
                className="h-16 w-16 rounded-xl object-cover border-2 border-yellow-500 shrink-0"
              />
              <div>
                <h4 className="font-display font-bold text-sm text-text-base leading-none">Mr. Franklin</h4>
                <p className="text-[11px] text-text-mut mt-1">Founder & Chief Contractor</p>
              </div>
            </div>
          </div>

          {/* Copy Side */}
          <div className="space-y-8">
            <div className="space-y-3">
              <span className="text-yellow-500 text-sm font-bold uppercase tracking-widest block">About Our Company</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-text-base">
                Franklin Builders & Engineering Services
              </h2>
            </div>
            
            <p className="text-text-base opacity-90 leading-relaxed text-lg">
              Under the expert leadership of Mr. Franklin, who brings **25+ years of solid contracting experience**, our firm has successfully completed **over 100+ building projects** across Tamil Nadu. We specialize in taking projects from initial architectural sketches up to the final key handover.
            </p>

            <p className="text-text-mut leading-relaxed text-sm">
              Whether you are planning a modern luxury villa construction in Nagercoil, a commercial complex building, or structural remodeling works, we combine strict engineering codes with top-tier craftsmanship to deliver gorgeous, resilient properties.
            </p>

            {/* Key list items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Certified Structural Engineers',
                'Advanced 3D Architecture Previews',
                'Eco-friendly Energy Layouts',
                'Rigorous On-site Supervision',
                'Skilled In-House Carpenters',
                'Punctual Delivery Schedule',
              ].map((bullet) => (
                <div key={bullet} className="flex items-center gap-2.5 text-text-base opacity-85 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500 shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Value pillars section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-card-base p-8 rounded-2xl border border-card-border shadow-lg hover:border-yellow-500/40 transition-all duration-300 group"
            >
              <div className="mb-5 bg-btn-sec/30 p-3.5 rounded-xl inline-block group-hover:bg-yellow-500/10 transition-colors">
                {v.icon}
              </div>
              <h3 className="font-display font-bold text-xl text-text-base mb-3">
                {v.title}
              </h3>
              <p className="text-text-mut text-sm leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
