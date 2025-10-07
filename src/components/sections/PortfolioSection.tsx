import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import Reveal from '../anim/Reveal';

type Teaser = {
  id: 'restaurants' | 'hotels' | 'barber';
  title: string;
  titleEn: string;
  desc: string;
  descEn: string;
  img: string;      // public/ path
  hash: string;     // target hash on /work
};

const PortfolioSection: React.FC = () => {
  const { isRTL } = useLanguage();

  // Three teaser tiles that point to sections on WorkPage
  const teasers: Teaser[] = [
    {
      id: 'restaurants',
      title: 'مطاعم',
      titleEn: 'Restaurants',
      desc: 'نقدر نعمل لك موقع مشابه — قوائم طعام جميلة، حجز طاولات، وربط مع نظام نقاط بيع (POS).',
      descEn: `We can build something like this — beautiful menus, table booking, and POS integration.`,
      img: '/Resturant/rest1.png',     
      hash: 'restaurants',
    },
    {
      id: 'hotels',
      title: 'فنادق',
      titleEn: 'Hotels',
      desc: 'مواقع سريعة للحجز والعروض وغرف الفندق—تصميم أنيق ومتوافق مع الجوال.',
      descEn: 'Fast hotel sites with booking, offers and room galleries—clean and mobile-friendly.',
      img: '/Hotell/HotellBG.png',
      hash: '#hotels',
    },
    {
      id: 'barber',
      title: 'صالونات الحلاقة',
      titleEn: 'Hair Salons & Barbers',
      desc: 'حجوزات مواعيد سهلة، قائمة خدمات وأسعار، وربط واتساب للتواصل.',
      descEn: 'Easy appointment booking, service lists & pricing, and WhatsApp handoff.',
      img: '/Barber/BarberBG.png',
      hash: '#barber',
    },
  ];

  // with HashRouter on the site, link like "/#/work#restaurants"
  const workHref = (hash: string) => `/#/work${hash}`;

  return (
    <Reveal delay={0.6}>
      <section id="work" className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isRTL ? 'أعمال مشابهة يمكننا تنفيذها' : 'Things we can build for you'}
            </h2>
            <p className="text-xl text-text-muted">
              {isRTL
                ? 'هذا مجرد مثال — نخصص الحل حسب احتياجك.'
                : 'These are just examples — we tailor the build to your needs.'}
            </p>
          </div>

          {/* 3 linked tiles */}
          <div className="grid md:grid-cols-3 gap-8">
            {teasers.map((t) => (
              <a
                key={t.id}
                href={workHref(t.hash)}
                className="group block rounded-2xl overflow-hidden shadow-medium hover:shadow-heavy transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-color"
              >
                <div className="relative h-64">
                  <img
                    src={t.img}
                    alt={isRTL ? t.title : t.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-semibold">
                      {isRTL ? t.title : t.titleEn}
                    </h3>
                    <p className="text-white/80 text-sm mt-1">
                      {isRTL ? t.desc : t.descEn}
                    </p>
                  </div>
                </div>

                <div className="px-5 py-4 bg-secondary/60 border-t border-white/10 flex items-center justify-between">
                  <span className="text-white font-medium">
                    {isRTL ? 'شاهد أمثلة أكثر' : 'See more examples'}
                  </span>
                  <ArrowRight className={`w-5 h-5 text-accent-color ${isRTL ? 'rotate-180' : ''}`} />
                </div>
              </a>
            ))}
          </div>

          {/* CTA under tiles */}
          <div className="text-center mt-10">
            <a href="/Work" className="btn-secondary px-8 py-3 rounded-full font-semibold">
              {isRTL ? 'كل التفاصيل على صفحة أعمالنا' : 'Full details on our Work page'}
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default PortfolioSection;
