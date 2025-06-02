import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div 
      id="home"
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/public/hero.jpg')",
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          John's Green Rocks Farmstay
        </h1>
        <p className="text-xl md:text-2xl text-white mb-6 max-w-2xl mx-auto">
          Unplug the City, Embrace Nature's Escape 
        </p>
        <p className="text-white mb-8 max-w-3xl mx-auto">
          Experience tranquility in our Munnar mountain cardamom plantation — 
          perfect for tech professionals seeking adventure, relaxation, and authentic Kerala cuisine.
        </p>
        <a 
          href="#book-now" 
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Book Your Escape
        </a>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 text-white" />
        </a>
      </div>
      
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
  );
};

export default Hero;