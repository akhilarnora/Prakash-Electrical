import React from 'react';
import { FaWhatsapp, FaPhone } from 'react-icons/fa6';

export default function FloatingButtons() {
  const phone = '9847472927';
  const whatsappUrl = `https://wa.me/91${phone}?text=Hi%20Prakash%20Electrical,%20I%20need%20electrical%20service%20support.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Phone Call Floating Button */}
      {/* <a
        href={`tel:+91${phone}`}
        className="relative group flex items-center justify-center w-14 h-14 bg-primary-orange text-primary-dark rounded-full shadow-lg hover:bg-accent-gold transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Call Binu Prakash"
      >
        
        <span className="absolute inset-0 rounded-full bg-primary-orange opacity-40 animate-ping duration-1000"></span>
        <FaPhone className="text-xl z-10" />
        
       
        <span className="absolute right-16 bg-accent-dark text-white text-xs font-semibold py-1.5 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-primary-orange/20">
          Call: +91 9847472927
        </span>
      </a> */}

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        {/* Animated pulse rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping duration-1000 delay-300"></span>
        <FaWhatsapp className="text-xl sm:text-2xl z-10" />

        {/* Tooltip */}
        <span className="absolute right-14 sm:right-16 bg-accent-dark text-white text-xs font-semibold py-1.5 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-[#25D366]/20">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}
