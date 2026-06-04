import React, { useState } from 'react'
import { Eye, X, MapPin } from 'lucide-react'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = ['All', 'Construction', 'Renovation', 'Interior', 'Commercial']

  const projectsData = [
    {
      id: 1,
      title: 'Shalom Residency - Final Facade',
      category: 'Construction',
      location: 'Chennai, Tamil Nadu',
      image: '/user_project_8.jpg',
      description: 'The final completed facade of a luxury residential bungalow, complete with a glass-enclosed stairwell tower, modern paint coatings, and grand entrance arch.'
    },
    {
      id: 2,
      title: 'Shalom Residency - House Warming',
      category: 'Construction',
      location: 'Chennai, Tamil Nadu',
      image: '/user_project_9.jpg',
      description: 'Completed multi-story premium home during the house warming ceremony, showcasing structural finishing, structural columns, and modern elevation design.'
    },
    {
      id: 3,
      title: 'Structural Scaffolding Phase',
      category: 'Construction',
      location: 'Chennai, Tamil Nadu',
      image: '/user_project_1.jpg',
      description: 'Site logistics and scaffold building for plastering works on the grand residential duplex elevation.'
    },
    {
      id: 4,
      title: 'Portico Structural Framing',
      category: 'Construction',
      location: 'Chennai, Tamil Nadu',
      image: '/user_project_2.jpg',
      description: 'Laying concrete slabs, column reinforcements, and scaffolding setups for the high-end main portico entrance.'
    },
    {
      id: 5,
      title: 'Concrete Columns & Framing',
      category: 'Construction',
      location: 'Chennai, Tamil Nadu',
      image: '/user_project_3.jpg',
      description: 'Setting up structural columns and casting the double-height slab for high strength and load resistance.'
    },
    {
      id: 6,
      title: 'Multi-Story Brickwork & Columns',
      category: 'Construction',
      location: 'Chennai, Tamil Nadu',
      image: '/user_project_4.jpg',
      description: 'Erecting steel scaffolding and coordinating delivery of building materials on-site during heavy structure plastering.'
    },
    {
      id: 7,
      title: 'Double Height Ceiling Framing',
      category: 'Construction',
      location: 'Chennai, Tamil Nadu',
      image: '/user_project_7.jpg',
      description: 'Structural framing of the second-story front balcony and glass staircase tower support.'
    }
  ]

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-24 bg-section-base relative font-sans transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-yellow-500 text-sm font-bold uppercase tracking-widest block">Our Gallery</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-text-base">
            Explore Our Recent Projects
          </h2>
          <p className="text-text-mut text-base">
            Take a look at the quality craftsmanship and engineering we deliver on every single residential and commercial site.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm tracking-wide transition-all duration-200 cursor-pointer ${
                activeFilter === category
                  ? 'bg-yellow-500 text-slate-950 font-bold shadow-md shadow-yellow-500/10'
                  : 'bg-card-base text-text-mut hover:text-text-base border border-card-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-card-base rounded-2xl overflow-hidden border border-card-border shadow-lg group hover:border-yellow-500/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-square overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-yellow-500 text-[#0b0f19] p-3.5 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="h-6 w-6" />
                  </div>
                </div>
                {/* Category Tag */}
                <span className="absolute top-4 left-4 bg-section-base/85 backdrop-blur-sm border border-card-border text-yellow-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Title & Info */}
              <div className="p-5 flex-grow space-y-2">
                <h3 className="font-display font-bold text-lg text-text-base group-hover:text-yellow-500 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-text-mut">
                  <MapPin className="h-3.5 w-3.5 text-yellow-500 shrink-0" />
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-sm">
          <div className="relative bg-card-base max-w-4xl w-full rounded-3xl overflow-hidden border border-card-border shadow-2xl flex flex-col md:flex-row">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-black/40 hover:bg-black/60 border border-card-border text-white p-2 rounded-full transition-colors cursor-pointer"
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left Image Column */}
            <div className="md:w-1/2 max-h-[400px] md:max-h-none overflow-hidden bg-slate-950">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Info Column */}
            <div className="p-8 md:w-1/2 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block">
                  {selectedProject.category}
                </span>
                
                <h3 className="font-display font-bold text-2xl text-text-base">
                  {selectedProject.title}
                </h3>

                <div className="flex items-center gap-1.5 text-sm text-text-mut">
                  <MapPin className="h-4 w-4 text-yellow-500 shrink-0" />
                  <span>{selectedProject.location}</span>
                </div>

                <div className="border-t border-card-border pt-4">
                  <p className="text-text-base opacity-90 text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-card-border">
                <a
                  href={`https://wa.me/919487858108?text=${encodeURIComponent(`Hi Franklin, I saw your project "${selectedProject.title}" in ${selectedProject.location} on your website gallery. I would like to get a quotation for a similar work.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold py-3 px-6 rounded-xl transition-colors w-full"
                >
                  Inquire About Similar Work
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
