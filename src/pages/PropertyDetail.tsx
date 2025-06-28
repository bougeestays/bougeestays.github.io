import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, Star, Wifi, Car, Coffee, Tv, Bath, Bed } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';

const PropertyDetail = () => {
  const { id } = useParams();

  // Sample property data - replace with your actual data
  const property = {
    id: parseInt(id || '1'),
    title: 'Elegant Downtown Penthouse',
    location: 'Manhattan, New York',
    images: [
      '/public/images/576ba456-db39-492a-a853-8b8b31df57b7.jpeg',
      '/public/images/9dd37433-99c2-4be3-93f2-5d51db521ab9.jpeg',
      '/public/images/40beb8bf-b303-44f7-9e0e-a66fb3f233e0.jpeg',
      '/public/images/3386d013-b690-4b4c-93e3-f330e8b77db1.jpeg'
    ],
    price: '$450',
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    rating: 4.9,
    reviews: 127,
    description: 'Experience luxury living in this stunning penthouse located in the heart of Manhattan. This elegantly designed space offers breathtaking city views, premium amenities, and unparalleled comfort for discerning guests.',
    longDescription: 'This spectacular penthouse combines modern luxury with classic elegance, featuring floor-to-ceiling windows that showcase panoramic views of the Manhattan skyline. The space has been meticulously designed with high-end finishes, custom furnishings, and state-of-the-art amenities. Located in a prestigious building with 24/7 concierge service, guests enjoy exclusive access to premium facilities while being steps away from world-class dining, shopping, and entertainment.',
    amenities: [
      { icon: Wifi, name: 'High-Speed WiFi' },
      { icon: Car, name: 'Parking Available' },
      { icon: Coffee, name: 'Premium Coffee' },
      { icon: Tv, name: '4K Smart TV' },
      { icon: Bath, name: 'BOUGEE Bathrooms' },
      { icon: Bed, name: 'Premium Bedding' }
    ]
  };

  return (
    <div className="min-h-screen bg-luxury-cream">
      <Navigation />

      {/* Header with Back Button */}
      <section className="bg-white py-6 border-b">
        <div className="container-custom section-padding">
          <Link 
            to="/properties" 
            className="inline-flex items-center text-luxury-stone hover:text-luxury-navy transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Properties
          </Link>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-white">
        <div className="container-custom section-padding py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            <div className="lg:row-span-2">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-96 lg:h-full object-cover rounded-xl"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {property.images.slice(1, 5).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${property.title} - Image ${index + 2}`}
                  className="w-full h-44 object-cover rounded-xl"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="bg-white pb-16">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-4">
                  {property.title}
                </h1>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-luxury-stone">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-lg">{property.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-luxury-gold text-luxury-gold mr-1" />
                    <span className="text-lg font-medium text-luxury-navy mr-2">{property.rating}</span>
                    <span className="text-luxury-stone">({property.reviews} reviews)</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-luxury-stone mr-1" />
                    <span className="text-luxury-stone">{property.guests} guests</span>
                  </div>
                  <div className="flex items-center">
                    <Bed className="w-5 h-5 text-luxury-stone mr-1" />
                    <span className="text-luxury-stone">{property.bedrooms} bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-5 h-5 text-luxury-stone mr-1" />
                    <span className="text-luxury-stone">{property.bathrooms} bathrooms</span>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-playfair font-semibold text-luxury-navy mb-4">
                  About This Property
                </h2>
                <p className="text-luxury-stone text-lg leading-relaxed mb-4">
                  {property.description}
                </p>
                <p className="text-luxury-stone leading-relaxed">
                  {property.longDescription}
                </p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-playfair font-semibold text-luxury-navy mb-6">
                  Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center p-4 bg-luxury-stone-light rounded-lg">
                      <amenity.icon className="w-6 h-6 text-luxury-gold mr-3" />
                      <span className="text-luxury-navy font-medium">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-luxury-stone/20 rounded-xl p-8 sticky top-8 shadow-lg">
                <div className="text-center mb-8">
                  <div className="text-4xl font-playfair font-bold text-luxury-navy mb-2">
                    {property.price}
                    <span className="text-lg text-luxury-stone font-normal"> / night</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Star className="w-4 h-4 fill-luxury-gold text-luxury-gold mr-1" />
                    <span className="text-luxury-navy font-medium mr-2">{property.rating}</span>
                    <span className="text-luxury-stone">({property.reviews} reviews)</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <Button 
                    asChild 
                    className="w-full btn-luxury py-6 text-lg"
                    onClick={e => {
                      e.preventDefault();
                      window.open('https://www.airbnb.co.in/users/show/586204498', '_blank');
                    }}
                  >
                    <a href="#">Book on Airbnb</a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-white py-6 text-lg"
                  >
                    <Link to="/contact">Contact Host</Link>
                  </Button>
                </div>

                <div className="text-center text-sm text-luxury-stone">
                  <p>Pricing may vary based on dates and availability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 luxury-gradient text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Need Help Planning Your Stay?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our concierge team is available 24/7 to help you make the most of your luxury experience.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-semibold px-8"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-navy text-white py-12">
        <div className="container-custom section-padding">
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-luxury-gold mb-4">
              BOUGEE Stays
            </div>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Transforming premium properties into extraordinary experiences.
            </p>
            <div className="mt-8 pt-8 border-t border-white/20 text-white/60">
              <p>&copy; 2025 BOUGEE Stays. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PropertyDetail;
