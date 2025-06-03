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
         Escape the city chaos at -The Best Farmstay in Munnar 

         
        </p>
        <p className="text-white mb-8 max-w-3xl mx-auto">
         Stay on top of a remote mountain in a cottage at the heart of a 4-acre cardamom plantation. Trek through trails, explore the full area, and feel the calm of carefree childhood days—Just like your uncle’s farm house with yummy Kerala foods and campfires, perfect for chilling or private get-togethers</p>
        <a 
          href="#book-now" 
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          Book Your Escape
        </a>
      </div>
      
      
      
      <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-black/30 to-transparent"></div>
    </div>
  );
};

export default Hero;