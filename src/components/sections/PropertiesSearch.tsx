import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface PropertiesSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
}

const PropertiesSearch = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedLocation, 
  setSelectedLocation 
}: PropertiesSearchProps) => {
  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'new-york', label: 'New York' },
    { value: 'california', label: 'California' },
    { value: 'illinois', label: 'Illinois' }
  ];

  return (
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
  );
};

export default PropertiesSearch;
