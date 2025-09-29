import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FAQ {
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
}

const FaqPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'ما هي مدة تطوير الموقع؟',
      questionEn: 'How long does website development take?',
      answer: 'تختلف مدة التطوير حسب تعقيد الموقع، لكن عادة ما تستغرق المواقع البسيطة من أسبوعين إلى شهر، والمواقع المعقدة من شهر إلى ثلاثة أشهر.',
      answerEn: 'Development time varies based on website complexity, but simple websites usually take 2 weeks to 1 month, while complex websites take 1 to 3 months.'
    },
    {
      question: 'هل تقدمون خدمات الصيانة؟',
      questionEn: 'Do you provide maintenance services?',
      answer: 'نعم، نقدم خدمات الصيانة والدعم الفني المستمر لضمان عمل موقعك بأفضل أداء. تشمل الصيانة التحديثات الأمنية والنسخ الاحتياطية.',
      answerEn: 'Yes, we provide maintenance and ongoing technical support services to ensure your website performs optimally. Maintenance includes security updates and backups.'
    },
    {
      question: 'ما هي طرق الدفع المتاحة؟',
      questionEn: 'What payment methods are available?',
      answer: 'نقبل الدفع عبر التحويل البنكي، PayPal، والعملات المشفرة. كما نوفر خطط دفع مرنة للمشاريع الكبيرة.',
      answerEn: 'We accept payment via bank transfer, PayPal, and cryptocurrencies. We also offer flexible payment plans for large projects.'
    },
    {
      question: 'هل المواقع متجاوبة مع الأجهزة المحمولة؟',
      questionEn: 'Are the websites mobile-responsive?',
      answer: 'نعم، جميع المواقع التي نطورها متجاوبة ومحسّنة للعمل على جميع الأجهزة بما في ذلك الهواتف الذكية والأجهزة اللوحية.',
      answerEn: 'Yes, all websites we develop are responsive and optimized to work on all devices including smartphones and tablets.'
    },
    {
      question: 'هل تقدمون تدريب على إدارة الموقع؟',
      questionEn: 'Do you provide training on website management?',
      answer: 'نعم، نقدم تدريباً شاملاً على كيفية إدارة وتحديث محتوى الموقع، بالإضافة إلى دليل استخدام مفصل.',
      answerEn: 'Yes, we provide comprehensive training on how to manage and update website content, along with a detailed user guide.'
    },
    {
      question: 'ما هو الدعم الفني المتاح بعد التسليم؟',
      questionEn: 'What technical support is available after delivery?',
      answer: 'نقدم دعماً فنياً مجانياً لمدة 3 أشهر بعد التسليم، ثم خدمات دعم مدفوعة حسب الحاجة أو عبر عقود صيانة سنوية.',
      answerEn: 'We provide free technical support for 3 months after delivery, then paid support services as needed or through annual maintenance contracts.'
    },
    {
      question: 'هل يمكنني طلب تعديلات بعد التسليم؟',
      questionEn: 'Can I request modifications after delivery?',
      answer: 'نعم، يمكنك طلب تعديلات. التعديلات البسيطة مجانية خلال فترة الضمان، أما التعديلات الكبيرة فتحتاج إلى تقييم منفصل.',
      answerEn: 'Yes, you can request modifications. Simple modifications are free during the warranty period, while major modifications require separate assessment.'
    },
    {
      question: 'هل تقدمون خدمات تحسين محركات البحث؟',
      questionEn: 'Do you provide SEO services?',
      answer: 'نعم، نقدم خدمات تحسين محركات البحث (SEO) الأساسية مع كل موقع، وخدمات SEO متقدمة كخدمة منفصلة.',
      answerEn: 'Yes, we provide basic SEO services with every website, and advanced SEO services as a separate service.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('faqTitle')}
          </h1>
          <p className="text-xl text-white/90">
            {t('faqSubtitle')}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 text-left rtl:text-right flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4 rtl:pl-4">
                    {isRTL ? faq.question : faq.questionEn}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-accent-color" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-text-muted" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-border-color pt-4">
                      <p className="text-text-muted leading-relaxed">
                        {isRTL ? faq.answer : faq.answerEn}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                {isRTL ? 'لم تجد إجابة لسؤالك؟' : "Didn't find an answer to your question?"}
              </h2>
              <p className="text-text-muted mb-6">
                {isRTL 
                  ? 'تواصل معنا مباشرة وسنجيب على جميع استفساراتك'
                  : 'Contact us directly and we will answer all your inquiries'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@syrianvisions.com"
                  className="btn-primary px-6 py-3 rounded-full text-white font-semibold hover:transform hover:-translate-y-1 transition-all"
                >
                  {isRTL ? 'راسلنا عبر الإيميل' : 'Email Us'}
                </a>
                <a
                  href="tel:+963xxxxxxxxx"
                  className="btn-secondary px-6 py-3 rounded-full font-semibold hover:transform hover:-translate-y-1 transition-all"
                >
                  {isRTL ? 'اتصل بنا' : 'Call Us'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;