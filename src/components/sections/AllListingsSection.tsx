
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AllListingsSection = () => {
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
    <section className="py-20 bg-gray-50">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-airbnb-gray mb-6">
            Browse All Our Listings
          </h2>
          <p className="text-xl text-airbnb-gray-light max-w-3xl mx-auto">
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
                <h3 className="text-2xl font-playfair font-semibold text-airbnb-gray mb-4">
                  {profile.name}
                </h3>
                <p className="text-airbnb-gray-light leading-relaxed mb-6">
                  {profile.description}
                </p>
              </div>
              
              <Button 
                asChild 
                size="lg" 
                className="bg-airbnb-primary hover:bg-airbnb-primary-dark text-white font-semibold px-8 w-full"
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
          <p className="text-airbnb-gray-light mb-6">
            Can't find what you're looking for? Our team is here to help you discover the perfect property.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="border-airbnb-primary text-airbnb-primary hover:bg-airbnb-primary hover:text-white font-semibold px-8"
          >
            <Link to="/contact">Contact Us for More Options</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AllListingsSection;
