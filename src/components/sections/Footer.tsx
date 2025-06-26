
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-airbnb-gray text-white py-12">
      <div className="container-custom section-padding">
        <div className="text-center">
          <div className="text-3xl font-playfair font-bold text-airbnb-primary mb-4">
            BOUGEE Stays
          </div>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Transforming premium properties into extraordinary experiences.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/about" className="text-white/80 hover:text-airbnb-primary transition-colors">
              About
            </Link>
            <Link to="/properties" className="text-white/80 hover:text-airbnb-primary transition-colors">
              Properties
            </Link>
            <Link to="/contact" className="text-white/80 hover:text-airbnb-primary transition-colors">
              Contact
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-white/60">
            <p>&copy; 2025 BOUGEE Stays. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
