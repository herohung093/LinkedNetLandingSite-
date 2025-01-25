import React from 'react';
import { Link } from 'react-router-dom';
import { FeatureCard } from '../components/FeatureCard';
import { Testimonials } from '../components/Testimonials';
import { featuresList } from '../content/features';
import { testimonialsList } from '../content/testimonials';
import { config } from '../config';

function Home() {
  const keyFeatures = featuresList.filter(feature => feature.isKeyFeature);

  React.useEffect(() => {
    document.title = "LinkedNet - Australian Salon Booking System | Streamline Your Salon Management";
  }, []);

  return (
    <main className="flex flex-col" role="main">
      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white" aria-label="Hero">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=80"
            alt="Salon background"
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" itemProp="name">
              Transform Your Salon Business with Smart Booking
            </h1>
            <p className="text-xl mb-8" itemProp="description">
              {config.company.name} provides an all-in-one booking solution for salon owners to manage appointments, 
              staff, and client relationships effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a 
                href={config.urls.signup}
                className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 text-center"
              >
                Get Started Free
              </a>
              <Link 
                to="/support#contact" 
                className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-indigo-600 text-center"
              >
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" aria-label="Features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" itemProp="about">
              Everything You Need to Grow Your Salon
            </h2>
            <p className="text-xl text-gray-600">Streamline your operations with our comprehensive feature set</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50" aria-label="Testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Salon Owners</h2>
            <p className="text-xl text-gray-600">Join thousands of successful salon businesses using {config.company.name}</p>
          </div>
          
          <Testimonials testimonials={testimonialsList} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-20" aria-label="Call to Action">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Salon?</h2>
          <p className="text-xl mb-8">Join thousands of salon owners who trust {config.company.name} for their booking needs</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a 
              href={config.urls.signup}
              className="bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 text-center"
            >
              Start Free Trial
            </a>
            <Link 
              to="/support#contact" 
              className="border border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-indigo-600 text-center"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;