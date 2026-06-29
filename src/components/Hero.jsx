import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

export default function Hero() {
  const phone = '9847472927';
  const whatsappUrl = `https://wa.me/91${phone}?text=Hi%20Prakash%20Electrical,%20I%20need%20electrical%20service%20support.`;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', damping: 25, stiffness: 100 }
    }
  };

  return (
    <section id="home" className="relative min-h-[90svh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-primary-dark">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80')`
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/95 to-primary-dark/80 lg:to-primary-dark/50" />
      </div>

      {/* Decorative Glowing Circuit Elements */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Animated circuit line 1 */}
        <motion.div
          initial={{ x: '-100%', y: '25%' }}
          animate={{ x: '100%' }}
          transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
          className="circuit-line w-40 opacity-30"
          style={{ top: '25%' }}
        />
        {/* Animated circuit line 2 */}
        <motion.div
          initial={{ x: '100%', y: '65%' }}
          animate={{ x: '-100%' }}
          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          className="circuit-line w-60 opacity-20"
          style={{ top: '65%' }}
        />
        {/* Glowing orange background node */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary-orange/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-primary-orange/5 blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[120rem] 4xl:max-w-[150rem] mx-auto px-4 xxs:px-6 md:px-12 w-full z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content Side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 text-left"
        >
          {/* Tagline Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-dark/85 border border-primary-orange/30 text-primary-orange text-xs font-semibold uppercase tracking-wider mb-6 glow-shadow-orange"
          >
            <span className="w-2 h-2 rounded-full bg-primary-orange animate-pulse" />
            Reliable Kerala Electrical Partner
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-extrabold text-3xl xxs:text-4xl sm:text-5xl md:text-6xl 3xl:text-7xl 4xl:text-8xl text-white leading-tight"
          >
            Professional <span className="text-primary-orange">Electrical Solutions</span> <br className="hidden sm:inline" />
            For Homes & Businesses
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-base sm:text-lg md:text-xl 3xl:text-2xl text-accent-light/80 mt-6 max-w-2xl 3xl:max-w-4xl leading-relaxed"
          >
            Reliable Electrical Installation, Maintenance & Repair Services in <strong className="text-white font-semibold">Nedumangad</strong> and <strong className="text-white font-semibold">Thiruvananthapuram</strong>.
          </motion.p>

          {/* Features Badges List */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 xxs:grid-cols-2 gap-y-3 gap-x-4 sm:flex sm:flex-wrap sm:gap-6 mt-8"
          >
            {[
              'Experienced Electrician',
              'Quick Response',
              'Affordable Pricing',
              'Quality Work'
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-accent-light font-medium text-sm sm:text-base 3xl:text-lg">
                <FaCheckCircle className="text-primary-orange shrink-0 text-md" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>

          {/* Call to Actions Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >


            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-accent-dark hover:bg-accent-dark/80 text-white font-heading font-bold py-4 px-8 3xl:py-5 3xl:px-10 rounded-xl border border-accent-light/10 hover:border-primary-orange/50 transition-all duration-300 shadow-md transform hover:-translate-y-0.5 active:translate-y-0 text-base 3xl:text-lg"
            >
              <FaWhatsapp className="text-lg text-[#25D366]" />
              WhatsApp Us
            </a>
          </motion.div>
        </motion.div>

        {/* Right Graphical Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:col-span-4 hidden lg:flex justify-center items-center relative"
        >
          {/* Card with visiting card visual cues */}
          <div className="w-80 h-96 3xl:w-[26rem] 3xl:h-[30rem] bg-accent-dark/45 backdrop-blur-md rounded-2xl p-6 3xl:p-8 border border-accent-light/10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Top glowing dot */}
            <div className="absolute -top-12 -right-12 w-28 h-28 3xl:w-36 3xl:h-36 rounded-full bg-primary-orange/10 blur-xl" />

            {/* Orange bar visual mimicking the card */}
            <div className="absolute top-0 bottom-0 left-0 w-3 bg-primary-orange" />

            <div className="pl-4">
              <span className="text-[10px] 3xl:text-xs text-primary-orange font-bold uppercase tracking-widest block mb-2">Licensed Contractor</span>
              <h3 className="font-heading font-bold text-2xl 3xl:text-3xl text-white">Binu Prakash</h3>
              <p className="text-xs 3xl:text-sm text-accent-light/60">Owner & Chief Electrician</p>
            </div>

            <div className="pl-4 space-y-3">
              <div className="bg-primary-dark/80 rounded-xl p-3 border border-accent-light/5">
                <span className="text-[10px] 3xl:text-xs text-accent-light/50 block">Direct Hotline</span>
                <span className="font-heading font-bold text-lg 3xl:text-xl text-primary-orange tracking-wide">+91 9847472927</span>
              </div>
              <div className="bg-primary-dark/80 rounded-xl p-3 border border-accent-light/5">
                <span className="text-[10px] 3xl:text-xs text-accent-light/50 block">Locations Covered</span>
                <span className="text-xs 3xl:text-sm text-white font-semibold">Nedumangad, TVM & Suburbs</span>
              </div>
            </div>

            <div className="pl-4 flex items-center gap-3">
              <div className="w-10 h-10 3xl:w-12 3xl:h-12 bg-primary-orange/10 rounded-lg flex items-center justify-center text-primary-orange shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 3xl:h-6 3xl:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <span className="text-xs 3xl:text-sm text-white font-bold block">100% Safe Wiring</span>
                <span className="text-[10px] 3xl:text-xs text-accent-light/60">Standards Compliant</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
