import React from 'react'
import { Home, RefreshCw, Sofa, Building2, ChevronRight } from 'lucide-react'

export default function Services() {
  const phoneNumber = '919487858108'

  const servicesData = [
    {
      id: 'construction',
      title: 'House Construction',
      icon: <Home className="h-7 w-7 text-yellow-500" />,
      image: '/construction.png',
      desc: 'End-to-end luxury and budget residential villa construction. We coordinate structural design, foundation laying, premium brickwork, roofing, tiling, and complete finishing.',
      points: [
        'Vastu compliant architectural planning',
        'High-grade concrete foundations & column steel',
        'Premium quality brickwork and plastering',
        'Modern sanitary & electrical wiring piping'
      ],
      whatsappMsg: 'Hi Franklin, I am planning to construct a new house and need a detailed construction quotation. Please connect with me.'
    },
    {
      id: 'renovation',
      title: 'Renovation & Extension',
      icon: <RefreshCw className="h-7 w-7 text-yellow-500" />,
      image: '/renovation.png',
      desc: 'Breath new life into your existing structure. We specialize in structural strengthening, bathroom upgrades, modular kitchen layouts, and floor extensions.',
      points: [
        'Structural health auditing & crack repair',
        'Modern bathroom renovations & leaks proofing',
        'Modular kitchen cabinet transformations',
        'Add-on floor construction & extensions'
      ],
      whatsappMsg: 'Hi Franklin, I would like to get a renovation quotation for my home. Please share how we can schedule an site visit.'
    },
    {
      id: 'interiors',
      title: 'Interior Design & Woodworks',
      icon: <Sofa className="h-7 w-7 text-yellow-500" />,
      image: '/interior.png',
      desc: 'Elegant, modern, and customized woodwork. We design premium modular kitchens, luxury wardrobes, TV console panels, false ceilings, and ambient lightning layouts.',
      points: [
        'Custom modular kitchen (Marine Ply / Acrylic)',
        'Built-in bedroom wardrobes & sliding units',
        'Designer false ceiling with modern LED fittings',
        'Custom space-saving furniture design'
      ],
      whatsappMsg: 'Hi Franklin, I want to discuss interior designing and custom wooden works for my property. Please call me back.'
    },
    {
      id: 'commercial',
      title: 'Commercial Buildings',
      icon: <Building2 className="h-7 w-7 text-yellow-500" />,
      image: '/commercial.png',
      desc: 'Sturdy, functional, and contemporary commercial properties. From modern office complexes, showrooms, warehouses, to clinical buildings and retail stores.',
      points: [
        'Steel truss & column structures',
        'Glass curtain wall facades & storefronts',
        'Industrial flooring & durable fire-safety setups',
        'Municipal zoning & clearance drawing support'
      ],
      whatsappMsg: 'Hi Franklin, we have a commercial building project and need a formal contractor quotation. Let\'s schedule a meeting.'
    }
  ]

  return (
    <section id="services" className="py-24 bg-bg-base relative font-sans transition-colors duration-300 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-yellow-500 text-sm font-bold uppercase tracking-widest block">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-text-base">
            Expert Construction & Designing Services
          </h2>
          <p className="text-text-mut text-base">
            We handle everything from foundational blueprints to final architectural touches. Check out our main service packages below.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(service.whatsappMsg)}`
            return (
              <div
                key={service.id}
                className="bg-card-base rounded-3xl overflow-hidden border border-card-border shadow-xl hover:border-yellow-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image & Icon Overlay */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card-base via-card-base/60 to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-6 bg-card-base p-3.5 rounded-2xl border border-card-border shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 pt-6 flex-grow space-y-5">
                  <h3 className="font-display font-bold text-2xl text-text-base">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-mut text-sm leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 pt-2">
                    {service.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-text-base opacity-85">
                        <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 shrink-0 mt-1.5"></span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="p-8 pt-0">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-btn-sec hover:bg-yellow-500 hover:text-slate-950 text-text-base border border-card-border hover:border-yellow-500 font-bold py-3.5 px-6 rounded-xl transition-all duration-200"
                  >
                    Get {service.title} Quote
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
