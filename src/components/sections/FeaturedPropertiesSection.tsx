import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PropertyCard from '@/components/PropertyCard';

const FeaturedPropertiesSection = () => {
  const featuredProperties = [
    {
      id: 1,
      title: 'Bougee Studio Retreat',
      location: 'Gurgaon, India',
      image: '/images/576ba456-db39-492a-a853-8b8b31df57b7.jpeg',
      price: '$xxx',
      guests: 2,
      rating: 4.5,
      reviews: 'xx'
    },
    {
      id: 2,
      title: 'Urban Luxe Suite',
      location: 'Gurgaon, India',
      image: '/images/9dd37433-99c2-4be3-93f2-5d51db521ab9.jpeg',
      price: '$xxx',
      guests: 3,
      rating: 4.5,
      reviews: 'xx'
    },
    {
      id: 3,
      title: 'Elegant City Apartment',
      location: 'Gurgaon, India',
      image: '/images/40beb8bf-b303-44f7-9e0e-a66fb3f233e0.jpeg',
      price: '$xxx',
      guests: 2,
      rating: 4.5,
      reviews: 'xx'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-airbnb-gray mb-6">
            Featured Properties
          </h2>
          <p className="text-xl text-airbnb-gray-light max-w-3xl mx-auto">
            Discover our hand-picked selection of premium properties, 
            each offering a unique luxury experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-airbnb-primary hover:bg-airbnb-primary-dark text-white font-semibold px-8"
          >
            <Link to="/properties">
              View All Properties
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
