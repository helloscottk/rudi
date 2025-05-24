import React from 'react';
import { Heart, Mail, MapPin, Clock, Phone, Users, Sparkles, BookOpen, Calendar, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { to: '/about', label: 'About Last Life Yoga' },
    { to: '/classes', label: 'Class Schedule' },
    { to: '/teachings', label: 'Teachings & Wisdom' },
    { to: '/teachers', label: 'Meet the Teachers' },
    { to: '/prison-project', label: 'Prison Project' },
    { to: '/testimonials', label: 'Student Stories' }
  ];

  const spiritualQuotes = [
    "Joy is not a luxury, it's our birthright",
    "The heart knows what the mind cannot understand",
    "We are born to grow and evolve",
    "Love, compassion, forgiveness, and gratitude"
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-orange-900/90 to-rose-900/90 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Brand and Philosophy - Larger Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Heart className="h-10 w-10 text-rose-400" />
                <div className="absolute inset-0 bg-rose-400/30 rounded-full blur-md"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-300 to-rose-300 bg-clip-text text-transparent">
                  Last Life Yoga
                </span>
                <div className="text-xs text-orange-200 font-light">Finding Joy in the Heart</div>
              </div>
            </div>
            
            <div className="space-y-4 text-orange-100 leading-relaxed">
              <p className="text-lg font-light">
                The four pillars of consciousness are love, compassion, forgiveness, and gratitude. 
                Take away one and the whole house crumbles.
              </p>
              
              <blockquote className="text-orange-200 italic text-lg font-light border-l-4 border-orange-400/30 pl-4">
                "When all is said and done... it's about obtaining joy in the heart."
                <span className="block text-sm text-orange-300 font-normal mt-2">- Alik Elzafon</span>
              </blockquote>
            </div>

            {/* Spiritual Insights */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 flex items-center text-amber-200">
                <Sparkles className="h-5 w-5 mr-2" />
                Daily Inspirations
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {spiritualQuotes.map((quote, index) => (
                  <div key={index} className="flex items-start space-x-2 text-sm text-orange-200">
                    <Star className="h-3 w-3 mt-1 text-amber-400 flex-shrink-0" />
                    <span className="font-light italic">{quote}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 flex items-center text-amber-200">
              <BookOpen className="h-5 w-5 mr-2" />
              Explore Our Offerings
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.to} 
                  className="flex items-center group text-orange-100 hover:text-amber-200 transition-colors duration-300"
                >
                  <ArrowRight className="h-4 w-4 mr-2 text-orange-400 group-hover:text-amber-400 transition-colors" />
                  <span className="font-light">{link.label}</span>
                </Link>
              ))}
            </div>
            
            {/* Featured Button */}
            <div className="mt-8">
              <Link
                to="/classes"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Join a Class
              </Link>
            </div>
          </div>

          {/* Class Schedule & Contact */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Class Schedule */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center text-amber-200">
                <Clock className="h-5 w-5 mr-2" />
                Weekly Schedule
              </h3>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-orange-100">
                    <span className="font-medium">Monday</span>
                    <span className="text-amber-200">7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-orange-100">
                    <span className="font-medium">Wednesday</span>
                    <span className="text-amber-200">7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-orange-100">
                    <span className="font-medium">Thursday</span>
                    <span className="text-amber-200">7:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-orange-100">
                    <span className="font-medium">Saturday</span>
                    <span className="text-amber-200">9:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center text-orange-100">
                    <span className="font-medium">Sunday</span>
                    <span className="text-amber-200">9:00 AM</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-orange-400/20">
                  <p className="text-amber-200 font-medium text-center">
                    ✨ Donation Based ✨
                  </p>
                  <p className="text-orange-200 text-sm text-center mt-1 font-light">
                    Open hearted giving is crucial for this practice
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center text-amber-200">
                <MapPin className="h-5 w-5 mr-2" />
                Connect With Us
              </h3>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-orange-100">
                    <MapPin className="h-5 w-5 text-orange-400" />
                    <div>
                      <p className="font-medium">Monterey Peninsula</p>
                      <p className="text-sm text-orange-200">California</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Link 
                      to="/contact" 
                      className="flex items-center text-amber-200 hover:text-amber-100 transition-colors font-medium"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Contact for Details
                    </Link>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Link 
                      to="/prison-project" 
                      className="flex items-center text-amber-200 hover:text-amber-100 transition-colors font-medium"
                    >
                      <Users className="h-5 w-5 mr-2" />
                      Prison Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-orange-500/20">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-orange-200 text-sm">
              <p>&copy; {new Date().getFullYear()} Last Life Yoga. All rights reserved.</p>
              <p className="text-xs text-orange-300 mt-1">Spreading joy, one heart at a time</p>
            </div>
            
            <div className="flex items-center space-x-6 text-orange-200 text-sm">
              <Link to="/about" className="hover:text-amber-200 transition-colors">About</Link>
              <Link to="/contact" className="hover:text-amber-200 transition-colors">Contact</Link>
              <Link to="/testimonials" className="hover:text-amber-200 transition-colors">Stories</Link>
            </div>
            
            <div className="text-orange-200 text-sm text-center lg:text-right">
              <p className="italic font-light">
                "We are born to grow and evolve"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle spiritual accent */}
      <div className="h-1 bg-gradient-to-r from-orange-500/50 via-rose-500/50 to-amber-500/50"></div>
    </footer>
  );
};

export default Footer; 