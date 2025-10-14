import React from 'react';
import { ArrowRight, Users, Award, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Reveal from '../components/anim/Reveal';
import moussaImg from '../pictures/moussa.jpeg';
import abdoImg from '../pictures/abdoa.jpg';
import ibrahimImg from '../pictures/ibrahim.jpeg';
import { Helmet } from 'react-helmet-async';
import Seo from '../components/Seo';

const AboutUsPage: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const lang = isRTL ? 'ar' : 'en';
  const dir = isRTL ? 'rtl' : 'ltr';

  const title = isRTL ? 'من نحن – Syrian Visions' : 'About – Syrian Visions';
  const desc = isRTL
    ? 'تعرّف على فريقنا والخبرة التي نقدّمها في التصميم والتطوير.'
    : 'Learn about our team and the experience we bring in design & development.';

  const team = [
    { name: 'موسى الرحمون', nameEn: 'Moussa Elrahmoun', role: 'مطور واجهات أمامية', roleEn: 'Frontend Developer', image: moussaImg, skills: ['React','TypeScript','CSS'] },
    { name: 'عبدو غصن', nameEn: 'Abdo Ghosn', role: 'مطور خلفية', roleEn: 'Backend Developer', image: abdoImg, skills: ['Node.js','Python','Database'] },
    { name: 'إبراهيم الرحمون ', nameEn: 'Ibrahim Elrahmoun', role: 'مصمم UX/UI', roleEn: 'UX/UI Designer', image: ibrahimImg, skills: ['Figma','Adobe XD','Sketch'] },
  ];

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.location.href = '/#contact';
  };

  return (
    <Reveal>
      {/* Språk/retning på sida */}
      <Helmet htmlAttributes={{ lang, dir }} />

      {/* SEO for /about */}
      <Seo title={title} description={desc} path="/about" />

      <div className="pt-20">
        {/* Hero */}
        <section className="gradient-primary pt-20 min-h-[calc(100vh-5rem)] flex items-center">
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {t('aboutTitle')}
              </h1>

              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
                {isRTL
                  ? 'نحن فريق صغير ومركّز نبني مواقع حديثة فعّالة — سريعة، أنيقة، وسهلة الإدارة.'
                  : 'We’re a small, focused team building modern websites that actually deliver — fast, polished, and easy to run.'}
              </p>

              {/* CTAer */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="/#contact" className="btn-primary px-7 py-4 rounded-full text-white font-semibold">
                  {isRTL ? 'تواصل معنا' : 'Start a conversation'}
                </a>
                <a href="/work" className="btn-secondary px-7 py-4 rounded-full font-semibold">
                  {isRTL ? 'شاهد أعمالنا' : 'See our work'}
                </a>
              </div>

              {/* Tillitsrad */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/80 text-sm md:text-base">
                <span> {isRTL ? 'تسليم سريع' : 'Fast delivery'}</span>
                <span className="opacity-40">•</span>
                <span> {isRTL ? 'تصميم مخصّص' : 'Custom design'}</span>
                <span className="opacity-40">•</span>
                <span> {isRTL ? 'أمان ودعم' : 'Secure & supported'}</span>
              </div>

              {/* Team-collage (valgfritt) */}
              <div className="mt-8 flex items-center justify-center -space-x-3 rtl:space-x-reverse">
                {[moussaImg, abdoImg, ibrahimImg].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="team"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full ring-2 ring-white/20 object-cover"
                    loading="lazy"
                  />
                ))}
                <span className="ms-4 text-white/70 text-sm">
                  {isRTL ? 'فريق ودود جاهز لمساعدتك' : 'Friendly team ready to help'}
                </span>
              </div>

              {/* Scroll-hint */}
              <div className="mt-10 opacity-70">
                <a href="#mission" className="inline-flex flex-col items-center text-white/80 hover:text-white transition">
                  <span className="text-sm">{isRTL ? 'تابع للأسفل' : 'Scroll down'}</span>
                  <svg className="w-5 h-5 mt-1 animate-bounce" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* Mission */}
        <section id="mission" className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">{t('ourMission')}</h2>
                </div>

                <div className="space-y-4 text-text-muted text-lg">
                  <p>
                    {isRTL
                      ? 'نحن فريق من المطورين والمصممين المتخصصين في إنشاء حلول رقمية مبتكرة للأعمال العربية...'
                      : 'We are a team of developers and designers creating innovative digital solutions for Arabic businesses...'}
                  </p>
                  <p>
                    {isRTL
                      ? 'نؤمن بأن التكنولوجيا يجب أن تكون في خدمة الإنسان...'
                      : 'We believe technology should serve people, so we focus on user-friendly sites and apps.'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">40+</div>
                  <div className="text-text-muted">{isRTL ? 'مشروع منجز' : 'Completed Projects'}</div>
                </div>
                <div className="glass-card rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">30+</div>
                  <div className="text-text-muted">{isRTL ? 'عميل راضي' : 'Happy Clients'}</div>
                </div>
                <div className="glass-card rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">3+</div>
                  <div className="text-text-muted">{isRTL ? 'سنوات خبرة' : 'Years Experience'}</div>
                </div>
                <div className="glass-card rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-text-muted">{isRTL ? 'دعم فني' : 'Technical Support'}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse mb-6">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">{t('ourTeam')}</h2>
              </div>
              <p className="text-xl text-text-muted max-w-3xl mx-auto">
                {isRTL ? 'فريق من المحترفين...' : 'A team of professionals across design and development'}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((m, i) => (
                <div key={i} className="glass-card rounded-xl p-6 text-center group hover:-translate-y-2 transition-all">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <img
                      src={m.image}
                      alt={isRTL ? m.name : m.nameEn}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{isRTL ? m.name : m.nameEn}</h3>
                  <p className="text-accent-color font-medium mb-4">{isRTL ? m.role : m.roleEn}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {m.skills.map((s, si) => (
                      <span key={si} className="px-3 py-1 bg-primary rounded-full text-sm text-text-muted">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card rounded-2xl p-12">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">
                {isRTL ? 'جاهز لبدء مشروعك؟' : 'Ready to Start Your Project?'}
              </h2>
              <p className="text-xl text-text-muted mb-8">
                {isRTL ? 'دعنا نساعدك...' : 'Let us help you achieve your digital vision.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={scrollToContact}
                  className="btn-primary px-8 py-4 rounded-full text-white font-semibold flex items-center justify-center space-x-3 rtl:space-x-reverse"
                >
                  <span>{t('contact')}</span>
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
                <Link
                  to="/work"
                  className="btn-secondary px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-3 rtl:space-x-reverse"
                >
                  <span>{t('work')}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Reveal>
  );
};

export default AboutUsPage;
