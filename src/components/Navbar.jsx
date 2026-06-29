import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaPlug } from 'react-icons/fa6';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80; // height of sticky navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled
          ? 'bg-primary-dark/95 backdrop-blur-md py-2 xxs:py-2.5 sm:py-4 shadow-lg border-b border-accent-dark/30'
          : 'bg-transparent py-3 xxs:py-4 sm:py-6'
          }`}
      >
        <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[120rem] 4xl:max-w-[150rem] mx-auto px-4 xxs:px-6 md:px-12 flex justify-between items-center">
          {/* Logo Section */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 xxs:gap-3 group"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-orange rounded-xl flex items-center justify-center text-primary-dark shadow-md group-hover:bg-accent-gold transition-all duration-300">
              <FaPlug className="text-base sm:text-xl rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
            <div>
              <span className="font-heading font-bold text-sm xxs:text-base xs:text-lg sm:text-xl md:text-2xl tracking-wide text-white group-hover:text-primary-orange transition-colors">
                Prakash <span className="text-primary-orange group-hover:text-white">Electrical</span>
              </span>
              <p className="text-[8px] xxs:text-[9px] xs:text-[10px] text-accent-light/60 tracking-widest uppercase font-semibold -mt-1 group-hover:text-accent-gold transition-colors">
                Smart Electrical Creations
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative font-sans text-sm font-semibold tracking-wide text-accent-light hover:text-primary-orange transition-colors duration-300 py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Quick Contact CTA */}


          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-primary-orange transition-colors p-1"
            aria-label="Toggle navigation drawer"
          >
            {isOpen ? <HiX className="text-2xl sm:text-3xl" /> : <HiMenuAlt3 className="text-2xl sm:text-3xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm md:hidden"
            />

            {/* Sidebar drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-xs bg-primary-dark/98 border-l border-accent-dark/50 z-50 p-8 flex flex-col justify-between md:hidden"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary-orange rounded-lg flex items-center justify-center text-primary-dark">
                      <FaPlug className="text-md rotate-45" />
                    </div>
                    <span className="font-heading font-bold text-lg text-white">
                      Prakash <span className="text-primary-orange">Ele.</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-primary-orange transition-colors"
                  >
                    <HiX className="text-2xl" />
                  </button>
                </div>

                {/* Navigation Links inside drawer */}
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="font-sans text-lg font-medium text-accent-light hover:text-primary-orange transition-colors border-b border-accent-dark/50 pb-2"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom CTA in drawer */}

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
