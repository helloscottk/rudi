import React from 'react';
import { Heart, Users, BookOpen, Shield, Lightbulb, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrisonProject = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/70 via-indigo-100/70 to-purple-100/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <Shield className="h-20 w-20 text-indigo-600 float-animation" />
            </div>
            <h1 className="hero-text text-gray-900 mb-6">
              <span className="block">Meditation Behind</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                Prison Walls
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Bringing hope, healing, and transformation to incarcerated individuals through the ancient 
              practice of meditation. Because everyone deserves access to inner peace and spiritual growth, 
              regardless of their circumstances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Heart className="h-5 w-5 mr-2" />
                Support the Project
              </Link>
              <a
                href="#volunteer"
                className="inline-flex items-center px-8 py-4 border-2 border-indigo-500 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Get Involved
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto spiritual-text">
              The Prison Project was born from the understanding that meditation and spiritual practices 
              can transform lives in even the most challenging environments. We believe that healing and 
              growth are possible for everyone, and that these ancient wisdom practices can provide hope, 
              purpose, and transformation to those who need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 card-hover">
              <Heart className="h-16 w-16 text-indigo-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Healing & Hope</h3>
              <p className="spiritual-text">
                Meditation provides a pathway to inner healing, helping individuals process trauma, 
                develop emotional regulation, and find peace within themselves despite external circumstances.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 card-hover">
              <Lightbulb className="h-16 w-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Self-Discovery</h3>
              <p className="spiritual-text">
                Through guided meditation and energy work, participants discover their inner strength, 
                reconnect with their authentic selves, and develop tools for positive transformation.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 card-hover">
              <Users className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Building</h3>
              <p className="spiritual-text">
                Creating supportive communities within correctional facilities where individuals can 
                share their journey, support each other, and build meaningful connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-gradient-to-br from-indigo-100/50 via-purple-100/50 to-blue-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our programs are designed to be accessible and meaningful within the correctional environment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Weekly Sessions</h3>
                  <p className="text-gray-600">
                    Regular group meditation sessions led by experienced facilitators, 
                    providing structure and consistency for participants.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Educational Materials</h3>
                  <p className="text-gray-600">
                    Written guides, worksheets, and meditation instructions that participants 
                    can use for personal practice between sessions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Peer Support Groups</h3>
                  <p className="text-gray-600">
                    Training dedicated individuals to become peer facilitators, 
                    creating sustainable communities of practice within facilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Reintegration Support</h3>
                  <p className="text-gray-600">
                    Continued support and connection to meditation communities for individuals 
                    transitioning back into society.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/90 rounded-2xl p-8 shadow-xl border border-indigo-100">
              <div className="text-center mb-6">
                <MapPin className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900">Current Locations</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
                  <span className="font-medium text-gray-900">San Francisco Bay Area</span>
                  <span className="text-indigo-600 font-semibold">3 Facilities</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <span className="font-medium text-gray-900">Participants Served</span>
                  <span className="text-purple-600 font-semibold">150+ Individuals</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <span className="font-medium text-gray-900">Sessions Completed</span>
                  <span className="text-blue-600 font-semibold">500+ Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Voices of Transformation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stories from participants who have found healing and hope through meditation practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl border border-indigo-100">
              <blockquote className="teacher-quote text-lg text-gray-800 mb-4">
                "These meditation sessions have given me something I never thought I'd find in here - peace. 
                For the first time in years, I can sit with myself without running away."
              </blockquote>
              <p className="text-indigo-600 font-semibold">- Program Participant</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl border border-purple-100">
              <blockquote className="teacher-quote text-lg text-gray-800 mb-4">
                "Learning to forgive myself has been the hardest and most important work of my life. 
                This program showed me that healing is possible, even here."
              </blockquote>
              <p className="text-purple-600 font-semibold">- Program Participant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="volunteer" className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get Involved</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us in bringing healing and hope to those who need it most. There are many ways to support 
            this transformative work, whether through volunteering, donations, or spreading awareness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              <Users className="h-5 w-5 mr-2" />
              Volunteer with Us
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Heart className="h-5 w-5 mr-2" />
              Make a Donation
            </Link>
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="py-16 bg-white/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="teacher-quote text-2xl text-gray-800 mb-6">
            "Every person, regardless of their past, carries within them the capacity for transformation and joy. 
            Our role is simply to help them remember this truth."
          </blockquote>
          <p className="text-indigo-600 font-semibold">- Alik Elzafon</p>
        </div>
      </section>
    </div>
  );
};

export default PrisonProject; 