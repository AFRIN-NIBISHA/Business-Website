import React from 'react'
import { MessageSquareText } from 'lucide-react'

export default function FloatingWhatsApp() {
  const phoneNumber = '919487858108'
  const defaultMessage = 'Hello Franklin, I visited your website and would like to inquire about your construction and design services.'
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center">
      {/* Tooltip */}
      <span className="mr-3 scale-0 group-hover:scale-100 transition-all duration-200 origin-right bg-slate-900 border border-slate-800 text-white text-sm py-1.5 px-3 rounded-lg shadow-xl pointer-events-none font-medium">
        Chat with us on WhatsApp
      </span>
      
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white/10"
        aria-label="Contact Franklin on WhatsApp"
      >
        {/* Pulsing glow ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30"></span>
        
        {/* SVG Custom WhatsApp Icon (or Lucide alternative) */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.47 2.012 14.025.99 11.478.99 6.046.99 1.625 5.36 1.621 10.79c-.001 1.67.437 3.3 1.266 4.747L1.879 21.03l5.77-1.516c1.447.809 3.01 1.224 4.598 1.224zm10.963-7.467c-.29-.145-1.716-.847-1.978-.942-.262-.096-.453-.145-.644.145-.191.29-.738.942-.905 1.134-.167.19-.334.212-.624.067-.29-.145-1.224-.451-2.33-1.44-.86-.767-1.44-1.716-1.609-2.006-.168-.29-.018-.447.127-.591.13-.13.29-.338.436-.508.145-.17.193-.29.29-.483.097-.19.048-.36-.024-.504-.073-.145-.644-1.55-.882-2.12-.23-.559-.465-.482-.64-.49-.166-.008-.356-.01-.546-.01-.19 0-.5.07-.762.36-.262.29-1.002.978-1.002 2.38 0 1.402 1.02 2.757 1.163 2.95 1.163 1.528 2.525 2.684 4.093 3.328 1.614.664 2.87.773 3.906.618 1.054-.158 2.716-1.109 3.102-2.183.385-1.074.385-1.993.272-2.183-.114-.19-.42-.29-.71-.436z"/>
        </svg>
      </a>
    </div>
  )
}
