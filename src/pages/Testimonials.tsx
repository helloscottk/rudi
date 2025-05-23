import React, { useState } from 'react';
import { Quote, Star, Heart, Users, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Before finding this meditation practice, I was constantly anxious and stressed. Now I have tools to find peace and joy within myself, no matter what's happening around me.",
      author: "Sarah M.",
      role: "Student for 2 years",
      category: "stress-relief",
      rating: 5
    },
    {
      quote: "Alik's teaching opened up a whole new world for me. I never thought I could access such deep states of bliss and consciousness. This practice has completely transformed my life.",
      author: "David L.",
      role: "Long-time practitioner",
      category: "spiritual-growth",
      rating: 5
    },
    {
      quote: "The chakra work we do in class has helped me understand my emotions and energy patterns. I'm more balanced and centered than I've ever been in my life.",
      author: "Maria G.",
      role: "Student for 1 year",
      category: "emotional-healing",
      rating: 5
    },
    {
      quote: "I was skeptical at first, but the meditation techniques Alik teaches are incredibly practical and powerful. I've found the joy in my heart that I'd been searching for my whole life.",
      author: "Michael R.",
      role: "New student",
      category: "joy",
      rating: 5
    },
    {
      quote: "This isn't just meditation - it's a complete transformation of how you relate to yourself and the world. The community here is incredibly supportive and loving.",
      author: "Jennifer K.",
      role: "Student for 3 years",
      category: "community",
      rating: 5
    },
    {
      quote: "I've tried many different spiritual practices over the years, but this approach to energy work and chakra meditation is the most effective I've ever experienced.",
      author: "Robert T.",
      role: "Experienced meditator",
      category: "effectiveness",
      rating: 5
    },
    {
      quote: "Learning to work with my spiritual muscles has given me a sense of personal power and freedom I never knew was possible. Every class is a gift.",
      author: "Lisa W.",
      role: "Student for 6 months",
      category: "empowerment",
      rating: 5
    },
    {
      quote: "The prison project Alik leads has brought hope and healing to so many people. Witnessing these transformations has deepened my own practice immeasurably.",
      author: "Amanda S.",
      role: "Volunteer",
      category: "service",
      rating: 5
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Stories', count: testimonials.length },
    { id: 'transformation', name: 'Transformation', count: testimonials.filter(t => t.category === 'transformation').length },
    { id: 'healing', name: 'Healing', count: testimonials.filter(t => t.category === 'healing').length },
    { id: 'spiritual-growth', name: 'Spiritual Growth', count: testimonials.filter(t => t.category === 'spiritual-growth').length },
    { id: 'life-change', name: 'Life Change', count: testimonials.filter(t => t.category === 'life-change').length }
  ];

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section with beautiful visual elements */}
      <section className="relative py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50"></div>
        
        {/* Floating heart shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 transform rotate-12">
            <Heart className="h-8 w-8 text-rose-300/60 animate-pulse" />
          </div>
          <div className="absolute top-32 right-20 transform -rotate-12" style={{animationDelay: '1s'}}>
            <Heart className="h-6 w-6 text-orange-300/60 animate-pulse" />
          </div>
          <div className="absolute bottom-32 left-20 transform rotate-45" style={{animationDelay: '2s'}}>
            <Heart className="h-10 w-10 text-amber-300/60 animate-pulse" />
          </div>
          <div className="absolute top-40 left-1/3 transform -rotate-45" style={{animationDelay: '0.5s'}}>
            <Heart className="h-4 w-4 text-rose-400/60 animate-pulse" />
          </div>
          <div className="absolute bottom-40 right-1/3 transform rotate-12" style={{animationDelay: '1.5s'}}>
            <Heart className="h-7 w-7 text-orange-400/60 animate-pulse" />
          </div>
          
          {/* Meditation circles */}
          <div className="absolute top-16 right-16 w-64 h-64 bg-gradient-to-br from-rose-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-16 left-16 w-48 h-48 bg-gradient-to-br from-amber-200/30 to-rose-200/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400/50 to-orange-500/50 rounded-full blur-lg animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Voices of <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Transformation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Hear the authentic stories of students who have discovered the sustainable joy that 
            exists within their own hearts through our meditation practice.
          </p>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-rose-100">
              <div className="text-3xl font-bold text-rose-600 mb-2">500+</div>
              <p className="text-gray-600">Students Transformed</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
              <p className="text-gray-600">Classes Completed</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-amber-100">
              <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
              <p className="text-gray-600">Years of Teaching</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white/80 backdrop-blur-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Stories by Theme</h2>
            <p className="text-gray-600">Filter testimonials to find stories that resonate with your journey</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const isActive = selectedCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-orange-50 border border-orange-200'
                  }`}
                >
                  <Heart className="h-4 w-4 mr-2" />
                  {category.name}
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-br from-orange-50/50 via-rose-50/50 to-amber-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/90 rounded-xl p-8 shadow-lg border border-orange-100 card-hover backdrop-blur-sm"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="h-8 w-8 text-orange-300 mb-4" />
                
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-orange-100 pt-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-rose-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Quote Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-16 w-16 text-white/80 mx-auto mb-8" />
          <blockquote className="text-3xl font-light text-white mb-8 leading-relaxed">
            "The transformation I see in my students fills my heart with such joy. When someone discovers 
            their ability to access bliss and peace within themselves, it reminds me why this work is so sacred."
          </blockquote>
          <p className="text-xl text-orange-100 font-semibold">- Alik Elzafon, Founder & Teacher</p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Community Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Numbers tell part of the story, but the real impact is in the transformed lives and awakened hearts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-orange-50 to-rose-50 border border-orange-100">
              <div className="text-4xl font-bold text-orange-600 mb-2">500+</div>
              <p className="text-gray-700 font-medium">Students Served</p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-rose-50 to-amber-50 border border-rose-100">
              <div className="text-4xl font-bold text-rose-600 mb-2">1000+</div>
              <p className="text-gray-700 font-medium">Classes Taught</p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
              <div className="text-4xl font-bold text-amber-600 mb-2">15+</div>
              <p className="text-gray-700 font-medium">Years of Teaching</p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-orange-50 to-rose-50 border border-orange-100">
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <p className="text-gray-700 font-medium">Would Recommend</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="py-20 bg-gradient-to-br from-rose-100 via-orange-100 to-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 flex justify-center">
            <Heart className="h-16 w-16 text-rose-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Story Awaits</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Every journey begins with a single step. Join our community of seekers and discover 
            the joy that's been waiting in your heart all along.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/classes"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-semibold rounded-lg hover:from-rose-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Users className="h-5 w-5 mr-2" />
              Join a Class
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-rose-500 text-rose-600 font-semibold rounded-lg hover:bg-rose-50 transition-colors"
            >
              Ask Questions
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final Inspiration */}
      <section className="py-16 bg-white/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="teacher-quote text-2xl text-gray-800 mb-6">
            "When you find the joy in your heart, you become a beacon of light for others. 
            Your transformation becomes an invitation for others to find their own freedom."
          </blockquote>
          <p className="text-rose-600 font-semibold">- Alik Elzafon</p>
        </div>
      </section>
    </div>
  );
};

export default Testimonials; 