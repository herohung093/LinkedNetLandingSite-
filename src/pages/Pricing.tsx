import React from 'react';
import { Check, DollarSign, Calendar, Shield } from 'lucide-react';
import { config } from '../config';

function Pricing() {
  const features = [
    "Unlimited staff members",
    "Unlimited services",
    "Custom booking page",
    "Email & SMS notifications",
    "Staff management",
    "Analytics dashboard",
    "Mobile app access",
    "24/7 customer support",
    "Secure payment processing",
    "Client management",
    "Automated reminders",
    "Service menu customization"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Only pay for what you use. No hidden fees, no commitments.
          </p>
        </div>
      </div>

      {/* Pricing Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="flex justify-center">
                <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600">
                  Pay Per Booking
                </span>
              </div>
              <div className="mt-4 flex justify-center text-6xl font-extrabold text-gray-900">
                <span className="flex items-start px-3 text-7xl">
                  <DollarSign className="h-12 w-12 text-indigo-600" />
                  <span>1</span>
                </span>
                <span className="text-2xl font-medium text-gray-500 mt-8">/booking</span>
              </div>
              <p className="mt-4 text-xl text-center text-gray-500">
                No monthly fees. Only pay when you get bookings.
              </p>
            </div>
            <div className="px-6 pt-6 pb-8 bg-gray-50 sm:px-10 sm:py-10">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a
                  href={config.urls.signup}
                  className="block w-full bg-indigo-600 text-center rounded-lg py-3 px-4 font-medium text-white hover:bg-indigo-700"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Monthly Fees</h3>
              <p className="text-gray-600">
                Only pay when you receive bookings. No bookings, no charges.
              </p>
            </div>
            <div className="text-center">
              <DollarSign className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-gray-600">
                Simple $1 per booking fee. No hidden costs or surprise charges.
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Risk Free</h3>
              <p className="text-gray-600">
                Start with a free trial. No credit card required.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">What's included in the $1 per booking fee?</h3>
            <p className="text-gray-600">
              Everything! All features are included with every booking. You get access to all our premium features including staff management, analytics, mobile app, and customer support.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Are there any setup fees?</h3>
            <p className="text-gray-600">
              No setup fees. You can start using {config.company.name} completely free and only pay when you receive bookings.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">What happens if a booking is cancelled?</h3>
            <p className="text-gray-600">
              You're only charged for completed bookings. If a booking is cancelled, you won't be charged anything.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Is there a minimum commitment?</h3>
            <p className="text-gray-600">
              No minimum commitment required. You can use {config.company.name} for as long as you want and only pay for the bookings you receive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;