import React from 'react';

interface TestimonialCardProps {
  content: string;
  name: string;
  role: string;
  imageUrl: string;
}

export function TestimonialCard({ content, name, role, imageUrl }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <p className="text-gray-600 mb-4">{content}</p>
      <div className="flex items-center">
        <img
          src={imageUrl}
          alt={name}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}