import React from 'react';
import { BookOpen, Lightbulb, Target } from 'lucide-react';

const Teachings = () => {
  const teachings = [
    {
      title: "Double Breathing Technique",
      category: "Practice",
      content: "Learn the fundamental breathing exercise that circulates and builds your spiritual energy."
    },
    {
      title: "Why Do We Meditate?",
      category: "Philosophy",
      content: "Almost everyone will tell you that they practice meditation to relax and get quiet. That is the truth but not the whole truth..."
    },
    {
      title: "How To Grow Spiritually?",
      category: "Growth",
      content: "Practical guidance on developing your spiritual muscles and expanding consciousness."
    },
    {
      title: "Everything is Energy",
      category: "Understanding",
      content: "Recognizing the energetic nature of all existence and learning to work consciously with energy."
    },
    {
      title: "Letting Go of Blocks and Baggage",
      category: "Practice",
      content: "Techniques for releasing what no longer serves and creating space for growth."
    },
    {
      title: "The Battlefield of Truth",
      category: "Wisdom",
      content: "Understanding the inner work required to transcend illusion and find authentic truth."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="h-16 w-16 text-orange-500 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Spiritual Teachings</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reflections, lectures, and insights for your spiritual journey
            </p>
          </div>
        </div>
      </section>

      {/* Core Teachings */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachings.map((teaching, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-xl p-6 border border-orange-100 card-hover">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-sm font-medium text-orange-600 uppercase tracking-wide">
                    {teaching.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{teaching.title}</h3>
                <p className="spiritual-text">{teaching.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-20 meditation-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Spiritual Insights</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/80 rounded-xl shadow-lg">
              <Lightbulb className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Practical Wisdom</h3>
              <p className="spiritual-text">
                "How will this advance my spiritual life?" - Every teaching is designed 
                to be immediately applicable to your daily experience.
              </p>
            </div>

            <div className="text-center p-8 bg-white/80 rounded-xl shadow-lg">
              <Target className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sticking to the Basics</h3>
              <p className="spiritual-text">
                Simple, fundamental practices that create profound transformation when 
                applied consistently with dedication.
              </p>
            </div>

            <div className="text-center p-8 bg-white/80 rounded-xl shadow-lg">
              <BookOpen className="h-12 w-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Let Energy Teach You</h3>
              <p className="spiritual-text">
                Learning to listen to and be guided by the wisdom of energy itself, 
                beyond mental concepts and ideas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Teaching */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-100 to-rose-100 rounded-xl p-8 border border-orange-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Understanding Reality vs. Illusion</h2>
            <div className="space-y-6 spiritual-text text-lg">
              <p>
                The modern world pulls us in so many directions, yet it is only when we discover 
                peace within that we master our own lives.
              </p>
              <p>
                The greatest use of the sword is to cut through illusion. We must learn to distinguish 
                between what is real and what are the projections of our mind and conditioning.
              </p>
              <p className="font-semibold text-orange-700">
                "Happy People Are Enlightened People" - True happiness comes not from external 
                circumstances but from the recognition of our inherent joy and freedom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Gifts of Time */}
      <section className="py-20 meditation-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Gifts of Time</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/80 rounded-lg p-6 border border-orange-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Surrendering Resistance</h3>
                <p className="spiritual-text">
                  Learning to let go of the patterns and resistances that keep us stuck, 
                  opening to the natural flow of growth and transformation.
                </p>
              </div>

              <div className="bg-white/80 rounded-lg p-6 border border-orange-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Using Meditation to Stay Young</h3>
                <p className="spiritual-text">
                  Not just physical youth, but the eternal freshness and vitality that 
                  comes from staying connected to our source.
                </p>
              </div>

              <div className="bg-white/80 rounded-lg p-6 border border-orange-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">The World Is In A State of Perfection</h3>
                <p className="spiritual-text">
                  Recognizing the inherent perfection in what is, while still engaging 
                  actively in growth and positive change.
                </p>
              </div>
            </div>

            <div className="bg-white/90 rounded-xl p-8 text-center border border-orange-200">
              <blockquote className="teacher-quote text-xl text-gray-800 mb-6">
                "Why do we need Spiritual Training? Because without it, we remain asleep to 
                our true nature and the joy that is our birthright."
              </blockquote>
              <p className="text-orange-600 font-semibold">- Spiritual Teaching</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachings; 