import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import SplitSection from '../components/sections/SplitSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import PricingSection from '../components/sections/PricingSection';
import ContactSection from '../components/sections/ContactSection';
import Reveal from '../components/anim/Reveal';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import Seo from '../components/Seo';

const HomePage: React.FC = () => {
  const { isRTL } = useLanguage();

  const lang = isRTL ? 'ar' : 'en';
  const dir = isRTL ? 'rtl' : 'ltr';

  const title = isRTL
    ? 'Syrian Visions - تطوير مواقع الويب الحديثة'
    : 'Syrian Visions – Modern Web Design & Development';

  const desc = isRTL
    ? 'نبني مواقع ويب سريعة وعصرية للشركات: تصميم، برمجة، ودعم مستمر. احصل على عرض سعر مجاني.'
    : 'We build fast, modern websites for small businesses—design, development, and ongoing support. Get a free quote.';

  return (
    <Reveal delay={0.3}>
      {/* språk/retning på sida */}
      <Helmet htmlAttributes={{ lang, dir }}>
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* SEO for forsida */}
      <Seo title={title} description={desc} path="/" />

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
