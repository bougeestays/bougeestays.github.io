import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const footerLinks = [
    { name: 'About', path: '/about' },
    { name: 'Properties', path: '/properties' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/gatsby_studios/' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'shwetakharayat123@gmail.com' },
    { icon: Phone, text: '+91 8287993252 | 8800209843' },
    { icon: MapPin, text: 'Gurgaon, India' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#FF385C] to-[#E31C5F] text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container-custom section-padding relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Main footer content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand section */}
            <motion.div variants={itemVariants} className="md:col-span-2">
              <motion.div 
                className="flex items-center space-x-2 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-8 h-8 text-[#FF385C]" />
                <div className="text-3xl font-playfair font-bold text-gradient">
                  BOUGEE Stays
                </div>
              </motion.div>
              <p className="text-white/80 mb-6 max-w-md leading-relaxed">
                Transforming premium properties into extraordinary experiences. 
                We curate the finest luxury accommodations for discerning travelers.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#FF385C] transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-playfair font-semibold mb-6 text-white">Quick Links</h3>
              <div className="space-y-3">
                {footerLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Link 
                      to={link.path} 
                      className="text-white/80 hover:text-[#FF385C] transition-colors duration-300 block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-playfair font-semibold mb-6 text-white">Contact</h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.text}
                    className="flex items-center space-x-3 text-white/80"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <contact.icon size={16} className="text-[#FF385C]" />
                    <span className="text-sm">{contact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom section */}
          <motion.div 
            className="pt-8 border-t border-white/20"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p 
                className="text-white/60 text-sm"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 }}
              >
                &copy; 2025 BOUGEE Stays. All rights reserved.
              </motion.p>
              <motion.div 
                className="flex space-x-6 text-sm"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.7 }}
              >
                <a href="#" className="text-white/60 hover:text-[#FF385C] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/60 hover:text-[#FF385C] transition-colors">
                  Terms of Service
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
