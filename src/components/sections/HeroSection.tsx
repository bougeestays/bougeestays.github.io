
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative airbnb-gradient text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative container-custom section-padding py-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            BOUGEE Stays
            <span className="block text-white">Redefined</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            We transform premium properties into extraordinary Airbnb experiences. 
            Discover unparalleled luxury in the world's most coveted destinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              
              className="bg-white hover:bg-white/90 text-airbnb-primary font-semibold px-8 py-4 text-lg"
            >
              <Link to="/properties">
                Explore Properties
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-white hover:bg-white/90 text-airbnb-primary font-semibold px-8 py-4 text-lg"
>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
