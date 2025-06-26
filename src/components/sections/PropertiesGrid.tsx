
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';

interface Property {
  id: number;
  title: string;
  location: string;
  image: string;
  price: string;
  guests: number;
  rating: number;
  reviews: number;
}

interface PropertiesGridProps {
  filteredProperties: Property[];
  totalProperties: number;
  onClearFilters: () => void;
}

const PropertiesGrid = ({ filteredProperties, totalProperties, onClearFilters }: PropertiesGridProps) => {
  return (
    <section className="py-16">
      <div className="container-custom section-padding">
        <div className="mb-8">
          <p className="text-airbnb-gray-light">
            Showing {filteredProperties.length} of {totalProperties} properties
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
              onClick={onClearFilters}
              className="bg-airbnb-primary hover:bg-airbnb-primary-dark text-white"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesGrid;
