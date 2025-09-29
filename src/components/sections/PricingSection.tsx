import React from 'react';
import { Check, Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const PricingSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: 'أساسي',
      nameEn: 'Basic',
      price: '$299',
      popular: false,
      features: [
        'تصميم صفحة واحدة',
        'تصميم متجاوب',
        'نماذج اتصال',
        'تحسين أساسي لمحركات البحث',
        'شهر استضافة مجانية'
      ],
      featuresEn: [
        'Single Page Design',
        'Responsive Design',
        'Contact Forms',
        'Basic SEO',
        '1 Month Free Hosting'
      ]
    },
    {
      name: 'قياسي',
      nameEn: 'Standard',
      price: '$599',
      popular: true,
      features: [
        'حتى 5 صفحات',
        'تصميم مخصص',
        'لوحة إدارة',
        'تحسين متقدم لمحركات البحث',
        '3 أشهر استضافة مجانية',
        'دعم فني لمدة 6 أشهر'
      ],
      featuresEn: [
        'Up to 5 Pages',
        'Custom Design',
        'Admin Dashboard',
        'Advanced SEO',
        '3 Months Free Hosting',
        '6 Months Technical Support'
      ]
    },
    {
      name: 'متميز',
      nameEn: 'Premium',
      price: '$1299',
      popular: false,
      features: [
        'عدد صفحات غير محدود',
        'تصميم مخصص متقدم',
        'نظام إدارة محتوى',
        'تجارة إلكترونية',
        'تحسين شامل لمحركات البحث',
        '6 أشهر استضافة مجانية',
        'دعم فني لمدة سنة كاملة'
      ],
      featuresEn: [
        'Unlimited Pages',
        'Advanced Custom Design',
        'Content Management System',
        'E-commerce Functionality',
        'Complete SEO Optimization',
        '6 Months Free Hosting',
        'Full Year Technical Support'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('pricingTitle')}
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            {t('pricingSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative glass-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-2 border-accent-color shadow-heavy scale-105' 
                  : 'shadow-medium hover:shadow-heavy'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-accent px-4 py-2 rounded-full flex items-center space-x-2 rtl:space-x-reverse">
                    <Star className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-semibold">
                      {isRTL ? 'الأكثر شعبية' : 'Most Popular'}
                    </span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {isRTL ? plan.name : plan.nameEn}
                </h3>
                <div className="text-4xl font-bold text-white mb-2">
                  {plan.price}
                </div>
                <p className="text-text-muted">
                  {isRTL ? 'دفعة واحدة' : 'One-time payment'}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {(isRTL ? plan.features : plan.featuresEn).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3 rtl:space-x-reverse">
                    <div className="w-5 h-5 bg-gradient-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'btn-primary text-white'
                    : 'btn-secondary'
                }`}
              >
                {t('startNow')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;