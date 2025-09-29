import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import SplitSection from '../components/sections/SplitSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import PricingSection from '../components/sections/PricingSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <SplitSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;