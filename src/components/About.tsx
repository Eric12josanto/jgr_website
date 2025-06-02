import React from 'react';
import { Mountain as Mountains, UtensilsCrossed, Wifi, Users } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="glass-effect card-hover p-6 rounded-xl text-center">
      <div className="mb-4 text-green-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  const features = [
    {
      icon: <Mountains className="h-10 w-10" />,
      title: "Mountain Adventures",
      description: "Explore scenic treks, jeep rides, and breathtaking viewpoints in the Munnar mountains."
    },
    {
      icon: <UtensilsCrossed className="h-10 w-10" />,
      title: "Authentic Kerala Cuisine",
      description: "Savor delicious home-cooked Kerala dishes made with fresh, local ingredients."
    },
    {
      icon: <Wifi className="h-10 w-10" />,
      title: "Disconnect to Reconnect",
      description: "Escape the digital overwhelm while still having the amenities you need."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Exclusive Private Stay",
      description: "Enjoy complete privacy with your family or friends in our comfortable accommodations."
    }
  ];

  return (
    <section id="about" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About This Space</h2>
          <p className="max-w-3xl mx-auto text-gray-300">
            Check out John's Green Rocks, a Munnar farmstay in a mountain cardamom plantation. 
            It's perfect for techies and corporate folks who need a break—think jeep rides, treks, 
            and delicious Kerala cuisine in a private stay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <Feature 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default About;