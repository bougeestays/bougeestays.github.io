import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Sparkles, Star, Heart } from 'lucide-react';

const CTASection = () => {
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

  return (
    <section className="py-20 airbnb-gradient text-white relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute top-10 left-10 text-white/20"
        animate={{ y: [0, -20, 0], rotate: [0, 360] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Star size={30} />
      </motion.div>
      <motion.div
        className="absolute top-20 right-20 text-white/20"
        animate={{ y: [0, 20, 0], rotate: [360, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Heart size={25} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-white/20"
        animate={{ y: [0, -15, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <Sparkles size={35} />
      </motion.div>

      <div className="container-custom section-padding text-center relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Sparkles size={16} />
              <span>Start Your Journey</span>
            </motion.div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6"
          >
            Ready to Experience{' '}
            <span className="text-gradient">BOUGEE</span>?
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Let us help you find the perfect luxury property for your next getaway. 
            Our team is ready to make your stay unforgettable and create memories that last a lifetime.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="btn-secondary text-lg px-8 py-4"
              >
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="btn-luxury text-lg px-8 py-4"
              >
                <Link to="/properties">
                  Browse Properties
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "24/7", label: "Support" },
              { number: "100%", label: "Satisfaction" },
              { number: "5★", label: "Rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
