import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ResourceOptionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionText: string;
  actionLink: string;
  className?: string;
}

export function ResourceOption({ 
  icon: Icon, 
  title, 
  description, 
  actionText, 
  actionLink,
  className = '' 
}: ResourceOptionProps) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm ${className}`}>
      <Icon className="h-12 w-12 text-indigo-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={actionLink} className="text-indigo-600 hover:text-indigo-700 font-semibold">
        {actionText}
      </a>
    </div>
  );
}