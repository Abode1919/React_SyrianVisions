import React from 'react';
import { Check, Zap, Shield, Heart, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const SplitSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const benefits = [
  {
    icon: Zap,                 // Fast Execution
    title: 'تنفيذ سريع',
    titleEn: 'Fast Execution',
    desc: 'ننجز مشاريعك في الوقت المحدد مع أداء عالي.',
    descEn: 'We deliver on time with high performance.'
  },
  {
    icon: ShieldCheck,                   // High Quality
    title: 'جودة عالية',
    titleEn: 'High Quality',
    desc: 'نستخدم أحدث التقنيات لنقدم نتائج مميزة.',
    descEn: 'We use the latest tech to deliver outstanding results.'
  },
  {
    icon: Heart,                         // Continuous Support
    title: 'دعم مستمر',
    titleEn: 'Continuous Support',
    desc: 'نرافقك بعد الإطلاق بدعم وتوجيه مستمر.',
    descEn: 'We stay with you after launch with ongoing support.'
  }
];

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`${isRTL ? 'lg:order-1' : 'lg:order-1'} animate-fadeInUp`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {isRTL ? 'لماذا تختار SyrianVisions؟' : 'Why Choose SyrianVisions?'}
            </h2>
            
            <p className="text-text-muted text-lg mb-8">
              {isRTL 
                ? 'نحن نركز على تقديم أفضل الحلول الرقمية التي تناسب السوق العربي وتحقق أهدافك التجارية بكفاءة عالية.'
                : 'We focus on delivering the best digital solutions that suit the Arabic market and achieve your business goals efficiently.'
              }
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {isRTL ? benefit.title : benefit.titleEn}
                      </h3>
                      <p className="text-text-muted">
                        {isRTL ? benefit.desc : benefit.descEn}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Illustration */}
          <div className={`${isRTL ? 'lg:order-2' : 'lg:order-2'} animate-fadeInUp`}>
            <div className="relative">
              <div className="glass-card rounded-2xl p-8 shadow-heavy">
                <div className="w-full h-64 bg-gradient-to-br from-accent-color/20 to-transparent rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Check className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {isRTL ? 'جودة مضمونة' : 'Quality Guaranteed'}
                    </h3>
                    <p className="text-text-muted">
                      {isRTL ? '100% رضا العملاء' : '100% Customer Satisfaction'}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-color rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-accent rounded-full opacity-40 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitSection;