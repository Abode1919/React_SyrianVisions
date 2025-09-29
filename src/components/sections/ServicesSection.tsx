import React from 'react';
import { Palette, Code, Server, Search, Smartphone, ShoppingCart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const ServicesSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Palette,
      title: 'تصميم المواقع',
      titleEn: 'Web Design',
      features: ['تصميم متجاوب', 'واجهة مستخدم حديثة', 'تجربة مستخدم متميزة'],
      featuresEn: ['Responsive Design', 'Modern UI', 'Excellent UX']
    },
    {
      icon: Code,
      title: 'تطوير المواقع',
      titleEn: 'Web Development',
      features: ['تطوير متقدم', 'أداء عالي', 'أمان متطور'],
      featuresEn: ['Advanced Development', 'High Performance', 'Advanced Security']
    },
    {
      icon: Server,
      title: 'الاستضافة والصيانة',
      titleEn: 'Hosting & Maintenance',
      features: ['استضافة موثوقة', 'صيانة دورية', 'دعم فني 24/7'],
      featuresEn: ['Reliable Hosting', 'Regular Maintenance', '24/7 Technical Support']
    },
    {
      icon: Search,
      title: 'تحسين محركات البحث',
      titleEn: 'SEO Optimization',
      features: ['تحسين SEO', 'تحليلات مفصلة', 'نتائج مضمونة'],
      featuresEn: ['SEO Optimization', 'Detailed Analytics', 'Guaranteed Results']
    },
    {
      icon: Smartphone,
      title: 'تطبيقات الجوال',
      titleEn: 'Mobile Apps',
      features: ['تطبيقات iOS', 'تطبيقات Android', 'تطبيقات هجينة'],
      featuresEn: ['iOS Apps', 'Android Apps', 'Hybrid Apps']
    },
    {
      icon: ShoppingCart,
      title: 'التجارة الإلكترونية',
      titleEn: 'E-commerce',
      features: ['متاجر إلكترونية', 'أنظمة دفع آمنة', 'إدارة المخزون'],
      featuresEn: ['Online Stores', 'Secure Payment', 'Inventory Management']
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300 shadow-medium hover:shadow-heavy group"
              >
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {isRTL ? service.title : service.titleEn}
                </h3>

                <ul className="space-y-2">
                  {(isRTL ? service.features : service.featuresEn).map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-text-muted flex items-center space-x-2 rtl:space-x-reverse">
                      <div className="w-1.5 h-1.5 bg-accent-color rounded-full flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;