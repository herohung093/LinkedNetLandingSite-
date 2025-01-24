import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface SupportOptionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionText: string;
  actionLink: string;
  className?: string;
}

export function SupportOption({ 
  icon: Icon, 
  title, 
  description, 
  actionText, 
  actionLink,
  className = '' 
}: SupportOptionProps) {
  return (
    <div className={`p-6 border rounded-lg hover:shadow-lg transition-shadow ${className}`}>
      <Icon className="h-12 w-12 text-indigo-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={actionLink} className="text-indigo-600 hover:text-indigo-700 font-semibold">
        {actionText}
      </a>
    </div>
  );
}