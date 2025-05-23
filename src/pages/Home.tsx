import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Calendar, Users, BookOpen, ArrowRight, Sparkles, Star, Globe, Shield, Lightbulb } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32 min-h-[80vh] flex items-center">
        {/* Background with beautiful CSS art */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50"></div>
        
        {/* Hero background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(/images/hero-bg.svg)'
          }}
        ></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Meditation circles */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-rose-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-amber-300/30 to-orange-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-rose-300/20 to-pink-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Floating lotus petals */}
          <div className="absolute top-32 left-1/4 w-8 h-8 bg-rose-400/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-48 right-1/3 w-6 h-6 bg-orange-400/40 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-32 left-1/3 w-10 h-10 bg-amber-400/40 rounded-full animate-bounce" style={{animationDelay: '2.5s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            {/* Beautiful OM symbol */}
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-rose-500 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-orange-300/50 transition-all duration-500 transform hover:scale-110">
                  <span className="text-white text-6xl font-bold">ॐ</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/50 to-rose-500/50 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>

            {/* Hero text with beautiful typography */}
            <h1 className="hero-text text-gray-900 mb-6">
              <span className="block text-5xl sm:text-7xl font-light">Finding</span>
              <span className="block text-6xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-pink-500">
                Joy in the Heart
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              When all is said and done... it's about obtaining joy in the heart. 
              We all are striving for this elusive feeling of happiness - the state 
              in which our mind stops talking and our heart is filled with juiciness and love.
            </p>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/classes"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-rose-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 hover:shadow-orange-300/25"
              >
                <Calendar className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                Join Classes
              </Link>
              <Link
                to="/about"
                className="group inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-orange-500 text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section with meditation imagery */}
      <section className="py-20 relative">
        {/* Beautiful background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/30 to-rose-50/30"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(251, 146, 60, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(244, 63, 94, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)`
        }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">A Sustainable State of Joy</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto spiritual-text">
              What if we realized that a sustainable state of joy is possible? What if we don't have to go anywhere, 
              cross oceans, travel to faraway lands to get this amazing inner feeling? What if all we have to do 
              is go deep within ourselves and learn to tap this sweetness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-orange-50 to-rose-50 border border-orange-100 card-hover chakra-glow">
              <Heart className="h-16 w-16 text-rose-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Spiritual Muscles</h3>
              <p className="spiritual-text">
                Our chakras are the tools given to us by creation to achieve freedom and joy. 
                Learning to expand, stretch and clean these psychic muscles is what stands between us and joy in the heart.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-orange-50 to-rose-50 border border-orange-100 card-hover chakra-glow">
              <BookOpen className="h-16 w-16 text-orange-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Conscious Energy Work</h3>
              <p className="spiritual-text">
                It is about learning the technique and building the tools to be conscious and 
                responsible with your energy. This is the first step to achieve a state of constant joy.
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-orange-50 to-rose-50 border border-orange-100 card-hover chakra-glow">
              <Users className="h-16 w-16 text-amber-500 mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community & Growth</h3>
              <p className="spiritual-text">
                We are born to grow and evolve. We live on an enormous trampoline learning 
                how to jump higher and higher till we transcend time and space and achieve our freedom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-20 meditation-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Sparkles className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Four Pillars of Consciousness</h2>
            <p className="text-xl text-gray-700 font-medium">
              Love, Compassion, Forgiveness, and Gratitude. Take away one and the whole house crumbles.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Love', color: 'bg-rose-400', icon: '♥', description: 'The foundation of all spiritual practice' },
              { name: 'Compassion', color: 'bg-orange-400', icon: '☯', description: 'Understanding and kindness for all beings' },
              { name: 'Forgiveness', color: 'bg-amber-400', icon: '✧', description: 'Releasing what no longer serves us' },
              { name: 'Gratitude', color: 'bg-yellow-400', icon: '✨', description: 'Appreciation for the present moment' }
            ].map((pillar, index) => (
              <div key={pillar.name} className="text-center p-8 rounded-xl bg-white/80 shadow-lg border border-orange-100 card-hover group">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-white font-bold text-3xl ${pillar.color} group-hover:scale-110 transition-transform duration-300`}>
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{pillar.name}</h3>
                <p className="text-sm text-gray-600 font-light">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meditation Practice Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background with beautiful meditation scene */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900 to-indigo-900"></div>
        
        {/* Background meditation image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: 'url(/images/meditation-bg.svg)'
          }}
        ></div>
        
        {/* CSS Art: Additional animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Additional floating particles */}
          <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-200 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-32 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-40 left-1/3 w-1.5 h-1.5 bg-yellow-100 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-60 right-1/4 w-1 h-1 bg-blue-200 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-16 left-1/2 w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">Rudra Method</span>
              </h2>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                Our approach combines ancient wisdom with practical techniques for modern life. 
                Through chakra work, energy meditation, and conscious breathing, we help you 
                discover the sustainable joy that exists within your own heart.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Chakra Activation</h4>
                    <p className="text-gray-300">Learn to work with your seven energy centers</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Heart className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Heart Opening</h4>
                    <p className="text-gray-300">Develop the capacity to give and receive love</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Lightbulb className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Conscious Awareness</h4>
                    <p className="text-gray-300">Cultivate mindful presence in daily life</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/teachings"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Explore Teachings
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-6">
                  <Globe className="h-16 w-16 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white">Global Impact</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-1">500+</div>
                    <p className="text-gray-200 text-sm">Students Worldwide</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-rose-400 mb-1">15+</div>
                    <p className="text-gray-200 text-sm">Years Teaching</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400 mb-1">1000+</div>
                    <p className="text-gray-200 text-sm">Classes Taught</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-1">∞</div>
                    <p className="text-gray-200 text-sm">Hearts Opened</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prison Project Highlight */}
      <section className="py-20 bg-gradient-to-br from-indigo-100/50 to-purple-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Bringing Light to Dark Places</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our Prison Project extends the healing power of meditation to incarcerated individuals, 
              proving that transformation is possible anywhere when we work with the heart.
            </p>
          </div>
          
          <div className="bg-white/80 rounded-2xl p-8 shadow-xl border border-indigo-100 text-center">
            <blockquote className="text-xl text-gray-700 mb-6 italic">
              "These meditation sessions have given me something I never thought I'd find in here - peace. 
              For the first time in years, I can sit with myself without running away."
            </blockquote>
            <p className="text-indigo-600 font-semibold mb-6">- Program Participant</p>
            <Link
              to="/prison-project"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
            >
              <Shield className="h-5 w-5 mr-2" />
              Learn About Our Prison Project
            </Link>
          </div>
        </div>
      </section>

      {/* Classes CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Meditation Classes</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Classes are held Monday, Wednesday, and Thursday evenings at 7pm. 
            Saturday & Sunday at 9am. The classes are donation based.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/classes"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors shadow-lg transform hover:scale-105"
            >
              <Calendar className="h-5 w-5 mr-2" />
              View Class Schedule
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Alik
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Voices of Transformation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from students who have discovered the joy in their hearts through our practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-orange-50 to-rose-50 p-8 rounded-xl border border-orange-100">
              <blockquote className="text-lg text-gray-700 mb-4 italic">
                "Before finding this meditation practice, I was constantly anxious and stressed. 
                Now I have tools to find peace and joy within myself."
              </blockquote>
              <p className="text-orange-600 font-semibold">- Sarah M., Student for 2 years</p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-amber-50 p-8 rounded-xl border border-rose-100">
              <blockquote className="text-lg text-gray-700 mb-4 italic">
                "This practice has completely transformed my life. I never thought I could access 
                such deep states of bliss and consciousness."
              </blockquote>
              <p className="text-rose-600 font-semibold">- David L., Long-time practitioner</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-rose-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-rose-600 transition-all duration-300 shadow-lg"
            >
              <Users className="h-5 w-5 mr-2" />
              Read More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Wisdom Quote Section */}
      <section className="py-16 bg-white/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="teacher-quote text-2xl text-gray-800 mb-6">
            "We observe joy in children but decide that grownups are not supposed to have it. 
            We rationalize our lack of well being and sweetness as a result of our responsibilities and maturity."
          </blockquote>
          <p className="text-orange-600 font-semibold">- Alik Elzafon</p>
        </div>
      </section>
    </div>
  );
};

export default Home; 