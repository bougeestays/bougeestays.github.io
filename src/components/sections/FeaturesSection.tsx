
import { Shield, Home, Award } from 'lucide-react';

const FeaturesSection = () => {
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-airbnb-gray mb-6">
            Why Choose BOUGEE Stays
          </h2>
          <p className="text-xl text-airbnb-gray-light max-w-3xl mx-auto">
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
              <feature.icon className="w-12 h-12 text-airbnb-primary mx-auto mb-6" />
              <h3 className="text-2xl font-playfair font-semibold text-airbnb-gray mb-4">
                {feature.title}
              </h3>
              <p className="text-airbnb-gray-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
