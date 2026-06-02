import React from 'react'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const reviews = [
    {
      name: 'Ramesh Kumar',
      role: 'Homeowner',
      location: 'Anna Nagar, Chennai',
      projectType: 'House Construction',
      rating: 5,
      comment: 'Franklin constructed our dream villa from scratch. They delivered exactly on the promised structural specifications. Their transparent pricing list was very clean, showing all materials costs. I highly recommend them!'
    },
    {
      name: 'Aishwarya Sen',
      role: 'Apartment Owner',
      location: 'Adyar, Chennai',
      projectType: 'Interior Woodwork',
      rating: 5,
      comment: 'We hired Franklin for modular kitchen cabinets and wooden wardrobes. The wood finish is sleek and the carpenters worked very quickly. Every small detail, like soft-close drawer hinges, is perfect.'
    },
    {
      name: 'Dr. Vignesh Prasad',
      role: 'Clinic Director',
      location: 'Velachery, Chennai',
      projectType: 'Commercial Building Renovation',
      rating: 5,
      comment: 'We renovated our dental clinic building. Franklin handled the glass facade installation, flooring and interior layout adjustments. They completed the work in 3 weeks, allowing us to reopen on schedule.'
    },
    {
      name: 'Suresh & Priya',
      role: 'Homeowners',
      location: 'ECR, Chennai',
      projectType: 'Duplex Expansion',
      rating: 5,
      comment: 'Adding a second floor to our house was a massive worry, but Franklin’s structural engineering team guided us thoroughly. The pillars are super strong, and they designed an amazing balcony deck.'
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-bg-base relative font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-yellow-500 text-sm font-bold uppercase tracking-widest block">Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-text-base">
            What Our Clients Say
          </h2>
          <p className="text-text-mut text-base">
            Customer satisfaction is our ultimate reward. Read testimonies of our services from families and businesses across Chennai.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-card-base p-8 rounded-3xl border border-card-border relative shadow-xl hover:border-yellow-500/40 transition-all duration-200 flex flex-col justify-between"
            >
              {/* Quote Icon Background watermark */}
              <div className="absolute top-6 right-6 text-yellow-500/30 opacity-10">
                <Quote className="h-16 w-16" />
              </div>

              {/* Rating Stars */}
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-text-base opacity-90 text-sm leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center gap-4 pt-6 border-t border-card-border mt-6">
                {/* Avatar Placeholder with initials */}
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-950 font-display font-bold flex items-center justify-center text-base shadow-inner">
                  {rev.name.split(' ').map(n => n[0]).join('')}
                </div>

                <div>
                  <h4 className="font-display font-bold text-text-base text-base leading-none mb-1.5">
                    {rev.name}
                  </h4>
                  <div className="text-xs text-text-mut flex flex-wrap gap-x-2 items-center">
                    <span>{rev.role}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-400"></span>
                    <span className="text-yellow-500/90 font-medium">{rev.projectType}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-400"></span>
                    <span>{rev.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
