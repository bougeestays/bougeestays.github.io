import { Button } from '@/components/ui/button';

const PropertiesCTA = () => {
  return (
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
          className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-semibold px-8"
        >
          <a href="/contact">Contact Us for More Information</a>
        </Button>
      </div>
    </section>
  );
};

export default PropertiesCTA;
