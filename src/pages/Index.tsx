import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Home, Award, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import PropertyCard from '@/components/PropertyCard';

const Index = () => {
  // Sample properties data - you can replace with your actual properties
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

  const stats = [
    { number: '50+', label: 'Premium Properties' },
    { number: '98%', label: 'Guest Satisfaction' },
    { number: '10K+', label: 'Happy Guests' },
    { number: '4.9', label: 'Average Rating' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'Every property is carefully vetted and meets our luxury standards'
    },
    {
      icon: Home,
      title: 'Prime Locations',
      description: 'Properties in the most desirable neighborhoods and destinations'
    },
    {
      icon: Award,
      title: 'Exceptional Service',
      description: '24/7 concierge support for an unforgettable experience'
    }
  ];

  const airbnbProfiles = [
    {
      id: 1,
      name: 'Premium Collection',
      profileUrl: 'https://www.airbnb.co.in/users/show/515211548',
      description: 'Our flagship properties featuring luxury amenities and prime locations'
    },
    {
      id: 2,
      name: 'Executive Suites',
      profileUrl: 'https://www.airbnb.co.in/users/show/586204498', 
      description: 'Business-friendly accommodations perfect for extended stays'
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="relative luxury-gradient text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-custom section-padding py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
              Luxury Stays
              <span className="block text-luxury-gold">Redefined</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              We transform premium properties into extraordinary Airbnb experiences. 
              Discover unparalleled luxury in the world's most coveted destinations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-semibold px-8 py-4 text-lg"
              >
                <Link to="/properties">
                  Explore Properties
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-luxury-navy font-semibold px-8 py-4 text-lg"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-2">
                  {stat.number}
                </div>
                <div className="text-luxury-stone font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-luxury-stone-light">
        <div className="container-custom section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
              Why Choose Luxury Stays
            </h2>
            <p className="text-xl text-luxury-stone max-w-3xl mx-auto">
              We go beyond typical vacation rentals to create extraordinary experiences 
              that exceed your expectations at every turn.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="w-12 h-12 text-luxury-gold mx-auto mb-6" />
                <h3 className="text-2xl font-playfair font-semibold text-luxury-navy mb-4">
                  {feature.title}
                </h3>
                <p className="text-luxury-stone leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="container-custom section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
              Featured Properties
            </h2>
            <p className="text-xl text-luxury-stone max-w-3xl mx-auto">
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
              className="bg-luxury-navy hover:bg-luxury-navy/90 text-white font-semibold px-8"
            >
              <Link to="/properties">
                View All Properties
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* All Listings Section */}
      <section className="py-20 bg-luxury-stone-light">
        <div className="container-custom section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
              Browse All Our Listings
            </h2>
            <p className="text-xl text-luxury-stone max-w-3xl mx-auto">
              Explore our complete collection of premium properties across different portfolios. 
              Each collection offers unique experiences tailored to different travel needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {airbnbProfiles.map((profile) => (
              <div 
                key={profile.id}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-playfair font-semibold text-luxury-navy mb-4">
                    {profile.name}
                  </h3>
                  <p className="text-luxury-stone leading-relaxed mb-6">
                    {profile.description}
                  </p>
                </div>
                
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-luxury-navy hover:bg-luxury-navy/90 text-white font-semibold px-8 w-full"
                >
                  <a 
                    href={profile.profileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    View All Listings
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-luxury-stone mb-6">
              Can't find what you're looking for? Our team is here to help you discover the perfect property.
            </p>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-luxury-navy text-luxury-navy hover:bg-luxury-navy hover:text-white font-semibold px-8"
            >
              <Link to="/contact">Contact Us for More Options</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 luxury-gradient text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let us help you find the perfect luxury property for your next getaway. 
            Our team is ready to make your stay unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-semibold px-8"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-luxury-navy font-semibold px-8"
            >
              <Link to="/properties">Browse Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-navy text-white py-12">
        <div className="container-custom section-padding">
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-luxury-gold mb-4">
              Luxury Stays
            </div>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Transforming premium properties into extraordinary experiences.
            </p>
            <div className="flex justify-center space-x-6">
              <Link to="/about" className="text-white/80 hover:text-luxury-gold transition-colors">
                About
              </Link>
              <Link to="/properties" className="text-white/80 hover:text-luxury-gold transition-colors">
                Properties
              </Link>
              <Link to="/contact" className="text-white/80 hover:text-luxury-gold transition-colors">
                Contact
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-white/60">
              <p>&copy; 2024 Luxury Stays. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
