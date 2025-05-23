import React, { useState } from 'react';
import { Mail, MapPin, Clock, Phone, Send, Heart } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Mail className="h-16 w-16 text-orange-500 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Alik</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch for class information, location details, or spiritual guidance
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Your message about classes, location, or spiritual guidance..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Class Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-orange-50 to-rose-50 rounded-lg border border-orange-100">
                    <Clock className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Class Schedule</h3>
                      <div className="spiritual-text">
                        <p><strong>Weekdays:</strong> Monday, Wednesday, Thursday at 7:00 PM</p>
                        <p><strong>Weekends:</strong> Saturday & Sunday at 9:00 AM</p>
                        <p className="text-orange-600 font-medium mt-2">Donation based classes</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-orange-50 to-rose-50 rounded-lg border border-orange-100">
                    <MapPin className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                      <div className="spiritual-text">
                        <p>Classes take place in</p>
                        <p><strong>Monterey Peninsula, California</strong></p>
                        <p className="text-orange-600 font-medium mt-2">
                          Please email Alik for specific location details
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-orange-50 to-rose-50 rounded-lg border border-orange-100">
                    <Heart className="h-6 w-6 text-rose-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">What to Bring</h3>
                      <div className="spiritual-text">
                        <p>Just yourself and an open heart</p>
                        <p>No meditation experience required</p>
                        <p className="text-orange-600 font-medium mt-2">
                          Flowers or fruits welcome as offering
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 meditation-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl font-light text-gray-800 mb-6 italic">
            "Please email Alik for more information and class location."
          </blockquote>
          <p className="text-orange-600 font-semibold mb-8">Ready to begin your spiritual journey?</p>
          
          <div className="bg-white/80 rounded-xl p-8 shadow-lg border border-orange-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Contact Alik?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Class Location</h4>
                <p className="spiritual-text text-sm">Get specific addresses for meditation classes in the Monterey Peninsula area</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Spiritual Guidance</h4>
                <p className="spiritual-text text-sm">Receive personal guidance on your meditation practice and spiritual growth</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Class Preparation</h4>
                <p className="spiritual-text text-sm">Learn what to expect in your first class and how to prepare</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Special Sessions</h4>
                <p className="spiritual-text text-sm">Inquire about workshops, retreats, or private sessions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-rose-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Find Joy in Your Heart?</h3>
          <p className="text-orange-100 mb-6">
            Take the first step on your journey to sustainable happiness and spiritual growth.
          </p>
          <div className="text-orange-100">
            <p className="italic">
              "Open hearted giving is crucial for this practice. Just give from your heart, flowers or fruits."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 