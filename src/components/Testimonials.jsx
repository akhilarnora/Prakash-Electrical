import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa6';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Anil Kumar',
      location: 'Mancha, Nedumangad',
      review: 'Binu Prakash completed the entire electrical wiring for my new house. The service was excellent, and he finished the work on time. He uses top quality wires and materials, and his charges are very reasonable compared to others. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Deepa Nair',
      location: 'Velloorkonam, Nedumangad',
      review: 'We had a sudden power outage issue due to a short circuit at night. Binu responded very quickly to our call and solved the problem in no time. Highly professional technician who cares about safety first.',
      rating: 5,
    },
    {
      name: 'Manoj K.',
      location: 'Peroorkada, Thiruvananthapuram',
      review: 'Excellent installation of my automatic phase selector and home inverter system. Binu explained how it works and set it up very cleanly. He is our go-to electrician for all repairs now.',
      rating: 5,
    },
    {
      name: 'Sreejith R.',
      location: 'Nedumangad, Kerala',
      review: 'Very professional switchboard replacement and LED light fittings in my shop. Prakash Electrical has great technical skills and provides transparent quotation estimates before starting. Superb service!',
      rating: 5,
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 20, stiffness: 100 }
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-primary-dark/45 bg-circuit-pattern relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-primary-orange font-bold uppercase tracking-widest block mb-3">TESTIMONIALS</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            What Our <span className="text-primary-orange">Clients Say</span>
          </h2>
          <div className="w-16 h-1 bg-primary-orange mx-auto mt-4 rounded-full" />
          <p className="font-sans text-accent-light/80 mt-6 text-sm sm:text-base leading-relaxed">
            We take pride in our service quality. Hear directly from our residential and commercial clients across Nedumangad and Thiruvananthapuram.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                borderColor: 'rgba(229, 138, 53, 0.3)',
                boxShadow: '0 12px 25px rgba(229, 138, 53, 0.08)'
              }}
              className="bg-accent-dark/30 hover:bg-accent-dark/50 p-8 rounded-2xl border border-accent-dark/80 transition-all duration-300 relative text-left flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-primary-orange/15 text-5xl pointer-events-none">
                  <FaQuoteLeft />
                </div>
                
                {/* Star Ratings */}
                <div className="flex gap-1 text-primary-orange mb-6">
                  {[...Array(test.rating)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-sm sm:text-base text-accent-light/90 leading-relaxed italic mb-8 relative z-10">
                  "{test.review}"
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-3 pt-4 border-t border-accent-dark/40">
                <div className="w-10 h-10 rounded-full bg-primary-orange/10 flex items-center justify-center text-primary-orange font-heading font-bold text-sm border border-primary-orange/20 shadow-inner">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">{test.name}</h4>
                  <span className="text-[11px] text-accent-light/50 font-medium">{test.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
