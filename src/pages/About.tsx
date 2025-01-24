import React from 'react';
import { Users, Target, Heart, Award } from 'lucide-react';

function About() {
  const stats = [
    { number: "10,000+", label: "Salon Partners" },
    { number: "1M+", label: "Appointments Booked" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "50+", label: "Countries" }
  ];

  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "We prioritize our customers' success and growth above all else."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously improving our platform with cutting-edge technology."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Dedicated to transforming the salon industry with powerful solutions."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality service and support."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">About LinkedNet</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering salon businesses worldwide with innovative booking solutions since 2020.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-6">
            LinkedNet was founded with a simple mission: to make salon booking seamless and efficient. 
            What started as a solution for a single salon has grown into a global platform trusted by 
            thousands of businesses worldwide.
          </p>
          <p className="text-lg text-gray-600">
            Today, we're proud to be at the forefront of salon technology, helping businesses streamline 
            their operations, grow their customer base, and provide exceptional service to their clients.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <Icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center">
                <img
                  src={`https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80`}
                  alt="Team member"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-gray-600 mb-2">Chief Executive Officer</p>
                <p className="text-gray-500 text-sm">
                  15+ years of experience in salon industry and technology
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;