import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHouse, 
  FaBuilding, 
  FaLightbulb, 
  FaBatteryFull, 
  FaRotate, 
  FaSnowflake, 
  FaFire, 
  FaToggleOff, 
  FaScrewdriverWrench, 
  FaBolt, 
  FaPlugCircleBolt, 
  FaPhoneVolume 
} from 'react-icons/fa6';

export default function Services() {
  const servicesList = [
    {
      title: 'House Wiring',
      description: 'Complete end-to-end safe electrical wiring for newly constructed homes or renovations.',
      icon: <FaHouse className="text-2xl text-primary-orange" />
    },
    {
      title: 'Commercial Wiring',
      description: 'Structured, heavy-duty electrical wiring solutions for shops, offices, and commercial units.',
      icon: <FaBuilding className="text-2xl text-primary-orange" />
    },
    {
      title: 'LED Light Fittings',
      description: 'Installation of modern energy-efficient LED panels, spot lights, strip lighting, and chandeliers.',
      icon: <FaLightbulb className="text-2xl text-primary-orange" />
    },
    {
      title: 'Inverter Installation',
      description: 'Seamless power backup setup, inverter integration, and battery health checks for homes.',
      icon: <FaBatteryFull className="text-2xl text-primary-orange" />
    },
    {
      title: 'Automatic Phase Selector',
      description: 'Installation of automatic changeover systems to handle power outages or phase failure without interruption.',
      icon: <FaRotate className="text-2xl text-primary-orange" />
    },
    {
      title: 'AC Installation Support',
      description: 'Heavy gauge wiring, dedicated circuit breakers, and power point installs for air conditioners.',
      icon: <FaSnowflake className="text-2xl text-primary-orange" />
    },
    {
      title: 'Heater Installation',
      description: 'Safe high-amperage water heater/geyser wiring, plumbing coordination, and breaker installation.',
      icon: <FaFire className="text-2xl text-primary-orange" />
    },
    {
      title: 'Switch Board Installation',
      description: 'Installation of modern modular switchboards, touch-sensitive plates, and clean socket fittings.',
      icon: <FaToggleOff className="text-2xl text-primary-orange" />
    },
    {
      title: 'Electrical Maintenance',
      description: 'Routine inspections, insulation resistance tests, and load checking to prevent accidents.',
      icon: <FaScrewdriverWrench className="text-2xl text-primary-orange" />
    },
    {
      title: 'Electrical Repairs',
      description: 'Quick diagnostics and troubleshooting of short circuits, flickering lights, and faulty components.',
      icon: <FaBolt className="text-2xl text-primary-orange" />
    },
    {
      title: 'Power Backup Solutions',
      description: 'Generator integration, custom panel wiring, and UPS battery backup systems configuration.',
      icon: <FaPlugCircleBolt className="text-2xl text-primary-orange" />
    },
    {
      title: 'Emergency Service',
      description: 'Rapid-response troubleshooting for sudden power blackouts, spark hazards, and wire burns.',
      icon: <FaPhoneVolume className="text-2xl text-primary-orange animate-pulse" />
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 20, stiffness: 100 }
    }
  };

  return (
    <section id="services" className="py-24 bg-primary-dark relative">
      {/* Decorative Blur BG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-primary-orange font-bold uppercase tracking-widest block mb-3">WHAT WE DO</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Our Professional <span className="text-primary-orange">Services</span>
          </h2>
          <div className="w-16 h-1 bg-primary-orange mx-auto mt-4 rounded-full" />
          <p className="font-sans text-accent-light/80 mt-6 text-sm sm:text-base leading-relaxed">
            We provide a comprehensive range of electrical services executed with precision. From small domestic repairs to complex industrial installations, we handle it all.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {servicesList.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                borderColor: 'rgba(229, 138, 53, 0.4)',
                boxShadow: '0 15px 30px rgba(229, 138, 53, 0.15)'
              }}
              className="bg-accent-dark/30 hover:bg-accent-dark/50 p-6 rounded-2xl border border-accent-dark/80 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 bg-primary-dark/80 rounded-xl flex items-center justify-center border border-accent-dark group-hover:border-primary-orange/30 group-hover:bg-primary-orange/5 transition-all duration-300 mb-6 shadow-inner">
                  {service.icon}
                </div>
                
                {/* Service Title */}
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-primary-orange transition-colors mb-3">
                  {service.title}
                </h3>
                
                {/* Service Description */}
                <p className="font-sans text-sm text-accent-light/75 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Direct Inquiry Link */}
              <div className="mt-6 pt-4 border-t border-accent-dark/50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs text-accent-light/50">Need this?</span>
                <a 
                  href={`tel:9847472927`}
                  className="text-xs text-primary-orange font-bold hover:text-accent-gold transition-colors flex items-center gap-1"
                >
                  Book Now &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Contact Reminder */}
        <div className="mt-16 text-center">
          <p className="font-sans text-sm text-accent-light/65">
            Looking for a custom service not listed here?{' '}
            <a 
              href="#contact" 
              className="text-primary-orange font-semibold hover:text-accent-gold transition-colors underline"
            >
              Get in touch with Binu Prakash
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
