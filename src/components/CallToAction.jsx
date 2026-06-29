import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp } from 'react-icons/fa6';

export default function CallToAction() {
  const phone = '9847472927';
  const whatsappUrl = `https://wa.me/91${phone}?text=Hi%20Prakash%20Electrical,%20I%20need%20an%20electrician%20urgently.`;

  return (
    <section className="py-20 bg-primary-orange text-primary-dark relative overflow-hidden shadow-2xl">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Animated Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight text-primary-dark"
        >
          Need an Electrician Today?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-sans text-base sm:text-lg md:text-xl font-medium text-primary-dark/85 mt-4 max-w-2xl mx-auto"
        >
          Get reliable, fast, and professional electrical services at your doorstep in Nedumangad, Thiruvananthapuram and nearby areas.
        </motion.p>

        {/* Buttons Group */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          {/* Call Now button */}
          <a
            href={`tel:+91${phone}`}
            className="flex items-center justify-center gap-3 bg-primary-dark text-white hover:bg-accent-dark font-heading font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-black/20 transform hover:-translate-y-0.5 active:translate-y-0 text-base"
          >
            <FaPhone className="text-sm" />
            Call Now: {phone}
          </a>
          
          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white text-primary-dark hover:bg-accent-light font-heading font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-black/10 transform hover:-translate-y-0.5 active:translate-y-0 text-base border border-transparent"
          >
            <FaWhatsapp className="text-xl text-[#25D366]" />
            WhatsApp Us
          </a>
        </motion.div>

        {/* Rapid notice line */}
        <p className="text-xs font-semibold uppercase tracking-wider text-primary-dark/70 mt-6">
          ⚡ 30-Minute response for critical emergency issues
        </p>

      </div>
    </section>
  );
}
