import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import PropertiesHeader from '@/components/sections/PropertiesHeader';
import PropertiesSearch from '@/components/sections/PropertiesSearch';
import PropertiesGrid from '@/components/sections/PropertiesGrid';
import PropertiesCTA from '@/components/sections/PropertiesCTA';
import PropertiesFooter from '@/components/sections/PropertiesFooter';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const airbnbLinks = [
  'https://www.airbnb.co.in/users/show/586204498',
  'https://www.airbnb.co.in/users/show/515211548'
];

const propertyImages = [
  '/images/b84faacd-3a28-4aae-a31d-029ccab04260.jpeg',
  '/images/c201e4ba-b8fc-4245-9778-43a37f7156f1.jpeg',
  '/images/da838c41-3431-4cf6-a056-50607b9f57b9.jpeg',
  '/images/ead1fe3b-6320-43b7-b3e3-9b9a67363811.jpeg',
  '/images/3386d013-b690-4b4c-93e3-f330e8b77db1.jpeg',
  '/images/d3793461-d9a9-4120-bd50-da1f6ca9b35e.jpeg',
  '/images/a1f821b7-bf9c-47cf-acf8-0fc8bfe324ec.jpeg',
  '/images/063f6919-d0ad-487d-8ca4-57451f39356c.jpeg',
  '/images/744a5bab-7362-446f-a9d7-ccd46d4242ba.jpeg',
  '/images/3b3f8a79-117e-4c86-b3ae-19d607ba98d4.jpeg',
];

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const carouselApiRef = useRef(null);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedLocation('all');
  };

  useEffect(() => {
    if (!carouselApiRef.current) return;
    const interval = setInterval(() => {
      // @ts-ignore
      carouselApiRef.current.scrollNext && carouselApiRef.current.scrollNext();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <Navigation />
      <PropertiesHeader />
      <div className="container-custom section-padding py-12">
        <Carousel opts={{ slidesToScroll: 1, loop: true, align: 'start' }} setApi={api => (carouselApiRef.current = api)}>
          <CarouselContent>
            {propertyImages.map((img, idx) => (
              <CarouselItem key={img} className="basis-1/2 max-w-1/2 px-2">
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <img
                    src={img}
                    alt={`Property ${idx + 1}`}
                    className="rounded-xl shadow-lg object-cover w-full h-[350px] max-h-[400px] cursor-pointer transition-transform duration-500 hover:scale-105"
                    onClick={() => {
                      window.open(airbnbLinks[0], '_blank');
                      window.open(airbnbLinks[1], '_blank');
                    }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <PropertiesCTA />
      <PropertiesFooter />
      <div className="bg-white py-12">
        <div className="container-custom section-padding">
          <h2 className="text-3xl font-playfair font-bold text-[#FF385C] mb-8 text-center">Our Property Locations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">AIPL Joy Street</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.073964234833!2d77.0564559!3d28.391672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2389e5c28d1b%3A0x151771de2674a328!2sAIPL%20Joy%20Street!5e0!3m2!1sen!2sin!4v1719400000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AIPL Joy Street Map"
              ></iframe>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Elements One Mall</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.011073073839!2d77.0480677!3d28.4201095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2283d8aeaa23%3A0x372934a96c7b9fce!2sElements%20One%20Mall!5e0!3m2!1sen!2sin!4v1719400000000!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elements One Mall Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
