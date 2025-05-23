import React from 'react';
import { Heart, Compass, Zap, Infinity } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About Rudra Meditation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A path to sustainable joy through conscious energy work and spiritual growth
            </p>
          </div>
        </div>
      </section>

      {/* Main Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Belief</h2>
              <div className="space-y-6 spiritual-text text-lg">
                <p>
                  We all are striving for this elusive feeling of happiness. The state in which our mind 
                  stops talking and our heart is filled with juiciness and love.
                </p>
                <p>
                  We observe it in children but decide that grownups are not supposed to have it. 
                  We rationalize our lack of well being and sweetness as a result of our responsibilities and maturity.
                </p>
                <p>
                  We lost it somewhere during our childhood, however our consciousness and need can help us retrieve it.
                </p>
                <p className="font-semibold text-orange-600">
                  But what if we realized that A SUSTAINABLE STATE OF JOY IS POSSIBLE?
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-orange-300 to-rose-300 flex items-center justify-center chakra-glow">
                  <Heart className="h-32 w-32 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inner Work Section */}
      <section className="py-20 meditation-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Path Within</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              What if we don't have to go anywhere, cross oceans, travel to faraway lands to get this 
              amazing inner feeling? What if all we have to do is go deep within ourselves and find to tap this sweetness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/80 rounded-xl shadow-lg">
              <Compass className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inner Navigation</h3>
              <p className="spiritual-text">
                Learning to navigate the inner landscape of consciousness and energy with clarity and purpose.
              </p>
            </div>

            <div className="text-center p-6 bg-white/80 rounded-xl shadow-lg">
              <Zap className="h-12 w-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Energy Mastery</h3>
              <p className="spiritual-text">
                Developing the tools to be conscious and responsible with your energy, 
                the foundation of spiritual growth.
              </p>
            </div>

            <div className="text-center p-6 bg-white/80 rounded-xl shadow-lg">
              <Infinity className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transcendence</h3>
              <p className="spiritual-text">
                Growing and evolving on life's trampoline, learning to jump higher until 
                we transcend time and space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chakras Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Spiritual Muscles - Chakras</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Chakras are responsible for our daily wellbeing. Learning the craft of how to expand, 
              stretch and clean these psychic muscles is what stands between us and JOY IN THE HEART.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-xl p-8 border border-orange-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Not Esoteric, But Practical</h3>
                <div className="space-y-4 spiritual-text">
                  <p>
                    It sounds esoteric, simplistic, new age. It is not.
                  </p>
                  <p>
                    It is about learning the technique and building the tools to be conscious and 
                    responsible with your energy.
                  </p>
                  <p className="font-semibold text-orange-600">
                    This is the first step to achieve a state of constant joy.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="grid grid-cols-3 gap-4">
                  {Array.from({ length: 7 }, (_, i) => (
                    <div
                      key={i}
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold
                        ${i === 0 ? 'bg-red-400' : 
                          i === 1 ? 'bg-orange-400' : 
                          i === 2 ? 'bg-yellow-400' : 
                          i === 3 ? 'bg-green-400' : 
                          i === 4 ? 'bg-blue-400' : 
                          i === 5 ? 'bg-indigo-400' : 'bg-purple-400'}`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meditation Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Meditation Approach</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Double Breathing Technique</h3>
              <p className="spiritual-text">
                Our classes begin differently from other meditations. You sit on a chair, 
                your eyes are open and you learn a double breathing exercise that helps 
                circulate and build your energy.
              </p>
              <p className="spiritual-text">
                This is not about relaxation alone - though that comes naturally. 
                It's about building the spiritual muscles needed for sustained inner transformation.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Practical Wisdom</h3>
              <p className="spiritual-text">
                "I am a plumber and I am here to unblock you..." - Alik's humble approach 
                combines practical energy work with profound spiritual insights.
              </p>
              <p className="spiritual-text">
                The practice begins when you leave the meditation room. You learn how to 
                keep the fire you have absorbed and apply the wisdom to your daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-rose-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl font-light text-white mb-6 italic">
            "I have encountered very few people who truly believe in their core that a state of joy in the heart is attainable. 
            We all experience momentary joy, the feeling of our heart expanding, of having our eyes sparkle. 
            But then, we protect ourselves against yet another disappointment."
          </blockquote>
          <p className="text-orange-100 font-semibold">- From the teachings of Rudra Meditation</p>
        </div>
      </section>
    </div>
  );
};

export default About; 