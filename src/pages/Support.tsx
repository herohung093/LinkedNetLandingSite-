import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';
import { SupportOption } from '../components/SupportOption';
import { ResourceOption } from '../components/ResourceOption';
import { supportOptions, resourceOptions } from '../content/support';

function Support() {
  const location = useLocation();

  useEffect(() => {
    // Check if the URL has a hash and scroll to that element
    if (location.hash === '#contact') {
      const element = document.getElementById('contact');
      if (element) {
        // Add a small delay to ensure smooth scrolling after page load
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const handleContactSubmit = (data: { name: string; email: string; phone: string; message: string }) => {
    // Handle form submission
    console.log('Form submitted:', data);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">We're Here to Help</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get the support you need to make the most of LinkedNet.
          </p>
        </div>
      </div>

      {/* Support Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
            <SupportOption key={index} {...option} />
          ))}
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Self-Help Resources</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourceOptions.map((option, index) => (
              <ResourceOption key={index} {...option} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div id="contact" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <ContactForm onSubmit={handleContactSubmit} />
      </div>
    </div>
  );
}

export default Support;