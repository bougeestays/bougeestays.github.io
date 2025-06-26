import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 airbnb-gradient text-white">
      <div className="container-custom section-padding text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
          Ready to Experience BOUGEE?
        </h2>
        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Let us help you find the perfect luxury property for your next getaway. 
          Our team is ready to make your stay unforgettable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold px-8"
          >
            <Link to="/contact">Learn More</Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold px-8"
          >
            <Link to="/properties">Browse Properties</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
