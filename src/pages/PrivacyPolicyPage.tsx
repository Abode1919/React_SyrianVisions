import React from 'react';
import { Shield, Eye, Lock, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import Seo from '../components/Seo';

const PrivacyPolicyPage: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const lang = isRTL ? 'ar' : 'en';
  const dir = isRTL ? 'rtl' : 'ltr';

  const title = isRTL
    ? 'سياسة الخصوصية – Syrian Visions'
    : 'Privacy Policy – Syrian Visions';

  const desc = isRTL
    ? 'تعرف على كيفية جمعنا واستخدامنا وحمايتنا لبياناتك الشخصية عند استخدامك لموقعنا وخدماتنا.'
    : 'Learn how we collect, use, and protect your personal data when you use our website and services.';

  const sections = [
    {
      icon: FileText,
      title: 'جمع المعلومات',
      titleEn: 'Information Collection',
      content:
        'نقوم بجمع المعلومات التي تقدمها لنا مباشرة عند ملء النماذج على موقعنا، مثل الاسم والبريد الإلكتروني ورقم الهاتف. كما نجمع معلومات تقنية مثل عنوان IP ونوع المتصفح لتحسين خدماتنا.',
      contentEn:
        'We collect information you provide directly when filling forms on our site (name, email, phone). We also collect technical data like IP address and browser type to improve our services.'
    },
    {
      icon: Eye,
      title: 'استخدام المعلومات',
      titleEn: 'Use of Information',
      content:
        'نستخدم المعلومات التي نجمعها لتقديم خدماتنا وتحسينها، والتواصل معك بشأن مشاريعك، وإرسال تحديثات مهمة. لا نبيع أو نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك.',
      contentEn:
        'We use collected information to deliver and improve services, communicate about your projects, and send important updates. We do not sell or share your personal data with third parties without consent.'
    },
    {
      icon: Lock,
      title: 'حماية البيانات',
      titleEn: 'Data Protection',
      content:
        'نتخذ إجراءات أمنية متقدمة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الكشف أو التدمير. نستخدم تشفير SSL ونحدث أنظمتنا الأمنية بانتظام.',
      contentEn:
        'We employ security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We use SSL encryption and regularly update our security systems.'
    },
    {
      icon: Shield,
      title: 'حقوقك',
      titleEn: 'Your Rights',
      content:
        'لديك الحق في الوصول إلى معلوماتك الشخصية وتصحيحها أو حذفها. يمكنك أيضاً طلب نسخة من بياناتك أو منع معالجتها. للقيام بذلك، يرجى التواصل معنا عبر البريد الإلكتروني.',
      contentEn:
        'You have the right to access, correct, or delete your personal data. You can also request a copy or restrict processing. To exercise these rights, contact us via email.'
    }
  ];

  return (
    <div className="pt-20">
      {/* språk/retning */}
      <Helmet htmlAttributes={{ lang, dir }} />
      {/* SEO for /privacy */}
      <Seo title={title} description={desc} path="/privacy" />

      {/* Hero Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('privacyTitle')}
          </h1>
          <p className="text-xl text-white/90">{t('privacySubtitle')}</p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="glass-card rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              {isRTL ? 'مقدمة' : 'Introduction'}
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-text-muted leading-relaxed text-lg">
                {isRTL
                  ? 'في SyrianVisions، نحن ملتزمون بحماية خصوصيتك والحفاظ على أمان معلوماتك الشخصية. تشرح هذه السياسة كيف نجمع ونستخدم ونحمي المعلومات التي تقدمها لنا عند استخدام موقعنا أو خدماتنا.'
                  : 'At SyrianVisions, we are committed to protecting your privacy and keeping your personal information secure. This policy explains how we collect, use, and protect the information you provide when using our website or services.'}
              </p>
              <p className="text-text-muted leading-relaxed">
                {isRTL
                  ? 'آخر تحديث: يناير 2025. نحتفظ بالحق في تحديث هذه السياسة من وقت لآخر.'
                  : 'Last updated: January 2025. We reserve the right to update this policy from time to time.'}
              </p>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="glass-card rounded-xl p-8">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4">
                        {isRTL ? section.title : section.titleEn}
                      </h3>
                      <p className="text-text-muted leading-relaxed">
                        {isRTL ? section.content : section.contentEn}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Information */}
          <div className="mt-16">
            <div className="glass-card rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-6">
                {isRTL ? 'تواصل معنا' : 'Contact Us'}
              </h2>
              <p className="text-text-muted mb-6 leading-relaxed">
                {isRTL
                  ? 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو كيفية تعاملنا مع معلوماتك الشخصية، يرجى عدم التردد في التواصل معنا.'
                  : 'If you have any questions about this privacy policy or how we handle your personal information, please don’t hesitate to contact us.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@syrianvisions.com"
                  className="btn-primary px-6 py-3 rounded-full text-white font-semibold hover:transform hover:-translate-y-1 transition-all"
                >
                  support@syrianvisions.com
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-border-color">
                <p className="text-sm text-text-muted">
                  {isRTL
                    ? 'SyrianVisions -  تطوير مواقع الويب'
                    : 'SyrianVisions - Web Development Studio'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
