import { Shield, Home, Award, Sparkles, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeaturesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'Every property is carefully vetted and meets our luxury standards',
      color: 'text-[#FF385C]',
      bgColor: 'bg-red-50',
      gradient: 'from-[#FF385C] to-[#E31C5F]'
    },
    {
      icon: Home,
      title: 'Prime Locations',
      description: 'Properties in the most desirable neighborhoods and destinations',
      color: 'text-[#FF385C]',
      bgColor: 'bg-red-50',
      gradient: 'from-[#FF385C] to-[#E31C5F]'
    },
    {
      icon: Award,
      title: 'Exceptional Service',
      description: '24/7 concierge support for an unforgettable experience',
      color: 'text-[#FF385C]',
      bgColor: 'bg-red-50',
      gradient: 'from-[#FF385C] to-[#E31C5F]'
    }
  ];

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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#FF385C]/5 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tr from-[#D4AF37]/5 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container-custom section-padding relative z-10">
        <motion.div 
          ref={ref}
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.div
              className="inline-flex items-center space-x-2 bg-[#FF385C]/10 text-[#FF385C] px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Sparkles size={16} />
              <span>Why Choose Us</span>
            </motion.div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-800 mb-6"
          >
            Why Choose BOUGEE Stays
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We go beyond typical vacation rentals to create extraordinary experiences 
            that exceed your expectations at every turn.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                {/* Icon container */}
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-6 rounded-full ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-playfair font-semibold text-gray-800 mb-4 group-hover:text-[#FF385C] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {feature.title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {feature.description}
                </motion.p>

                {/* Decorative elements */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                >
                  <Star className="w-4 h-4 text-yellow-400" />
                </motion.div>
                
                <motion.div
                  className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                >
                  <Zap className="w-4 h-4 text-[#FF385C]" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
