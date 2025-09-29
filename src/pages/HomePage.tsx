import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import SplitSection from '../components/sections/SplitSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import PricingSection from '../components/sections/PricingSection';
import ContactSection from '../components/sections/ContactSection';
import Reveal from "../components/anim/Reveal"

const HomePage: React.FC = () => {
  return (
  <Reveal delay={0.3}>
    <div>
      <HeroSection />
      <SplitSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <ContactSection />
    </div>
  </Reveal>
  );
};

export default HomePage;