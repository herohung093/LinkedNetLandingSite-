import React, { useEffect, useRef, useState } from 'react';

interface Stat {
  number: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
  className?: string;
}

export function Stats({ stats, className = '' }: StatsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={statsRef} className={`grid grid-cols-2 lg:grid-cols-4 gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className={`text-center transform transition-all duration-700 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <div className="text-4xl font-bold text-indigo-600 mb-2">
            {stat.number}
          </div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}