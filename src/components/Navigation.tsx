
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MagneticElement from './MagneticElements';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-md bg-black/50 rounded-2xl border border-gray-800 p-4">
          <div className="flex justify-between items-center">
            <MagneticElement>
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Portfolio
              </Link>
            </MagneticElement>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <MagneticElement key={item.name}>
                  <Link
                    to={item.path}
                    className={`transition-all duration-300 hover:scale-105 relative group ${
                      location.pathname === item.path 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-white to-gray-300 transition-all duration-300 ${
                      location.pathname === item.path 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                </MagneticElement>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
