import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white text-[#222] shadow-xl relative z-50">
      <div className="container-custom section-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-playfair font-bold text-[#FF385C]">
              BOUGEE STAYS
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#FF385C] ${
                  isActive(item.path) ? 'text-[#FF385C]' : 'text-[#222]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a href="https://www.airbnb.co.in/users/show/586204498" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#FF385C] hover:bg-[#FF385C]/90 text-white font-medium">
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#222] hover:text-[#FF385C] hover:bg-transparent"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-[#FF385C]/10">
            <div className="section-padding py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-lg font-medium transition-colors duration-200 hover:text-[#FF385C] ${
                    isActive(item.path) ? 'text-[#FF385C]' : 'text-[#222]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a href="https://www.airbnb.co.in/users/show/586204498" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[#FF385C] hover:bg-[#FF385C]/90 text-white font-medium mt-4">
                  Book Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
