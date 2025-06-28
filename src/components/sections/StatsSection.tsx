import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { TrendingUp, Users, Star, Home } from 'lucide-react';

const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counts, setCounts] = useState({
    properties: 0,
    satisfaction: 0,
    guests: 0,
    rating: 0,
  });

  const stats = [
    { 
      number: 50, 
      label: 'Premium Properties',
      icon: Home,
      suffix: '+',
      color: 'text-[#FF385C]'
    },
    { 
      number: 98, 
      label: 'Guest Satisfaction',
      icon: TrendingUp,
      suffix: '%',
      color: 'text-[#FF385C]'
    },
    { 
      number: 10, 
      label: 'Happy Guests',
      icon: Users,
      suffix: 'K+',
      color: 'text-[#FF385C]'
    },
    { 
      number: 4.9, 
      label: 'Average Rating',
      icon: Star,
      suffix: '',
      color: 'text-[#FF385C]'
    }
  ];

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      const timer = setInterval(() => {
        setCounts(prev => ({
          properties: Math.min(prev.properties + 1, 50),
          satisfaction: Math.min(prev.satisfaction + 2, 98),
          guests: Math.min(prev.guests + 0.2, 10),
          rating: Math.min(prev.rating + 0.1, 4.9),
        }));
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [inView]);

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
    <section className="py-20 bg-gradient-to-r from-[#FF385C] to-[#E31C5F] relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 opacity-10"
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

      <div className="container-custom section-padding relative z-10">
        <motion.div 
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const currentCount = counts[Object.keys(counts)[index] as keyof typeof counts];
            
            return (
              <motion.div 
                key={index} 
                className="text-center text-white"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="flex justify-center mb-4"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                >
                  <div className={`p-3 rounded-full bg-white/20 backdrop-blur-sm ${stat.color}`}>
                    <IconComponent size={24} />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-2"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                >
                  {typeof currentCount === 'number' && currentCount % 1 === 0 
                    ? Math.floor(currentCount) 
                    : currentCount.toFixed(1)
                  }
                  {stat.suffix}
                </motion.div>
                
                <motion.div 
                  className="text-white/90 font-medium text-sm md:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
