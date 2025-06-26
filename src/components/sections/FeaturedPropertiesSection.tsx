
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PropertyCard from '@/components/PropertyCard';

const FeaturedPropertiesSection = () => {
  const featuredProperties = [
    {
      id: 1,
      title: 'Elegant Downtown Penthouse',
      location: 'Manhattan, New York',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop',
      price: '$450',
      guests: 6,
      rating: 4.9,
      reviews: 127
    },
    {
      id: 2,
      title: 'Luxury Beachfront Villa',
      location: 'Malibu, California',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
      price: '$650',
      guests: 8,
      rating: 4.8,
      reviews: 89
    },
    {
      id: 3,
      title: 'Modern City Loft',
      location: 'SoHo, New York',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop',
      price: '$320',
      guests: 4,
      rating: 4.7,
      reviews: 156
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
