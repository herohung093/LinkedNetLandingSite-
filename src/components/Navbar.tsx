import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scissors, Menu, X } from 'lucide-react';
import { config } from '../config';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isOpen && 
          menuRef.current && 
          buttonRef.current && 
          !menuRef.current.contains(event.target as Node) && 
          !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">{config.company.name}</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Home</Link>
            <Link to="/features" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Features</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Pricing</Link>
            <Link to="/support" className="text-gray-700 hover:text-indigo-600 px-3 py-2">Support</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600 px-3 py-2">About</Link>
            <a href={config.urls.login} className="text-gray-700 hover:text-indigo-600 px-4 py-2 border border-transparent hover:border-indigo-600 rounded-md">Login</a>
            <a href={config.urls.signup} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Get Started</a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              ref={buttonRef}
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        ref={menuRef}
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md hover:bg-gray-50">Home</Link>
          <Link to="/features" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md hover:bg-gray-50">Features</Link>
          <Link to="/pricing" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md hover:bg-gray-50">Pricing</Link>
          <Link to="/support" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md hover:bg-gray-50">Support</Link>
          <Link to="/about" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md hover:bg-gray-50">About</Link>
          <a href={config.urls.login} className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md hover:bg-gray-50">Login</a>
          <a href={config.urls.signup} className="block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 text-center">Get Started</a>
        </div>
      </div>
    </nav>
  );
}