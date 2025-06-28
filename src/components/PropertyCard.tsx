import { Link } from 'react-router-dom';
import { MapPin, Users, Star, Heart, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';

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
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <div className="relative overflow-hidden">
        <motion.div
          className="relative h-64 bg-gray-200"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
          )}
        </motion.div>
        
        {/* Rating badge */}
        <motion.div 
          className="absolute top-4 right-4 glass-effect px-3 py-1 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-white">{rating}</span>
            <span className="text-sm text-white/80">({reviews})</span>
          </div>
        </motion.div>

        {/* Like button */}
        <motion.button
          className="absolute top-4 left-4 glass-effect p-2 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart 
            className={`w-5 h-5 transition-colors ${
              isLiked ? 'fill-red-500 text-red-500' : 'text-white'
            }`}
          />
        </motion.button>

        {/* Price tag */}
        <motion.div 
          className="absolute bottom-4 left-4 glass-effect px-3 py-2 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-white font-bold text-lg">{price}</div>
          <div className="text-white/80 text-xs">per night</div>
        </motion.div>
      </div>
      
      <div className="p-6">
        <motion.div 
          className="flex items-start justify-between mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-playfair font-semibold text-gray-800 hover:text-[#FF385C] transition-colors">
            <Link to={`/property/${id}`}>{title}</Link>
          </h3>
        </motion.div>
        
        <motion.div 
          className="flex items-center text-gray-600 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <MapPin className="w-4 h-4 mr-2 text-[#FF385C]" />
          <span className="text-sm">{location}</span>
        </motion.div>
        
        <motion.div 
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2 text-[#FF385C]" />
            <span className="text-sm">Up to {guests} guests</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-[#FF385C]" />
            <span className="text-sm">Available</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex space-x-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1"
          >
            <Button asChild className="w-full btn-primary"
              onClick={e => {
                e.preventDefault();
                window.open('https://www.airbnb.co.in/users/show/586204498', '_blank');
                window.open('https://www.airbnb.co.in/users/show/515211548', '_blank');
              }}
            >
              <a href="#">View Details</a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1"
          >
            <Button asChild className="w-full btn-luxury"
              onClick={e => {
                e.preventDefault();
                window.open('https://www.airbnb.co.in/users/show/586204498', '_blank');
              }}
            >
              <a href="#">Book Now</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
