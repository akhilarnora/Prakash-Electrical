import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaShieldHalved, FaThumbsUp, FaWrench } from 'react-icons/fa6';

export default function About() {
  const cards = [
    {
      icon: <FaAward className="text-3xl text-primary-orange" />,
      title: 'Practical Experience',
      description: 'Years of hands-on expertise in residential, commercial house wiring, and installations across Kerala.',
    },
    {
      icon: <FaWrench className="text-3xl text-primary-orange" />,
      title: 'Quality Workmanship',
      description: 'Using high-grade materials and implementing exact technical standards for long-lasting, reliable connections.',
    },
    {
      icon: <FaShieldHalved className="text-3xl text-primary-orange" />,
      title: 'Safety Standard',
      description: 'Strict adherence to electrical safety guidelines to ensure the protection of your family and property.',
    },
    {
      icon: <FaThumbsUp className="text-3xl text-primary-orange" />,
      title: 'Customer Satisfaction',
      description: 'Dedicated to offering premium, custom solutions at honest prices with responsive local support.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', damping: 20, stiffness: 100 }
    }
  };

  return (
    <section id="about" className="py-24 bg-primary-dark/45 bg-circuit-pattern relative overflow-hidden">
      <div className="max-w-7xl 2xl:max-w-screen-2xl 3xl:max-w-[120rem] 4xl:max-w-[150rem] mx-auto px-4 xxs:px-6 md:px-12 relative z-10">
        
        {/* Title and Description block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-xs text-primary-orange font-bold uppercase tracking-widest block mb-3">WHO WE ARE</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight">
              About <span className="text-primary-orange">Prakash Electrical</span>
            </h2>
            <div className="w-16 h-1 bg-primary-orange mt-4 rounded-full" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 font-sans text-accent-light/80 space-y-6 text-left"
          >
            <p className="text-base sm:text-lg leading-relaxed">
              Prakash Electrical provides professional electrical installation, maintenance, repair, and wiring services for both residential and commercial properties.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              With years of practical experience under owner <strong className="text-white">Binu Prakash</strong>, we focus on safety, quality workmanship, and customer satisfaction as our top priorities.
            </p>
            <p className="text-base sm:text-lg leading-relaxed">
              Whether it is a small repair, custom switchboard install, or complete house wiring, our goal is to deliver reliable electrical solutions at affordable prices.
            </p>
          </motion.div>
        </div>

        {/* 4 Feature Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                borderColor: 'rgba(229, 138, 53, 0.4)',
                boxShadow: '0 10px 25px rgba(229, 138, 53, 0.1)'
              }}
              className="bg-accent-dark/40 backdrop-blur-sm p-5 sm:p-8 rounded-2xl border border-accent-dark/80 flex flex-col items-start text-left transition-all duration-300 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-dark/80 rounded-xl flex items-center justify-center border border-accent-dark group-hover:border-primary-orange/30 group-hover:bg-primary-orange/5 transition-colors mb-4 sm:mb-6 shadow-inner">
                {card.icon}
              </div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-primary-orange transition-colors mb-2 sm:mb-3">
                {card.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-accent-light/75 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
