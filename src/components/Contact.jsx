import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaMapLocation, FaClock, FaUser } from 'react-icons/fa6';

export default function Contact() {
  const phone = '9847472927';
  const whatsappUrl = `https://wa.me/91${phone}?text=Hi%20Prakash%20Electrical,%20I%20want%20to%20inquire%20about%20a%20service.`;
  const mapsUrl = `https://maps.google.com/?q=Nedumangad,+Thiruvananthapuram,+Kerala`;
  
  // Google Maps embed URL centered around Nedumangad area
  const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.868779913076!2d76.99371727581177!3d8.608034094254093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b822d64a02c9%3A0xe54e605d398dc37d!2sNedumangad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1719642598000!5m2!1sen!2sin`;

  const contactDetails = [
    {
      icon: <FaUser className="text-xl text-primary-orange" />,
      title: 'Business Owner',
      value: 'Binu Prakash',
      subText: 'Chief Electrician & Contractor'
    },
    {
      icon: <FaPhone className="text-xl text-primary-orange" />,
      title: 'Phone Number',
      value: `+91 ${phone}`,
      subText: 'Available for calls & WhatsApp'
    },
    {
      icon: <FaMapLocation className="text-xl text-primary-orange" />,
      title: 'Office Location',
      value: 'Binu Bhavan, Velloorkonam, Mancha P.O, Nedumangad, Thiruvananthapuram, Kerala, PIN: 695541',
      subText: 'Servicing Thiruvananthapuram & Suburbs'
    },
    {
      icon: <FaClock className="text-xl text-primary-orange" />,
      title: 'Working Hours',
      value: 'Mon - Sat: 8:00 AM - 8:00 PM',
      subText: 'Emergency service available 24/7'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-primary-dark relative">
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-primary-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-primary-orange font-bold uppercase tracking-widest block mb-3">GET IN TOUCH</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Contact <span className="text-primary-orange">Prakash Electrical</span>
          </h2>
          <div className="w-16 h-1 bg-primary-orange mx-auto mt-4 rounded-full" />
          <p className="font-sans text-accent-light/80 mt-6 text-sm sm:text-base leading-relaxed">
            Have an electrical issue or need wiring consultation? Reach out directly to owner Binu Prakash or visit our office location.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Details Side */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Contact cards info grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-accent-dark/30 p-6 rounded-2xl border border-accent-dark/80 flex flex-col justify-start text-left hover:border-primary-orange/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-primary-dark/80 rounded-lg flex items-center justify-center border border-accent-dark mb-4">
                    {detail.icon}
                  </div>
                  <h4 className="font-heading font-bold text-sm text-accent-light/50 tracking-wide uppercase">
                    {detail.title}
                  </h4>
                  <p className="font-sans font-bold text-sm sm:text-base text-white mt-2 leading-relaxed">
                    {detail.value}
                  </p>
                  <p className="font-sans text-xs text-accent-light/60 mt-1 font-medium">
                    {detail.subText}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Live Interactive Action Buttons */}
            <div className="bg-accent-dark/20 p-6 rounded-2xl border border-accent-dark/40 flex flex-col sm:flex-row gap-4 w-full">
              <a
                href={`tel:+91${phone}`}
                className="flex-1 flex items-center justify-center gap-2 bg-primary-orange hover:bg-accent-gold text-primary-dark font-heading font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md text-sm"
              >
                <FaPhone className="text-xs" />
                Call Binu Prakash
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-accent-dark hover:bg-accent-dark/80 text-white font-heading font-bold py-3.5 px-6 rounded-xl border border-accent-light/10 hover:border-primary-orange/50 transition-all duration-300 text-sm"
              >
                <FaWhatsapp className="text-base text-[#25D366]" />
                WhatsApp Message
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none flex items-center justify-center p-3.5 bg-accent-dark hover:bg-accent-dark/80 text-white rounded-xl border border-accent-light/10 hover:border-primary-orange/50 transition-all duration-300"
                aria-label="View location on Google Maps"
              >
                <FaMapLocation className="text-base text-primary-orange" />
              </a>
            </div>

          </div>

          {/* Right Map Side with Service Area info */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Map Frame Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full flex-grow min-h-[300px] relative rounded-2xl overflow-hidden border border-accent-dark/80 shadow-2xl bg-accent-dark/10"
            >
              <iframe
                title="Prakash Electrical Nedumangad Office Map"
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full filter grayscale contrast-125 brightness-90 opacity-80 hover:opacity-100 hover:filter-none transition-all duration-500"
              />
            </motion.div>

            {/* Service Area Badge List */}
            <div className="bg-accent-dark/30 p-6 rounded-2xl border border-accent-dark/80 text-left">
              <h4 className="font-heading font-bold text-sm text-white mb-3">
                📍 Primary Service Areas Covered:
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Nedumangad', 'Thiruvananthapuram', 'Velloorkonam', 'Mancha', 'Karakulam', 'Vattiyoorkavu', 'Peroorkada', 'Kowdiar', 'Pattom', 'Mannanthala'].map((area, i) => (
                  <span 
                    key={i} 
                    className="text-xs bg-primary-dark/80 border border-accent-dark/50 text-accent-light/80 px-2.5 py-1 rounded-full font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
