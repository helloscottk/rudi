import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Sparkles, Calendar, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Heart },
    { path: '/about', label: 'About', icon: Sparkles },
    { path: '/classes', label: 'Classes', icon: Calendar },
    { path: '/teachings', label: 'Teachings', icon: Sparkles },
    { path: '/teachers', label: 'Teachers', icon: Heart },
    { path: '/prison-project', label: 'Prison Project', icon: Heart },
    { path: '/testimonials', label: 'Testimonials', icon: Sparkles },
    { path: '/contact', label: 'Contact', icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-200/50' 
        : 'bg-white/90 backdrop-blur-sm border-b border-orange-100/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 text-orange-800 hover:text-orange-900 transition-all duration-300 group"
          >
            <div className="relative">
              <Heart className="h-9 w-9 text-rose-500 group-hover:text-rose-600 transition-colors duration-300" />
              <div className="absolute inset-0 bg-rose-400/20 rounded-full blur-md group-hover:bg-rose-400/30 transition-all duration-300"></div>
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                Last Life Yoga
              </span>
              <div className="text-xs text-gray-500 font-light -mt-1">Finding Joy in the Heart</div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                    isActive(item.path)
                      ? 'text-white bg-gradient-to-r from-orange-500 to-rose-500 shadow-lg'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50/70'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className={`h-4 w-4 ${isActive(item.path) ? 'text-white' : 'text-orange-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {!isActive(item.path) && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-rose-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Quick Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/classes"
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-medium text-sm rounded-lg hover:from-orange-600 hover:to-rose-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Join Class
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600 rounded-lg hover:bg-orange-50/70 transition-all duration-300"
            >
              <div className="relative">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-4 pb-6 space-y-2 bg-gradient-to-br from-white via-orange-50/30 to-rose-50/30 border-t border-orange-200/50 backdrop-blur-sm">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl ${
                      isActive(item.path)
                        ? 'text-white bg-gradient-to-r from-orange-500 to-rose-500 shadow-lg'
                        : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50/70'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isActive(item.path) ? 'text-white' : 'text-orange-400'}`} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              
              {/* Mobile CTA */}
              <div className="pt-4 mt-4 border-t border-orange-200/50">
                <Link
                  to="/classes"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-medium rounded-xl hover:from-orange-600 hover:to-rose-600 transition-all duration-300 shadow-lg"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Join a Class</span>
                </Link>
                
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full px-4 py-3 mt-2 border-2 border-orange-300 text-orange-600 font-medium rounded-xl hover:bg-orange-50 transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  <span>Contact Alik</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Subtle spiritual accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-orange-300/50 to-transparent"></div>
    </nav>
  );
};

export default Navigation; 