import React from 'react';
import { Calendar, Clock, MapPin, Heart, DollarSign, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Classes = () => {
  const weeklySchedule = [
    { day: 'Monday', time: '7:00 PM', available: true },
    { day: 'Tuesday', time: 'No Class', available: false },
    { day: 'Wednesday', time: '7:00 PM', available: true },
    { day: 'Thursday', time: '7:00 PM', available: true },
    { day: 'Friday', time: 'No Class', available: false },
    { day: 'Saturday', time: '9:00 AM', available: true },
    { day: 'Sunday', time: '9:00 AM', available: true },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Calendar className="h-16 w-16 text-orange-500 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Meditation Classes</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our meditation classes and embark on a journey to sustainable joy and inner peace
            </p>
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Weekly Schedule</h2>
            <p className="text-lg text-gray-600">
              Classes are held throughout the week in Monterey Peninsula, California
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-orange-100 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-rose-500 text-white p-6">
              <h3 className="text-2xl font-bold text-center">Class Times</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
                {weeklySchedule.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg text-center border-2 ${
                      item.available
                        ? 'border-orange-200 bg-orange-50 hover:bg-orange-100'
                        : 'border-gray-200 bg-gray-50'
                    } transition-colors`}
                  >
                    <h4 className={`font-semibold mb-2 ${item.available ? 'text-orange-800' : 'text-gray-500'}`}>
                      {item.day}
                    </h4>
                    <p className={`text-sm ${item.available ? 'text-orange-600' : 'text-gray-400'}`}>
                      {item.time}
                    </p>
                    {item.available && (
                      <div className="mt-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full mx-auto"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Information */}
      <section className="py-20 meditation-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 rounded-xl p-8 shadow-lg text-center card-hover">
              <DollarSign className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Donation Based</h3>
              <p className="spiritual-text mb-4">
                The classes are donation based. Open hearted giving is crucial for this practice.
              </p>
              <p className="text-sm text-orange-600 font-medium">
                Give from your heart - flowers or fruits welcome too
              </p>
            </div>

            <div className="bg-white/80 rounded-xl p-8 shadow-lg text-center card-hover">
              <MapPin className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Location</h3>
              <p className="spiritual-text mb-4">
                Classes take place throughout the Monterey Peninsula, California.
              </p>
              <Link 
                to="/contact" 
                className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
              >
                Contact for specific location
              </Link>
            </div>

            <div className="bg-white/80 rounded-xl p-8 shadow-lg text-center card-hover">
              <Users className="h-12 w-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">All Welcome</h3>
              <p className="spiritual-text mb-4">
                All levels welcome. No previous meditation experience required.
              </p>
              <p className="text-sm text-orange-600 font-medium">
                Come as you are, leave transformed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Expect</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our classes begin differently from other meditations. Here's what a typical session includes:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Double Breathing Exercise</h3>
                  <p className="spiritual-text">
                    You sit on a chair with your eyes open and learn a double breathing exercise 
                    to circulate and build your energy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Spiritual Teaching</h3>
                  <p className="spiritual-text">
                    Alik shares practical wisdom and insights about energy work, 
                    consciousness, and the path to sustainable joy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Energy Transmission</h3>
                  <p className="spiritual-text">
                    Experience the transmission of high frequency energy that fills you 
                    with unconditional love, gratitude, and the fire of life's passion.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Integration</h3>
                  <p className="spiritual-text">
                    Learn how to integrate the practice into daily life. 
                    "The practice begins when you leave the meditation room."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-xl p-8 border border-orange-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Class Atmosphere</h3>
              <div className="space-y-4 spiritual-text">
                <p>
                  "Those who leave Alik's class radiate light, their eyes sparkle, 
                  and their smiles are contagious."
                </p>
                <p>
                  In the simplicity that Alik teaches lies deep wisdom supported with 
                  infinite high frequency & powerful energy.
                </p>
                <p className="font-semibold text-orange-600">
                  It gives you an inner strength and a real sense of happiness 
                  that does not depend on anything external.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-rose-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Email Alik for more information about class location and to reserve your space.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors shadow-lg"
          >
            Contact Alik
            <Heart className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Student Experience Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="teacher-quote text-xl text-gray-800 mb-6">
            "One Sunday morning I found myself in a meditation class... When my teacher ended the meditation, 
            he began to speak. His first words were 'I am a plumber and I am here to unblock you...' 
            As he continued, I became more and more awed by his humbleness and simple approach. 
            Class finished and I remained on my chair. I was listening to a voice within me saying, 'You are home'."
          </blockquote>
          <p className="text-orange-600 font-semibold mb-4">- Student Testimonial</p>
          <Link
            to="/testimonials"
            className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
          >
            Read more student experiences →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Classes; 