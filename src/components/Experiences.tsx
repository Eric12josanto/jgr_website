import React from 'react';
import { Coffee, Mountain, Utensils } from 'lucide-react';

interface ExperienceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const Experience: React.FC<ExperienceProps> = ({ 
  icon, 
  title, 
  description, 
  imageUrl 
}) => {
  return (
    <div className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="md:w-2/5 h-64 md:h-auto">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-3/5 p-6 flex flex-col justify-center">
        <div className="flex items-center mb-4">
          <div className="text-green-600 mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-green-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Experiences: React.FC = () => {
  const experiencesList = [
    {
      icon: <Mountain className="h-6 w-6" />,
      title: "Mountain Adventures",
      description: "Embark on guided treks through the misty mountains, explore hidden trails, and discover breathtaking viewpoints that showcase the stunning beauty of Munnar's landscapes.",
      imageUrl: "resized_e1.png"
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: "Peaceful Relaxation",
      description: "Unwind on your private porch overlooking misty viewpoints. Read a book, enjoy a cup of freshly brewed coffee, or simply take in the serene atmosphere that surrounds our farmstay.",
      imageUrl: "resized_e4.png"
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Kerala Cuisine",
      description: "Indulge in authentic Kerala cuisine prepared with locally-sourced ingredients. From traditional breakfasts to flavorful dinners, every meal is a culinary journey through the region's rich food culture.",
      imageUrl: "resized_e3.png"
    }
  ];

  return (
    <section id="experiences" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Experiences</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            At John's Green Rocks, we offer a variety of experiences that allow you to connect with 
            nature, indulge in local culture, and create lasting memories.
          </p>
        </div>

        <div className="space-y-8">
          {experiencesList.map((experience, index) => (
            <Experience 
              key={index}
              icon={experience.icon}
              title={experience.title}
              description={experience.description}
              imageUrl={experience.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;