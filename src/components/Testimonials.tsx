import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  rating: number;
  review: string;
  platform: 'google' | 'airbnb';
  showMore?: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  name, 
  rating, 
  review,
  platform,
  showMore = false
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-gray-800">{name}</h3>
          <div className="flex items-center mt-1">
            <img 
              src={platform === 'google' ? 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg' : 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg'} 
              alt={`${platform} logo`}
              className="h-4 w-4 mr-2"
            />
            <span className="text-sm text-gray-600">{platform === 'google' ? 'Google' : 'Airbnb'}</span>
          </div>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-600">
        {isExpanded ? review : `${review.slice(0, 150)}${review.length > 150 ? '...' : ''}`}
      </p>
      
      {showMore && review.length > 150 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-green-600 hover:text-green-700 font-medium mt-2 text-sm"
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonialsList = [
    {
      name: "Faraz",
      rating: 5,
      platform: 'google' as const,
      review: "Its been a wonderful experience at this place. Everything was done and provided as asked. This place is beautiful and gives you complete privacy.",
      showMore: true
    },
    {
      name: "Sai",
      rating: 5,
      platform: 'airbnb' as const,
      review: "We had an amazing stay at Josanto's property in Munnar. The location is stunning-nestled deep in nature, far from the hustle and bustle of the city.",
      showMore: false
    },
    {
      name: "Abhishek",
      rating: 4,
      platform: 'google' as const,
      review: "Really enjoyed my stay here. The views are amazing from the property, and Josanto takes great care of everything once you're staying there. ",
      showMore: false
    },
    {
      name: "Vivek",
      rating: 5,
      platform: 'airbnb' as const,
      review: "Great place to spend time with friends or family. The place had a calm and serene atmosphere. The meals were absolutely brilliant.",
      showMore: false
    },
    {
      name: "Lokendra",
      rating: 5,
      platform: 'google' as const,
      review: "The stay was great, a little out of the main city but worth staying.",
      showMore: false
    },
    {
      name: "Sanjay",
      rating: 5,
      platform: 'airbnb' as const,
      review: "Ambience, view everything was amazing. Clean rooms, great place for family and kids. Extremely proactive host and fulfilled all our requests.",
      showMore: false    }
  ];

  return (
    <section className="py-20 bg-green-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Guest Reviews</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            See what our guests have to say about their experience at John's Green Rocks Farmstay.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsList.map((testimonial, index) => (
            <Testimonial 
              key={index}
              name={testimonial.name}
              rating={testimonial.rating}
              platform={testimonial.platform}
              review={testimonial.review}
              showMore={testimonial.showMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;