import React from 'react';
import { Quote } from 'lucide-react';

interface MeditationQuoteProps {
  quote: string;
  author?: string;
  variant?: 'default' | 'featured' | 'minimal';
  className?: string;
}

const MeditationQuote: React.FC<MeditationQuoteProps> = ({
  quote,
  author = 'Alik Elzafon',
  variant = 'default',
  className = '',
}) => {
  const variants = {
    default: {
      container: 'bg-gradient-to-br from-orange-50 to-rose-50 p-8 rounded-xl border border-orange-100 shadow-lg',
      quote: 'text-lg text-gray-700 mb-4 italic leading-relaxed',
      author: 'text-orange-600 font-semibold',
      icon: 'h-8 w-8 text-orange-300 mb-4',
    },
    featured: {
      container: 'bg-gradient-to-r from-orange-500 via-rose-500 to-amber-500 p-12 rounded-2xl shadow-2xl text-center',
      quote: 'text-2xl md:text-3xl text-white mb-8 font-light leading-relaxed',
      author: 'text-orange-100 text-xl font-medium',
      icon: 'h-12 w-12 text-white/80 mx-auto mb-8',
    },
    minimal: {
      container: 'border-l-4 border-orange-400/50 pl-6 py-4',
      quote: 'text-base text-gray-600 mb-2 italic',
      author: 'text-orange-600 text-sm font-medium',
      icon: 'h-5 w-5 text-orange-400 mb-2',
    },
  };

  const currentVariant = variants[variant];

  return (
    <div className={`${currentVariant.container} ${className}`}>
      <Quote className={currentVariant.icon} />
      <blockquote className={currentVariant.quote}>
        "{quote}"
      </blockquote>
      {author && (
        <p className={currentVariant.author}>
          - {author}
        </p>
      )}
    </div>
  );
};

export default MeditationQuote; 