import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  isRTL: boolean;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    services: 'خدماتنا',
    work: 'أعمالنا',
    pricing: 'باقاتنا',
    contact: 'تواصل',
    about: 'من نحن',
    faq: 'الأسئلة الشائعة',
    privacy: 'سياسة الخصوصية',
    
    // Hero
    heroTitle: 'نصمّم موقعك — بسرعة، بجودة، وبسعر مناسب',
    heroSubtitle: 'نحن فريق من المطورين والمصممين المتخصصين في إنشاء مواقع ويب احترافية تلبي احتياجاتك وتحقق أهدافك التجارية',
    getStarted: 'ابدأ الآن',
    viewWork: 'شاهد أعمالنا',
    
    // Services
    servicesTitle: 'خدماتنا',
    servicesSubtitle: 'نقدم مجموعة شاملة من الخدمات لتطوير مواقع الويب',
    webDesign: 'تصميم المواقع',
    webDevelopment: 'تطوير المواقع',
    hosting: 'الاستضافة والصيانة',
    seo: 'تحسين محركات البحث',
    
    // Pricing
    pricingTitle: 'باقاتنا',
    pricingSubtitle: 'اختر الباقة المناسبة لاحتياجاتك',
    basic: 'أساسي',
    standard: 'قياسي',
    premium: 'متميز',
    startNow: 'ابدأ الآن',
    
    // Contact
    contactTitle: 'تواصل معنا',
    contactSubtitle: 'نحن هنا لمساعدتك في تحقيق رؤيتك الرقمية',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'الرسالة',
    sendMessage: 'إرسال الرسالة',
    
    // Footer
    footerDescription: 'نحن استوديو تطوير مواقع الويب متخصص في إنشاء حلول رقمية مبتكرة للأعمال العربية',
    quickLinks: 'روابط سريعة',
    followUs: 'تابعنا',
    copyright: 'جميع الحقوق محفوظة',
    
    // About
    aboutTitle: 'من نحن',
    aboutSubtitle: 'فريق من المحترفين المتخصصين في تطوير المواقع',
    ourMission: 'رسالتنا',
    ourTeam: 'فريقنا',
    
    // Work
    workTitle: 'أعمالنا',
    workSubtitle: 'مشاريع وتصاميم مميزة أنجزناها لعملائنا',
    allProjects: 'جميع المشاريع',
    webProjects: 'مواقع الويب',
    designProjects: 'التصاميم',
    
    // FAQ
    faqTitle: 'الأسئلة الشائعة',
    faqSubtitle: 'إجابات على الأسئلة الأكثر شيوعاً',
    
    // Privacy
    privacyTitle: 'سياسة الخصوصية',
    privacySubtitle: 'نحن نحترم خصوصيتك ونحمي بياناتك الشخصية'
  },
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    work: 'Our Work',
    pricing: 'Pricing',
    contact: 'Contact',
    about: 'About Us',
    faq: 'FAQ',
    privacy: 'Privacy Policy',
    
    // Hero
    heroTitle: 'We Design Your Website — Fast, Quality, Affordable',
    heroSubtitle: 'We are a team of specialized developers and designers creating professional websites that meet your needs and achieve your business goals',
    getStarted: 'Get Started',
    viewWork: 'View Our Work',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'We offer a comprehensive range of web development services',
    webDesign: 'Web Design',
    webDevelopment: 'Web Development',
    hosting: 'Hosting & Maintenance',
    seo: 'SEO Optimization',
    
    // Pricing
    pricingTitle: 'Our Packages',
    pricingSubtitle: 'Choose the package that suits your needs',
    basic: 'Basic',
    standard: 'Standard',
    premium: 'Premium',
    startNow: 'Start Now',
    
    // Contact
    contactTitle: 'Contact Us',
    contactSubtitle: 'We are here to help you achieve your digital vision',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    sendMessage: 'Send Message',
    
    // Footer
    footerDescription: 'We are a web development studio specialized in creating innovative digital solutions for Arabic businesses',
    quickLinks: 'Quick Links',
    followUs: 'Follow Us',
    copyright: 'All rights reserved',
    
    // About
    aboutTitle: 'About Us',
    aboutSubtitle: 'A team of professionals specialized in web development',
    ourMission: 'Our Mission',
    ourTeam: 'Our Team',
    
    // Work
    workTitle: 'Our Work',
    workSubtitle: 'Outstanding projects and designs we completed for our clients',
    allProjects: 'All Projects',
    webProjects: 'Web Projects',
    designProjects: 'Design Projects',
    
    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Answers to the most commonly asked questions',
    
    // Privacy
    privacyTitle: 'Privacy Policy',
    privacySubtitle: 'We respect your privacy and protect your personal data'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState('ar');
  const isRTL = language === 'ar';

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'ar';
    setLanguage(savedLang);
    updateHtmlAttributes(savedLang);
  }, []);

  const updateHtmlAttributes = (lang: string) => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update body font class
    document.body.className = lang === 'ar' ? 'font-cairo' : 'font-inter';
  };

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    localStorage.setItem('lang', newLang);
    updateHtmlAttributes(newLang);
  };

  const t = (key: string): string => {
    return translations[language as keyof typeof translations][key as keyof typeof translations.ar] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, isRTL, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};