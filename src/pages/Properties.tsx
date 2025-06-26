
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Navigation from '@/components/Navigation';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

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

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'new-york', label: 'New York' },
    { value: 'california', label: 'California' },
    { value: 'illinois', label: 'Illinois' }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || 
                           property.location.toLowerCase().includes(selectedLocation.replace('-', ' '));
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Header Section */}
      <section className="airbnb-gradient text-white py-20">
        <div className="container-custom section-padding">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Our Premium Properties
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover our curated collection of luxury properties, each offering 
              a unique and unforgettable experience in prime locations.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white py-8 shadow-sm">
        <div className="container-custom section-padding">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-airbnb-gray-light w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search properties or locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 border-airbnb-gray-border focus:border-airbnb-primary"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-airbnb-gray-light" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-2 h-12 border border-airbnb-gray-border rounded-md focus:border-airbnb-primary focus:outline-none bg-white"
                >
                  {locations.map(location => (
                    <option key={location.value} value={location.value}>
                      {location.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container-custom section-padding">
          <div className="mb-8">
            <p className="text-airbnb-gray-light">
              Showing {filteredProperties.length} of {properties.length} properties
            </p>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-4xl font-playfair text-airbnb-gray-light mb-4">
                No properties found
              </div>
              <p className="text-airbnb-gray-light text-lg mb-8">
                Try adjusting your search or filter criteria
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedLocation('all');
                }}
                className="bg-airbnb-primary hover:bg-airbnb-primary-dark text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 airbnb-gradient text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let our team help you find the perfect property for your needs. 
            We're always adding new luxury properties to our collection.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-white hover:bg-white/90 text-airbnb-primary font-semibold px-8"
          >
            <a href="/contact">Contact Us</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-airbnb-gray text-white py-12">
        <div className="container-custom section-padding">
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-airbnb-primary mb-4">
              Luxury Stays
            </div>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Transforming premium properties into extraordinary experiences.
            </p>
            <div className="mt-8 pt-8 border-t border-white/20 text-white/60">
              <p>&copy; 2024 Luxury Stays. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Properties;
