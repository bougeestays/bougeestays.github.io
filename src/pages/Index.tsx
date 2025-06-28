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
    <div className="min-h-screen bg-[#F7F7F7]">
      <Navigation />
      <div className="pt-20">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <FeaturedPropertiesSection />
        <AllListingsSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
