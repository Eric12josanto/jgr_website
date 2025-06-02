import React from 'react';
import { Users } from 'lucide-react';

interface AccommodationProps {
  title: string;
  description: string;
  capacity: string;
  price: string;
  features: string[];
  image: string;
}

const Accommodation: React.FC<AccommodationProps> = ({ 
  title, 
  description, 
  capacity, 
  price, 
  features,
  image
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-center text-white">
          <Users className="h-5 w-5 mr-2" />
          <span>{capacity}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-green-800 mb-3">{title}</h3>
        <span className="block text-2xl font-bold text-green-800 mb-2">{price}</span>
        <p className="text-gray-600 mb-4">{description}</p>
        <h4 className="font-semibold text-green-700 mb-2">Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-600 flex items-start">
              <span className="mr-2 text-green-600">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Accommodations: React.FC = () => {
  const accommodations = [
    {
      title: "Big House",
      description: "A spacious private stay with stunning mountain views, perfect for families or groups of friends looking to enjoy nature together.",
      capacity: "Max 8 guests",
      price: "₹7800/Night",
      image: "/b1.jpeg",
      features: [
        "4 spacious bedrooms",
        "Large living area",
        "Fully equipped kitchen",
        "Mountain view terrace",
        "Private garden",
        "BBQ facilities"
      ]
    },
    {
      title: "Small House",
      description: "A cozy retreat perfect for couples or small families seeking a peaceful nature stay with all the comforts of home.",
      capacity: "Max 4 guests",
      price: "₹4200/Night",
      image: "/s1.jpeg",
      features: [
        "2 comfortable bedrooms",
        "Cozy living space",
        "Kitchenette with essentials",
        "Private porch with plantation views",
        "Access to viewpoint trails"
      ]
    }
  ];

  return (
    <section id="accommodations" className="py-20 bg-green-100/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Accommodations</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Choose from our comfortable accommodations designed to give you the perfect balance of 
            nature and comfort during your stay at John's Green Rocks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {accommodations.map((accommodation, index) => (
            <Accommodation 
              key={index}
              title={accommodation.title}
              description={accommodation.description}
              capacity={accommodation.capacity}
              price={accommodation.price}
              features={accommodation.features}
              image={accommodation.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;