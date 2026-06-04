import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send, HelpCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    requirement: 'House Construction',
    message: ''
  })
  
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let tempErrors = {}
    if (!formData.name.trim()) tempErrors.name = 'Name is required'
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      tempErrors.phone = 'Please enter a valid 10-digit number'
    }
    if (!formData.location.trim()) tempErrors.location = 'Location is required'
    if (!formData.message.trim()) tempErrors.message = 'Please add a brief message'
    
    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    const recipientNumber = '919487858108'
    
    // Construct formatting for WhatsApp message
    const formattedText = 
      `*New Inquiry from Website*%0A%0A` +
      `*Name:* ${formData.name.trim()}%0A` +
      `*Phone:* ${formData.phone.trim()}%0A` +
      `*Location:* ${formData.location.trim()}%0A` +
      `*Requirement:* ${formData.requirement}%0A` +
      `*Message:* ${formData.message.trim()}`

    // Open WhatsApp in a new window tab
    window.open(
      `https://wa.me/${recipientNumber}?text=${formattedText}`,
      '_blank'
    )
  }

  return (
    <section id="contact" className="py-24 bg-section-base relative font-sans transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-yellow-500 text-sm font-bold uppercase tracking-widest block">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-text-base">
            Get a Free Quotation
          </h2>
          <p className="text-text-mut text-base">
            Ready to start your building project? Fill out the details below, and click "Send Inquiry" to submit directly to us via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact info cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card-base p-8 rounded-3xl border border-card-border space-y-8 shadow-xl">
              <h3 className="font-display font-bold text-xl text-text-base">
                Contact Details
              </h3>
              
              <div className="space-y-6">
                {/* Physical Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500/10 p-3 rounded-xl border border-yellow-500/20 text-yellow-500 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-base text-sm">Our Office Address</h4>
                    <p className="text-text-mut text-sm mt-1 leading-relaxed">
                      101c/5A, Jothi street, Christhu Nager,<br />
                      Vetturnimadam(p.o), Nagercoil-03
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500/10 p-3 rounded-xl border border-yellow-500/20 text-yellow-500 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-base text-sm">Call/WhatsApp Directly</h4>
                    <a href="tel:+919487858108" className="text-text-mut hover:text-yellow-500 text-sm mt-1 block transition-colors">
                      +91 94878 58108
                    </a>
                  </div>
                </div>

                {/* Email address */}
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-500/10 p-3 rounded-xl border border-yellow-500/20 text-yellow-500 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-base text-sm">Email Inquiry</h4>
                    <a href="mailto:info@franklinbuilders.com" className="text-text-mut hover:text-yellow-500 text-sm mt-1 block transition-colors">
                      info@franklinbuilders.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Mock Maps (using styling and UI blocks instead of loading an expensive dynamic frame) */}
            <div className="bg-card-base rounded-3xl overflow-hidden border border-card-border h-[220px] relative group shadow-xl">
              <div className="absolute inset-0 bg-card-base flex items-center justify-center text-center p-6 bg-[radial-gradient(var(--btn-sec)_1px,transparent_1px)] [background-size:16px_16px]">
                <div className="space-y-2">
                  <MapPin className="h-8 w-8 text-yellow-500 mx-auto animate-bounce" />
                  <h4 className="font-semibold text-text-base text-sm">Franklin Site Office Map</h4>
                  <p className="text-xs text-text-mut">Jothi Street near Vetturnimadam Junction</p>
                  <a
                    href="https://maps.google.com/?q=Vetturnimadam,+Nagercoil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-bold text-yellow-500 hover:underline pt-1"
                  >
                    Open in Google Maps &rsaquo;
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-card-base p-8 sm:p-10 rounded-3xl border border-card-border shadow-xl space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-text-mut">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full bg-section-base border rounded-xl px-4 py-3 text-text-base text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all ${
                      errors.name ? 'border-red-500/70' : 'border-card-border focus:border-yellow-500'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-text-mut">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9487858108"
                    className={`w-full bg-section-base border rounded-xl px-4 py-3 text-text-base text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all ${
                      errors.phone ? 'border-red-500/70' : 'border-card-border focus:border-yellow-500'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.phone}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Location */}
                <div className="space-y-2">
                  <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-text-mut">
                    Your Location / Site Area
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Vetturnimadam, Nagercoil"
                    className={`w-full bg-section-base border rounded-xl px-4 py-3 text-text-base text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all ${
                      errors.location ? 'border-red-500/70' : 'border-card-border focus:border-yellow-500'
                    }`}
                  />
                  {errors.location && (
                    <span className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.location}
                    </span>
                  )}
                </div>

                {/* Requirement dropdown */}
                <div className="space-y-2">
                  <label htmlFor="requirement" className="block text-xs font-bold uppercase tracking-wider text-text-mut">
                    Project Requirement
                  </label>
                  <select
                    id="requirement"
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    className="w-full bg-section-base border border-card-border focus:border-yellow-500 rounded-xl px-4 py-3 text-text-base text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all"
                  >
                    <option value="House Construction">House Construction</option>
                    <option value="Renovation">Renovation & Extension</option>
                    <option value="Interior Works">Interior Design & Woodworks</option>
                    <option value="Commercial Buildings">Commercial Buildings</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-text-mut">
                  Message / Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Need structural quotation for a double-story independent house construction..."
                  className={`w-full bg-section-base border rounded-xl px-4 py-3 text-text-base text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all resize-none ${
                    errors.message ? 'border-red-500/70' : 'border-card-border focus:border-yellow-500'
                  }`}
                ></textarea>
                {errors.message && (
                  <span className="text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-slate-950 font-bold w-full py-4 rounded-xl shadow-lg hover:shadow-yellow-500/10 transition-colors cursor-pointer"
              >
                <Send className="h-4.5 w-4.5" />
                Send Inquiry via WhatsApp
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}
