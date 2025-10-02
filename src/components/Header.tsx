import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import logo from '../pictures/logo.png'


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isRTL, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
   /* { key: 'home', href: '#hero', action: () => scrollToSection('hero') },
    { key: 'services', href: '#services', action: () => scrollToSection('services') },
    { key: 'work', href: '#work', action: () => scrollToSection('work') },
    { key: 'pricing', href: '#pricing', action: () => scrollToSection('pricing') }, */
    { key: 'home', href: '#hero', action: () => scrollToSection('hero') }
  ];

  const secondaryLinks = [
    { key: 'about', to: '/about' },
    { key: 'work', to: '/work' },
    { key: 'faq', to: '/faq' },
    { key: 'privacy', to: '/privacy' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-primary/90 backdrop-blur-md border-b border-border-color' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <img 
              src={logo}  // legg inn sti til logoen din
              alt="SyrianVisions logo" 
              className="w-25 h-10"   // juster storleik
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map(link => (
              <button
                key={link.key}
                onClick={link.action}
                className="text-text-muted hover:text-white transition-colors duration-300 font-medium"
              >
                {t(link.key)}
              </button>
            ))}
            
            <div className="w-px h-6 bg-border-color"></div>
            
            {secondaryLinks.map(link => (
              <Link
                key={link.key}
                to={link.to}
                className="text-text-muted hover:text-white transition-colors duration-300 text-sm"
              >
                {t(link.key)}
              </Link>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse text-text-muted hover:text-white transition-colors duration-300"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">{isRTL ? 'EN' : 'العربية'}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className="text-text-muted hover:text-white transition-colors"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-muted hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-md border-b border-border-color">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map(link => (
                <button
                  key={link.key}
                  onClick={link.action}
                  className="block w-full text-left rtl:text-right text-white hover:text-accent-color transition-colors py-2"
                >
                  {t(link.key)}
                </button>
              ))}
              
              <div className="border-t border-border-color pt-4">
                {secondaryLinks.map(link => (
                  <Link
                    key={link.key}
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-text-muted hover:text-white transition-colors py-2"
                  >
                    {t(link.key)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;