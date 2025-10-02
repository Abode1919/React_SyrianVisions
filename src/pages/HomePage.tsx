import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import SplitSection from '../components/sections/SplitSection'
import ServicesSection from '../components/sections/ServicesSection'
import PortfolioSection from '../components/sections/PortfolioSection'
import PricingSection from '../components/sections/PricingSection'
import ContactSection from '../components/sections/ContactSection'
import Reveal from '../components/anim/Reveal'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../context/LanguageContext'

const HomePage: React.FC = () => {
  const { isRTL } = useLanguage()

  const seo = isRTL
    ? {
        title: 'Syrian Visions - تطوير مواقع الويب الحديثة',
        desc:
          'نبني مواقع ويب سريعة وعصرية للشركات: تصميم، برمجة، ودعم مستمر. احصل على عرض سعر مجاني.',
        canonical: 'https://syrianvisions.com/',
        lang: 'ar',
        dir: 'rtl',
      }
    : {
        title: 'Syrian Visions – Modern Web Design & Development',
        desc:
          'We build fast, modern websites for small businesses—design, development, and ongoing support. Get a free quote.',
        canonical: 'https://syrianvisions.com/',
        lang: 'en',
        dir: 'ltr',
      }

  return (
    <Reveal delay={0.3}>
      {/* SEO for forsida */}
      <Helmet>
        <html lang={seo.lang} dir={seo.dir} />
        <title>{seo.title}</title>
        <meta name="description" content={seo.desc} />
        <link rel="canonical" href={seo.canonical} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Twitter */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.canonical} />
        <meta property="og:image" content="https://syrianvisions.com/pictures/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.desc} />
        <meta name="twitter:image" content="https://syrianvisions.com/pictures/og-image.png" />
      </Helmet>

      <div>
        <HeroSection />
        <SplitSection />
        <ServicesSection />
        <PortfolioSection />
        <PricingSection />
        <ContactSection />
      </div>
    </Reveal>
  )
}

export default HomePage
