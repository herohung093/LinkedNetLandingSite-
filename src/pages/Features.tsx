import React from 'react';
import { Link } from 'react-router-dom';
import { FeatureCard } from '../components/FeatureCard';
import { featuresList } from '../content/features';
import { config } from '../config';

function Features() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Powerful Features for Modern Salons</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Everything you need to run and grow your salon business, all in one platform.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Salon?</h2>
          <p className="text-xl text-gray-600 mb-8">Start your free trial today and experience all features firsthand.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a 
              href={config.urls.signup}
              className="bg-indigo-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-indigo-700 text-center"
            >
              Start Free Trial
            </a>
            <Link 
              to="/support#contact" 
              className="text-indigo-600 px-8 py-3 rounded-md font-semibold border border-indigo-600 hover:bg-indigo-50 text-center"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;