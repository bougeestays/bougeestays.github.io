
import { Shield, Award, Heart, Users, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Every property undergoes rigorous inspection to meet our luxury standards'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every aspect of your stay experience'
    },
    {
      icon: Heart,
      title: 'Hospitality',
      description: 'Genuine care and attention to detail in everything we do'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building lasting relationships with guests and property owners'
    }
  ];

  const achievements = [
    '5-star average rating across all properties',
    '98% guest satisfaction rate',
    'Over 10,000 successful bookings',
    'Partnerships with premium property owners',
    '24/7 concierge support',
    'Presence in 15+ major cities'
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face',
      description: 'Former luxury hotel executive with 15+ years of hospitality experience'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=400&fit=crop&crop=face',
      description: 'Property management specialist focused on operational excellence'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Guest Experience Director',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop&crop=face',
      description: 'Dedicated to creating memorable experiences for every guest'
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="luxury-gradient text-white py-20">
        <div className="container-custom section-padding">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              About Luxury Stays
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're passionate about transforming exceptional properties into 
              unforgettable luxury experiences for discerning travelers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-luxury-stone leading-relaxed">
                <p>
                  Founded in 2020, Luxury Stays began with a simple vision: to bridge the gap 
                  between luxury hospitality and vacation rentals. Our founder, a former luxury 
                  hotel executive, recognized the untapped potential in premium residential properties.
                </p>
                <p>
                  We saw an opportunity to transform exceptional homes and apartments into 
                  professionally managed luxury accommodations that rival the world's finest hotels. 
                  Our approach combines the intimacy of a private residence with the service 
                  standards of five-star hospitality.
                </p>
                <p>
                  Today, we're proud to offer a curated portfolio of premium properties in the 
                  world's most desirable destinations, each delivering an unparalleled level of 
                  comfort, style, and service.
                </p>
              </div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop"
                alt="Luxury interior"
                className="w-full h-96 object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-luxury-stone-light">
        <div className="container-custom section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
              Our Values
            </h2>
            <p className="text-xl text-luxury-stone max-w-3xl mx-auto">
              These core principles guide everything we do and ensure every 
              guest receives an exceptional experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon className="w-12 h-12 text-luxury-gold mx-auto mb-6" />
                <h3 className="text-xl font-playfair font-semibold text-luxury-navy mb-4">
                  {value.title}
                </h3>
                <p className="text-luxury-stone">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop"
                alt="Luxury property exterior"
                className="w-full h-96 object-cover rounded-xl shadow-xl"
              />
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-8">
                Our Achievements
              </h2>
              <p className="text-lg text-luxury-stone mb-8 leading-relaxed">
                Since our founding, we've built a reputation for excellence and achieved 
                significant milestones that reflect our commitment to luxury hospitality.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-luxury-gold mr-3 flex-shrink-0" />
                    <span className="text-luxury-stone">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-luxury-stone-light">
        <div className="container-custom section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-luxury-stone max-w-3xl mx-auto">
              Our experienced team brings together expertise from luxury hospitality, 
              property management, and guest services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-luxury-navy mb-2">
                    {member.name}
                  </h3>
                  <p className="text-luxury-gold font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-luxury-stone">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 luxury-gradient text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover why thousands of guests choose Luxury Stays for their most 
            important trips and special occasions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-semibold px-8"
            >
              <Link to="/properties">View Properties</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-luxury-navy font-semibold px-8"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-navy text-white py-12">
        <div className="container-custom section-padding">
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-luxury-gold mb-4">
              Luxury Stays
            </div>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Transforming premium properties into extraordinary experiences.
            </p>
            <div className="mt-8 pt-8 border-t border-white/20 text-white/60">
              <p>&copy; 2024 Luxury Stays. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
