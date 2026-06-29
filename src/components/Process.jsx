import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhoneVolume, 
  FaClipboardCheck, 
  FaFileInvoiceDollar, 
  FaWrench, 
  FaVialCircleCheck, 
  FaCircleCheck 
} from 'react-icons/fa6';

export default function Process() {
  const steps = [
    {
      step: '01',
      title: 'Call Us',
      description: 'Contact us via phone call or WhatsApp to discuss your electrical issues or requirements.',
      icon: <FaPhoneVolume className="text-xl text-primary-dark" />,
      color: 'bg-primary-orange'
    },
    {
      step: '02',
      title: 'Site Visit',
      description: 'We visit your property in Nedumangad/Thiruvananthapuram area to assess the work requirements.',
      icon: <FaClipboardCheck className="text-xl text-primary-dark" />,
      color: 'bg-primary-orange'
    },
    {
      step: '03',
      title: 'Quotation',
      description: 'We present a transparent, pocket-friendly price estimation covering labor and material parameters.',
      icon: <FaFileInvoiceDollar className="text-xl text-primary-dark" />,
      color: 'bg-primary-orange'
    },
    {
      step: '04',
      title: 'Installation',
      description: 'Our experienced hands execute the wiring, fitting, or repairs complying with high safety codes.',
      icon: <FaWrench className="text-xl text-primary-dark" />,
      color: 'bg-primary-orange'
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Rigorous load inspection, polarity checking, insulation verification, and final safety checks.',
      icon: <FaVialCircleCheck className="text-xl text-primary-dark" />,
      color: 'bg-primary-orange'
    },
    {
      step: '06',
      title: 'Completion',
      description: 'Power handover with a clean worksite and service warranty details explained to you.',
      icon: <FaCircleCheck className="text-xl text-primary-dark" />,
      color: 'bg-primary-orange'
    }
  ];

  return (
    <section id="process" className="py-24 bg-primary-dark relative">
      {/* Decorative Light Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-primary-orange/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-primary-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs text-primary-orange font-bold uppercase tracking-widest block mb-3">OUR WORK FLOW</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            How We <span className="text-primary-orange">Work</span>
          </h2>
          <div className="w-16 h-1 bg-primary-orange mx-auto mt-4 rounded-full" />
          <p className="font-sans text-accent-light/80 mt-6 text-sm sm:text-base leading-relaxed">
            Our step-by-step approach ensures that every electrical job is done safely, on time, and within budget, with zero surprises.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central timeline line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-accent-dark/80 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-accent-dark/80 -translate-x-1/2 md:hidden" />

          {/* Timeline Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((stepData, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-start md:items-center relative ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  {/* Timeline Badge (Circle in Center) */}
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ type: 'spring', damping: 15, delay: 0.1 }}
                    className="absolute left-6 md:left-1/2 w-12 h-12 rounded-full bg-accent-dark border-2 border-primary-orange flex items-center justify-center -translate-x-1/2 z-20 shadow-md glow-shadow-orange"
                  >
                    <span className="text-xs text-primary-orange font-heading font-bold">{stepData.step}</span>
                  </motion.div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Content Card Side */}
                  <motion.div 
                    initial={{ 
                      opacity: 0, 
                      x: isEven ? 50 : -50 
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                    className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                      isEven ? 'md:pl-16 text-left' : 'md:pr-16 text-left md:text-right'
                    }`}
                  >
                    <div className="bg-accent-dark/30 hover:bg-accent-dark/50 p-6 sm:p-8 rounded-2xl border border-accent-dark/80 transition-all duration-300 relative group">
                      
                      {/* Left accent bar in card */}
                      <div className={`absolute top-0 bottom-0 left-0 w-1 bg-primary-orange rounded-l-2xl ${
                        isEven ? '' : 'md:left-auto md:right-0 md:rounded-r-2xl md:rounded-l-none'
                      }`} />

                      {/* Icon inside the card body */}
                      <div className={`w-12 h-12 rounded-xl bg-primary-orange flex items-center justify-center mb-6 shadow-md ${
                        isEven ? '' : 'md:ml-auto'
                      }`}>
                        {stepData.icon}
                      </div>

                      <h3 className="font-heading font-bold text-xl text-white mb-2">
                        {stepData.title}
                      </h3>
                      
                      <p className="font-sans text-sm text-accent-light/75 leading-relaxed">
                        {stepData.description}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
