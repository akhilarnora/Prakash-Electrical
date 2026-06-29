import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUserCheck, 
  FaMoneyBillWave, 
  FaBoxesPacking, 
  FaClock, 
  FaShieldCat, 
  FaFaceSmile, 
  FaPhoneSlash 
} from 'react-icons/fa6';

// Reusable animated counter component using Intersection Observer
function Counter({ endValue, duration = 1500, suffix = '' }) {
  const [count, setCount] = useState(0);
  const [hasRun, setHasRun] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun) {
          setHasRun(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasRun]);

  useEffect(() => {
    if (!hasRun) return;

    let startTime = null;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(progressPercentage * endValue));

      if (progressPercentage < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animateCount);
  }, [hasRun, endValue, duration]);

  return (
    <span ref={elementRef} className="font-heading font-extrabold text-3xl sm:text-4xl text-primary-orange">
      {count}{suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Experienced Technician',
      description: 'Hands-on practical experience executing high-quality home and industrial installations.',
      icon: <FaUserCheck className="text-xl text-primary-orange" />
    },
    {
      title: 'Affordable Pricing',
      description: 'Honest rates, detailed transparent invoices, and absolutely no hidden diagnostic fees.',
      icon: <FaMoneyBillWave className="text-xl text-primary-orange" />
    },
    {
      title: 'Quality Materials',
      description: 'We use high-grade wires, switches, conduits and switches from trusted national brands.',
      icon: <FaBoxesPacking className="text-xl text-primary-orange" />
    },
    {
      title: 'On Time Service',
      description: 'We value your schedule. Prompt appointments with quick resolution timings.',
      icon: <FaClock className="text-xl text-primary-orange" />
    },
    {
      title: 'Safe Installation',
      description: 'Execution complying strictly to insulation codes, groundings, and voltage load tests.',
      icon: <FaShieldCat className="text-xl text-primary-orange" />
    },
    {
      title: 'Customer Satisfaction',
      description: 'A stellar record of localized recommendations, warranty assistance, and happy customers.',
      icon: <FaFaceSmile className="text-xl text-primary-orange" />
    },
    {
      title: 'Emergency Support',
      description: 'Round-the-clock availability for critical hazards like fire hazards, blackouts, or sparking.',
      icon: <FaPhoneSlash className="text-xl text-primary-orange" />
    }
  ];

  const stats = [
    { value: 15, suffix: '+', label: 'Years Practical Exp' },
    { value: 2500, suffix: '+', label: 'Completed Projects' },
    { value: 100, suffix: '%', label: 'Safety Compliance' },
    { value: 24, suffix: '/7', label: 'Emergency Response' }
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
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', damping: 20, stiffness: 100 }
    }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-primary-dark/45 relative overflow-hidden">
      {/* Decorative background grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-orange/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text and Features list */}
          <div className="lg:col-span-7 text-left">
            <span className="text-xs text-primary-orange font-bold uppercase tracking-widest block mb-3">OUR STRENGTHS</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              Why Choose <span className="text-primary-orange">Prakash Electrical</span>?
            </h2>
            <div className="w-16 h-1 bg-primary-orange mt-4 mb-10 rounded-full" />

            {/* Feature cards list */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="flex gap-4 p-4 rounded-xl hover:bg-accent-dark/20 border border-transparent hover:border-accent-dark/40 transition-colors"
                >
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-primary-orange/10 flex items-center justify-center border border-primary-orange/20">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-white">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-accent-light/70 mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual Stats Box */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-accent-dark/40 border border-accent-dark/80 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Card visual mimics visiting card background cues */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-orange/5 blur-2xl rounded-full" />
              
              <h3 className="font-heading font-bold text-xl text-white mb-6 text-center lg:text-left border-b border-accent-dark/60 pb-4">
                Prakash Electrical By The Numbers
              </h3>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl bg-primary-dark/50 border border-accent-dark/50"
                  >
                    <Counter endValue={stat.value} suffix={stat.suffix} />
                    <p className="font-sans text-xs text-accent-light/65 mt-2 font-medium tracking-wide uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quality certification assurance */}
              <div className="mt-8 bg-primary-orange/5 border border-primary-orange/20 rounded-xl p-4 flex items-center gap-3">
                <div className="text-primary-orange text-xl shrink-0">&#9733;</div>
                <p className="font-sans text-xs text-accent-light/80 leading-relaxed text-left">
                  We stand behind our work. All installations come with service guarantees and post-work safety checks.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
