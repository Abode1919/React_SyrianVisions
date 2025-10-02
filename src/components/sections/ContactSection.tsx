import React, { useState } from 'react';
import { Mail, Facebook, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const { t, isRTL, language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = isRTL ? 'الاسم مطلوب' : 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = isRTL ? 'البريد الإلكتروني مطلوب' : 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = isRTL ? 'البريد الإلكتروني غير صحيح' : 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = isRTL ? 'الرسالة مطلوبة' : 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = isRTL ? 'الرسالة قصيرة جداً' : 'Message is too short';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_language', language);
      formDataToSend.append('_gotcha', ''); // Honeypot

      // Replace with your actual Formspree endpoint
      const response = await fetch('https://formspree.io/f/xpwyrryg', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: isRTL ? 'البريد الإلكتروني' : 'Email',
      value: 'support@syrianvisions.com',
      link: 'mailto:support@syrianvisions.com'
    },
    {
      icon: Facebook,
      title: isRTL ? 'فيسبوك' : 'Facebook',
      value: 'Syrian Visions',
      link: 'https://www.facebook.com/profile.php?id=61581091092517'
    },
    {
      icon: MapPin,
      title: isRTL ? 'الموقع' : 'Location',
      value: isRTL ? 'دمشق، سوريا' : 'Damascus, Syria',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('contactTitle')}
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                {isRTL ? 'معلومات التواصل' : 'Contact Information'}
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start space-x-4 rtl:space-x-reverse group hover:text-accent-color transition-colors"
                    >
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-accent-color transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-text-muted group-hover:text-accent-color transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">
                {isRTL ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
              </h4>
              <ul className="space-y-3 text-text-muted">
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-accent-color rounded-full"></div>
                  <span>{isRTL ? 'خبرة أكثر من 3 سنوات' : '3+ Years of Experience'}</span>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-accent-color rounded-full"></div>
                  <span>{isRTL ? 'دعم فني مستمر' : 'Continuous Technical Support'}</span>
                </li>
                <li className="flex items-center space-x-2 rtl:space-x-reverse">
                  <div className="w-2 h-2 bg-accent-color rounded-full"></div>
                  <span>{isRTL ? 'أسعار تنافسية' : 'Competitive Prices'}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  {t('name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-text-muted ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  placeholder={isRTL ? 'اسمك الكامل' : 'Your full name'}
                />
                {errors.name && <div className="form-error">{errors.name}</div>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  {t('email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-text-muted ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder={isRTL ? 'بريدك الإلكتروني' : 'your@email.com'}
                />
                {errors.email && <div className="form-error">{errors.email}</div>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  {t('message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg form-input text-white placeholder-text-muted resize-none ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                  placeholder={isRTL ? 'أخبرنا عن مشروعك...' : 'Tell us about your project...'}
                />
                {errors.message && <div className="form-error">{errors.message}</div>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 px-6 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 rtl:space-x-reverse disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{t('sendMessage')}</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center">
                  {isRTL ? 'تم إرسال رسالتك بنجاح!' : 'Message sent successfully!'}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center">
                  {isRTL ? 'حدث خطأ في إرسال الرسالة' : 'Error sending message'}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;