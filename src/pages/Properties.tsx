
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import PropertiesHeader from '@/components/sections/PropertiesHeader';
import PropertiesSearch from '@/components/sections/PropertiesSearch';
import PropertiesGrid from '@/components/sections/PropertiesGrid';
import PropertiesCTA from '@/components/sections/PropertiesCTA';
import PropertiesFooter from '@/components/sections/PropertiesFooter';

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');

  // Sample properties data - replace with your actual properties
  const properties = [
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
    },
    {
      id: 4,
      title: 'Sophisticated Urban Retreat',
      location: 'Chicago, Illinois',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop',
      price: '$380',
      guests: 5,
      rating: 4.8,
      reviews: 203
    },
    {
      id: 5,
      title: 'Executive Business Suite',
      location: 'Downtown, San Francisco',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      price: '$420',
      guests: 3,
      rating: 4.9,
      reviews: 94
    },
    {
      id: 6,
      title: 'Luxury Coastal Mansion',
      location: 'Big Sur, California',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
      price: '$850',
      guests: 12,
      rating: 5.0,
      reviews: 67
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || 
                           property.location.toLowerCase().includes(selectedLocation.replace('-', ' '));
    return matchesSearch && matchesLocation;
  });

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedLocation('all');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <PropertiesHeader />
      <PropertiesSearch 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />
      <PropertiesGrid 
        filteredProperties={filteredProperties}
        totalProperties={properties.length}
        onClearFilters={handleClearFilters}
      />
      <PropertiesCTA />
      <PropertiesFooter />
    </div>
  );
};

export default Properties;
