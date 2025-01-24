import React from 'react';
import { Stats } from '../components/Stats';
import { stats, values, teamMembers } from '../content/about';
import { config } from '../config';

function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">About {config.company.name}</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering salon businesses worldwide with innovative booking solutions since 2020.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Stats stats={stats} />
      </div>

      {/* Story Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-6">
            {config.company.name} was founded with a simple mission: to make salon booking seamless and efficient. 
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
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;