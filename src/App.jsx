import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "Prakash Electrical",
    "image": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80",
    "logo": "https://prakashelectrical.com/logo.png",
    "description": "Professional electrical contractor in Nedumangad and Thiruvananthapuram offering house wiring, LED fittings, inverter installation, AC wiring, repairs and maintenance.",
    "telephone": "+919847472927",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Binu Bhavan, Velloorkonam, Mancha P.O",
      "addressLocality": "Nedumangad",
      "addressRegion": "Kerala",
      "postalCode": "695541",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 8.608034,
      "longitude": 76.993717
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "sameAs": []
  };

  return (
    <>
      {/* SEO Optimization Metadata */}
      <Helmet>
        <title>Prakash Electrical | Electrician in Nedumangad | House Wiring | Electrical Services</title>
        <meta 
          name="description" 
          content="Professional electrical contractor in Nedumangad and Thiruvananthapuram offering house wiring, LED fittings, inverter installation, AC wiring, repairs, maintenance and commercial electrical solutions." 
        />
        <meta 
          name="keywords" 
          content="Electrician Nedumangad, Electrician Thiruvananthapuram, House Wiring Kerala, Commercial Electrical Work, LED Installation, Inverter Installation, Electrical Repairs, Electrician Near Me, Electrical Contractor Kerala" 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prakashelectrical.com/" />
        <meta property="og:title" content="Prakash Electrical | Electrician in Nedumangad | House Wiring" />
        <meta 
          property="og:description" 
          content="Professional electrical contractor in Nedumangad and Thiruvananthapuram. Expert house wiring, inverter setups, LED fittings, and repairs." 
        />
        <meta property="og:image" content="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://prakashelectrical.com/" />
        <meta property="twitter:title" content="Prakash Electrical | Electrician in Nedumangad" />
        <meta 
          property="twitter:description" 
          content="Professional electrical contractor in Nedumangad and Thiruvananthapuram. Expert house wiring, inverter setups, LED fittings, and repairs." 
        />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80" />

        {/* Canonical */}
        <link rel="canonical" href="https://prakashelectrical.com/" />

        {/* Local Business Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* Main Page Layout */}
      <div className="bg-primary-dark text-white min-h-screen flex flex-col justify-between selection:bg-primary-orange selection:text-primary-dark">
        {/* Navigation Bar */}
        <Navbar />

        {/* Content Body */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Services Section */}
          <Services />

          {/* Why Choose Us Section */}
          <WhyChooseUs />

          {/* Work Process Section */}
          <Process />

          {/* Testimonials Section */}
          <Testimonials />

          {/* Call To Action Banner */}
          <CallToAction />

          {/* Contact Details & Service Area Map */}
          <Contact />
        </main>

        {/* Footer Section */}
        <Footer />

        {/* Floating Quick CTA Buttons */}
        <FloatingButtons />
      </div>
    </>
  );
}
