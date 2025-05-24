import React from 'react';
import { Star, Quote } from 'lucide-react';

const Teachers = () => {
  const teachers = [
    {
      name: "Alik Elzafon",
      role: "Primary Teacher",
      quote: "We are born to grow and evolve. We live on an enormous trampoline learning how to jump higher and higher till we transcend time and space and achieve our freedom.",
      description: "Alik brings a humble, practical approach to spiritual teaching. 'I am a plumber and I am here to unblock you,' reflects his down-to-earth style that makes profound wisdom accessible to all."
    },
    {
      name: "Rudi",
      role: "Spiritual Guide",
      quote: "A teacher is like a temporary filling. Someday you have to toss it away and replace it with a permanent filling - god.",
      description: "The foundational teachings that inspire the Last Life Yoga approach to spiritual growth and self-discovery."
    },
    {
      name: "Sarada Devi",
      role: "Holy Mother",
      quote: "If you want a peace of mind, see no faults in others. Make the world your own. There are no strangers in this world.",
      description: "Her teachings on compassion and universal love form a cornerstone of conscious living."
    },
    {
      name: "Swami Nityananda",
      role: "Realized Master",
      quote: "An enlightened human being does not know he is enlightened. He walks around blessing everything he touches.",
      description: "His wisdom about authentic enlightenment and the natural state of awakened consciousness."
    },
    {
      name: "Ramakrishna",
      role: "Saint & Mystic",
      quote: "God is everywhere but He is most manifest in man. So serve man as god. That is as good as worshipping god.",
      description: "His teachings bridge the divine and human experience, showing the sacred in everyday service."
    },
    {
      name: "Ramana Maharshi",
      role: "Sage of Arunachala",
      quote: "Know who you are, and all else will be known. Happiness is your real nature.",
      description: "His profound inquiry into the nature of self and the discovery of inherent happiness and peace."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Star className="h-16 w-16 text-amber-500 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Spiritual Teachers</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The wisdom lineage that guides our practice and understanding
            </p>
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-xl p-8 border border-orange-100 card-hover">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-rose-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {teacher.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{teacher.name}</h3>
                    <p className="text-orange-600 font-medium">{teacher.role}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Quote className="h-6 w-6 text-orange-400 mb-2" />
                  <blockquote className="teacher-quote text-gray-800 mb-4">
                    "{teacher.quote}"
                  </blockquote>
                </div>
                
                <p className="spiritual-text">
                  {teacher.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 meditation-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Lineage of Wisdom</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              These teachers represent a living tradition of spiritual wisdom that emphasizes 
              practical transformation, humble service, and the discovery of joy within.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/80 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-rose-400 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                ♥
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Love & Compassion</h3>
              <p className="spiritual-text">
                The foundation of all spiritual practice - opening the heart to unconditional love 
                and extending compassion to all beings.
              </p>
            </div>

            <div className="text-center p-6 bg-white/80 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                ☯
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Practical Wisdom</h3>
              <p className="spiritual-text">
                Teachings that can be applied immediately to daily life, transforming ordinary 
                experiences into opportunities for growth and awakening.
              </p>
            </div>

            <div className="text-center p-6 bg-white/80 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                ✧
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Humility & Service</h3>
              <p className="spiritual-text">
                True spiritual power manifests through humility and selfless service, 
                blessing everything and everyone we encounter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alik's Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Alik's Teaching Style</h2>
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-orange-50 to-rose-50 rounded-lg border border-orange-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">The Cosmic Plumber</h3>
                  <p className="spiritual-text">
                    "I am a plumber and I am here to unblock you..." - Alik's humble, practical approach 
                    makes profound spiritual work accessible and immediate.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-orange-50 to-rose-50 rounded-lg border border-orange-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Energy Transmission</h3>
                  <p className="spiritual-text">
                    Through his presence and teaching, Alik transmits high-frequency energy 
                    that supports students in their spiritual growth and awakening.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-br from-orange-50 to-rose-50 rounded-lg border border-orange-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Practical Integration</h3>
                  <p className="spiritual-text">
                    "The practice begins when you leave the meditation room" - emphasis on 
                    applying spiritual insights to everyday life and relationships.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-rose-100 rounded-xl p-8 text-center">
              <Quote className="h-12 w-12 text-orange-500 mx-auto mb-6" />
              <blockquote className="text-2xl font-light text-gray-800 mb-6 italic leading-relaxed">
                "His unconditional love gives me the encouragement I need to work on my inner self. 
                Thank you Alik for your infinite patience and for my miracle life. 
                I am filled with gratitude."
              </blockquote>
              <p className="text-orange-600 font-semibold">- B.H., Student</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Wisdom */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-rose-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">The Greatest Teaching</h3>
          <blockquote className="text-xl font-light text-orange-100 mb-6 italic">
            "The greatest use of the sword is to cut through illusion."
          </blockquote>
          <p className="text-orange-200">
            All teachers in this lineage point toward the same truth: the discovery of joy, 
            love, and freedom that already exists within us.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Teachers; 