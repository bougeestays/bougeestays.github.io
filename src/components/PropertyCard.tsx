
import { Link } from 'react-router-dom';
import { MapPin, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  image: string;
  price: string;
  guests: number;
  rating: number;
  reviews: number;
}

const PropertyCard = ({ id, title, location, image, price, guests, rating, reviews }: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
            <span className="text-sm font-medium text-luxury-navy">{rating}</span>
            <span className="text-sm text-luxury-stone">({reviews})</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-playfair font-semibold text-luxury-navy hover:text-luxury-gold transition-colors">
            <Link to={`/property/${id}`}>{title}</Link>
          </h3>
        </div>
        
        <div className="flex items-center text-luxury-stone mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-luxury-stone">
            <Users className="w-4 h-4 mr-1" />
            <span className="text-sm">Up to {guests} guests</span>
          </div>
          <div className="text-right">
            <span className="text-2xl font-playfair font-bold text-luxury-navy">{price}</span>
            <span className="text-luxury-stone text-sm"> / night</span>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <Button asChild className="flex-1 bg-luxury-navy hover:bg-luxury-navy/90 text-white">
            <Link to={`/property/${id}`}>View Details</Link>
          </Button>
          <Button className="flex-1 bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-medium">
            Book on Airbnb
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
