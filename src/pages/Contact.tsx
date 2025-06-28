import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_bhre2k7',         // Your Service ID
      'template_551cied',        // Your Template ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      },
      'C_nWKXzDhH3bJ_y45'        // Your Public Key
    )
    .then(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    })
    .catch((error) => {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
    });
  };

  const subjects = [
    'General Inquiry',
    'Property Booking',
    'Property Management',
    'Partnership Opportunity',
    'Guest Support',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[#FF385C] text-white py-20">
        <div className="container-custom section-padding">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Get in touch with our team for bookings, partnerships, or any questions 
              about our properties. We're here to help 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom section-padding">
          <div className="flex justify-center items-center mb-16">
            <div className="flex flex-col items-center justify-center animate-fade-in-up">
              <div className="rounded-full bg-[#FF385C] p-2 shadow-lg animate-pulse">
                <div className="rounded-lg bg-white p-8 flex flex-col items-center justify-center min-w-[220px] min-h-[220px]">
                  <Phone className="w-12 h-12 text-[#FF385C] mb-4 animate-bounce" />
                  <h3 className="text-xl font-playfair font-semibold text-[#FF385C] mb-2 text-center">
                    BOUGEE STAYS
                  </h3>
                  <p className="text-[#222] font-medium mb-1 text-center">
                    To Book call/text us <span className="text-[#FF385C]">☎️ 8287993252 | 8800209843</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-[#F7F7F7]">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#FF385C] mb-8">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[#FF385C] font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="h-12 border-[#FF385C]/30 focus:border-[#FF385C] bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[#FF385C] font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="h-12 border-[#FF385C]/30 focus:border-[#FF385C] bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-[#FF385C] font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="h-12 border-[#FF385C]/30 focus:border-[#FF385C] bg-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-[#FF385C] font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full h-12 px-3 border border-[#FF385C]/30 rounded-md focus:border-[#FF385C] focus:outline-none bg-white"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#FF385C] font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="border-[#FF385C]/30 focus:border-[#FF385C] resize-none bg-white"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-[#FF385C] hover:bg-[#FF385C]/90 text-white font-semibold py-6 text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Why Choose Bougee Stays? */}
            <div className="bg-white rounded-xl shadow-lg p-8 animate-fade-in-up">
              <h3 className="text-2xl font-playfair font-semibold text-[#FF385C] mb-4">
                Why Choose Bougee Stays?
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#FF385C] mb-2">
                    Instant Response
                  </h4>
                  <p className="text-[#222]">
                    Our team responds to all inquiries within 2 hours during business hours.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#FF385C] mb-2">
                    24/7 Support
                  </h4>
                  <p className="text-[#222]">
                    Round-the-clock concierge service for all our guests and partners.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#FF385C] mb-2">
                    Personalized Service
                  </h4>
                  <p className="text-[#222]">
                    Every interaction is tailored to your specific needs and preferences.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#FF385C] mb-2">
                    Expert Advice
                  </h4>
                  <p className="text-[#222]">
                    Our team has years of experience in luxury hospitality and property management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#FF385C] mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#FF385C] mb-2">
                  How do I book a property?
                </h3>
                <p className="text-[#222]">
                  You can book directly through our Airbnb listings or contact us for assistance with your reservation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#FF385C] mb-2">
                  What's included in the price?
                </h3>
                <p className="text-[#222]">
                  All utilities, premium amenities, 24/7 support, and professional cleaning are included.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#FF385C] mb-2">
                  Do you offer long-term stays?
                </h3>
                <p className="text-[#222]">
                  Yes, we offer special rates for stays of 30 days or longer. Contact us for details.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-[#FF385C] mb-2">
                  Is parking available?
                </h3>
                <p className="text-[#222]">
                  Most of our properties include parking. Check individual property details for specifics.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#FF385C] mb-2">
                  What if I need to cancel?
                </h3>
                <p className="text-[#222]">
                  Cancellation policies vary by property. We'll work with you to find the best solution.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[#FF385C] mb-2">
                  Do you provide concierge services?
                </h3>
                <p className="text-[#222]">
                  Yes, our 24/7 concierge team can help with reservations, transportation, and local recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#FF385C] text-white py-12">
        <div className="container-custom section-padding">
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-[#FF385C] mb-4">
              BOUGEE STAYS
            </div>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Transforming premium properties into extraordinary experiences.
            </p>
            <div className="mt-8 pt-8 border-t border-white/20 text-white/60">
              <p>&copy; 2025 BOUGEE STAYS. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
