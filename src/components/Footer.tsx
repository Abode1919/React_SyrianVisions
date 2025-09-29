import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-secondary border-t border-border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-white">SyrianVisions</span>
            </div>
            <p className="text-text-muted mb-6 max-w-md">
              {t('footerDescription')}
            </p>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-text-muted">
                <Mail className="w-4 h-4" />
                <span>info@syrianvisions.com</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-text-muted">
                <Phone className="w-4 h-4" />
                <span>+963 xxx xxx xxx</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('quickLinks')}</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="block text-text-muted hover:text-white transition-colors"
              >
                {t('home')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-text-muted hover:text-white transition-colors"
              >
                {t('services')}
              </button>
              <button
                onClick={() => scrollToSection('work')}
                className="block text-text-muted hover:text-white transition-colors"
              >
                {t('work')}
              </button>
              <Link
                to="/about"
                className="block text-text-muted hover:text-white transition-colors"
              >
                {t('about')}
              </Link>
              <Link
                to="/faq"
                className="block text-text-muted hover:text-white transition-colors"
              >
                {t('faq')}
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('followUs')}</h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-text-muted hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-border-color mt-12 pt-8 text-center">
          <p className="text-text-muted">
            © 2025 SyrianVisions. {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;