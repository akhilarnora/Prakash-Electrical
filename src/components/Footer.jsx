import React from 'react';
import { FaPlug, FaPhone, FaWhatsapp, FaEnvelope, FaLocationDot } from 'react-icons/fa6';

export default function Footer() {
  const phone = '9847472927';
  const whatsappUrl = `https://wa.me/91${phone}?text=Hi%20Prakash%20Electrical,%20I%20have%20an%20electrical%20inquiry.`;

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#151518] text-white border-t border-accent-dark/40 pt-16 pb-8">
      <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[120rem] 4xl:max-w-[150rem] mx-auto px-4 xxs:px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-accent-dark/20">

        {/* Brand Side Column */}
        <div className="lg:col-span-5 flex flex-col justify-start items-start text-left">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center gap-3 mb-6 group">
            <div className="w-9 h-9 bg-primary-orange rounded-lg flex items-center justify-center text-primary-dark shadow-md group-hover:bg-accent-gold transition-colors">
              <FaPlug className="text-lg rotate-45" />
            </div>
            <div>
              <span className="font-heading font-bold text-lg md:text-xl tracking-wide text-white">
                Prakash <span className="text-primary-orange">Electrical</span>
              </span>
              <p className="text-[9px] text-accent-light/40 tracking-widest uppercase font-semibold -mt-1">
                Smart Electrical Creations
              </p>
            </div>
          </a>
          <p className="font-sans text-sm text-accent-light/65 leading-relaxed mb-6 max-w-sm">
            Professional electrical contractors in Nedumangad & Thiruvananthapuram. We guarantee safe installations, transparent pricing, and quality workmanship for residential and commercial spaces.
          </p>
          {/* Social CTA Links */}
          <div className="flex gap-4">
            <a
              href={`tel:+91${phone}`}
              className="w-10 h-10 rounded-full bg-accent-dark/80 flex items-center justify-center text-accent-light hover:text-primary-orange hover:bg-accent-dark transition-all border border-accent-light/5"
              aria-label="Call Direct Line"
            >
              <FaPhone className="text-sm" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-accent-dark/80 flex items-center justify-center text-[#25D366] hover:bg-accent-dark transition-all border border-accent-light/5"
              aria-label="Message on WhatsApp"
            >
              <FaWhatsapp className="text-base" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="lg:col-span-2 flex flex-col justify-start items-start text-left">
          <h4 className="font-heading font-bold text-sm text-white tracking-widest uppercase mb-6 border-b border-primary-orange/20 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-3 font-sans text-sm text-accent-light/70">
            {['Home', 'About', 'Services', 'Process', 'Contact'].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => handleLinkClick(e, `#${link.toLowerCase()}`)}
                  className="hover:text-primary-orange transition-colors duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services List Column */}
        <div className="lg:col-span-2 flex flex-col justify-start items-start text-left">
          <h4 className="font-heading font-bold text-sm text-white tracking-widest uppercase mb-6 border-b border-primary-orange/20 pb-2">
            Key Services
          </h4>
          <ul className="space-y-3 font-sans text-sm text-accent-light/70">
            {['House Wiring', 'Commercial Wiring', 'LED Fittings', 'Inverter Setup', 'Phase Selector', 'AC Wiring'].map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="hover:text-primary-orange transition-colors duration-200"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Summary Column */}
        <div className="lg:col-span-3 flex flex-col justify-start items-start text-left">
          <h4 className="font-heading font-bold text-sm text-white tracking-widest uppercase mb-6 border-b border-primary-orange/20 pb-2">
            Contact
          </h4>
          <ul className="space-y-4 font-sans text-sm text-accent-light/70">
            <li className="flex items-start gap-2.5">
              <FaLocationDot className="text-primary-orange shrink-0 mt-1" />
              <span>Binu Bhavan, Velloorkonam, Mancha P.O, Nedumangad, Thiruvananthapuram, Kerala</span>
            </li>
            <li className="flex items-center gap-2.5">
              <FaPhone className="text-primary-orange shrink-0" />
              <a href={`tel:+91${phone}`} className="hover:text-primary-orange transition-colors">
                +91 {phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <FaEnvelope className="text-primary-orange shrink-0" />
              <span className="text-xs">binuprakash.pe@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Sub-footer */}
      <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[120rem] 4xl:max-w-[150rem] mx-auto px-4 xxs:px-6 md:px-12 pt-8 flex flex-col sm:flex-row gap-4 text-center">
        <p className="font-sans text-xs text-accent-light/45">
          &copy; {new Date().getFullYear()} Prakash Electrical. All Rights Reserved.
        </p>
        <p className="font-sans text-[10px] text-accent-light/30">
          Designed with ❤️ in <a href="https://arnora.in">arnora.in</a>.
        </p>
      </div>
    </footer>
  );
}
