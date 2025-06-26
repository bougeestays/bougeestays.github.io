
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import FeaturedPropertiesSection from '@/components/sections/FeaturedPropertiesSection';
import AllListingsSection from '@/components/sections/AllListingsSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <FeaturedPropertiesSection />
      <AllListingsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
