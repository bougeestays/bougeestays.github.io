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
    'Presence in major cities'
  ];

  const team = [
    {
      name: 'Col. Bhupendra (Retd.)',
      role: 'Co-Host & Curator',
      image: '/images/576ba456-db39-492a-a853-8b8b31df57b7.jpeg',
      description: `I am a retired Army officer who has spent a lifetime serving in the forces. After a life well lived, I have decided to embark on a new adventure alongside my daughter. Together, we have poured our hearts into curating & designing each space to perfectly suit the needs of our guests.\n\nOur commitment to excellence, attention to detail, and passion for hospitality ensure that every stay is a unique experience. We host all! Live. Laugh. Love ❤️` 
    },
    {
      name: 'Sweta Kharayat',
      role: 'Co-Host & Airbnb Marketer',
      image: '/images/9dd37433-99c2-4be3-93f2-5d51db521ab9.jpeg',
      description: `I am an avid reader, who spends her time trying to market and run Airbnb. I spend too much time reading and daydreaming, and I'm obsessed with books and the esoteric.\n\nThis journey is a father-daughter duo adventure, blending my marketing skills with my father's wisdom and hospitality.`
    }
  ];

  return (
    <div className="min-h-screen bg-[#FF385C]">
      <Navigation />
      <section className="bg-[#FF385C] text-white py-20">
        <div className="container-custom section-padding">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              About BOUGEE STAYS
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto whitespace-pre-line">
              Welcome to Bougee Stays! We are a father-daughter duo passionate about creating memorable stays for our guests. Our journey began with a shared dream: to blend the wisdom and discipline of a life in the Army with the creativity and warmth of modern hospitality.\n\nEvery property is curated with love, care, and a personal touch, ensuring you feel at home—no matter where you are.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
     

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
                  Bhupendra, a retired Army officer born in the 70s and a lifelong dog lover, brings a spirit of discipline, reliability, and care to every guest experience. After decades of service, he now finds joy in hosting, always available on text and ready to help.
                </p>
                <p>
                  Sweta, born in the 90s, is an Airbnb marketer, avid reader, and dreamer. She's obsessed with books, the esoteric, and her cute little puppy. Together, they combine tradition and innovation to create spaces that are both welcoming and unique.
                </p>
                <p>
                  Bougee Stays is more than just a collection of properties—it's a heartfelt project by a father and daughter who believe in living, laughing, and loving. We invite you to be part of our story!
                </p>
              </div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <img
                src="/images/40beb8bf-b303-44f7-9e0e-a66fb3f233e0.jpeg"
                alt="Father and daughter smiling together, Bougee Stays founders"
                className="w-full h-96 object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-20 bg-[#FF385C] bg-opacity-10">
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
                src="/images/576ba456-db39-492a-a853-8b8b31df57b7.jpeg"
                alt="Col. Bhupendra, Bougee Stays Co-Host & Curator"
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
      <section className="py-20 bg-[#FF385C] bg-opacity-10">
        <div className="container-custom section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
              Meet Your Hosts
            </h2>
            <p className="text-xl text-luxury-stone max-w-3xl mx-auto">
              Bougee Stays is run by a father-daughter team who pour their hearts into every detail, ensuring your stay is special.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={member.image}
                  alt={`Portrait of ${member.name}, ${member.role}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-luxury-navy mb-2">
                    {member.name}
                  </h3>
                  <p className="text-luxury-gold font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-luxury-stone whitespace-pre-line">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FF385C] text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover why thousands of guests choose Bougee Stays for their most 
            important trips and special occasions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              variant="link"
              className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-semibold px-8"
            >
              <Link to="/properties">View Properties</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="default" 
              className="border-white text-white hover:bg-red hover:text-luxury-navy font-semibold px-8"
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FF385C] text-white py-12">
        <div className="container-custom section-padding">
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-luxury-gold mb-4">
              BOUGEE STAYS
            </div>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              A father-daughter duo transforming stays into memories.
            </p>
            <div className="mt-8 pt-8 border-t border-white/20 text-white/60">
              <p>&copy; 2025 Bougee Stays. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
