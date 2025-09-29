import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const HeroSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #66f2fa 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #764ba2 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-accent-color bg-clip-text text-transparent">
              {t('heroTitle')}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection('contact')}
              className={`btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center space-x-3 rtl:space-x-reverse group`}
            >
              <span>{t('getStarted')}</span>
              <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
            </button>
            
            <button
              onClick={() => scrollToSection('work')}
              className="btn-secondary px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-3 rtl:space-x-reverse group"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>{t('viewWork')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;