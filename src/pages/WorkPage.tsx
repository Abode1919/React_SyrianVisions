import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Workflow, Cpu, Trophy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Reveal from '../components/anim/Reveal';
import { Helmet } from 'react-helmet-async';
import Seo from '../components/Seo';

/** ---------- Lightweight Lightbox (inline) ---------- */
type GalleryImage = { src: string; alt?: string };
const LightboxGallery: React.FC<{
  images: GalleryImage[];
  isOpen: boolean;
  onClose: () => void;
  startIndex?: number;
  isRTL?: boolean;
}> = ({ images, isOpen, onClose, startIndex = 0, isRTL }) => {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => { setIndex(startIndex); }, [startIndex, isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') (isRTL ? prev() : next());
      if (e.key === 'ArrowLeft') (isRTL ? next() : prev());
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, index, isRTL]);

  const next = () => setIndex(i => (i + 1) % images.length);
  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col"
      role="dialog" aria-modal="true"
      onClick={onClose}
    >
      {/* top bar */}
      <div className="flex items-center justify-between p-3 text-white">
        <div className="text-sm opacity-80">{index + 1} / {images.length}</div>
        <button onClick={onClose} className="px-3 py-1 rounded bg-white/10 hover:bg-white/20">×</button>
      </div>

      {/* main image */}
      <div className="flex-1 flex items-center justify-center px-3" onClick={e => e.stopPropagation()}>
        <button onClick={isRTL ? next : prev} className="px-3 py-2 text-white/80 hover:text-white select-none">‹</button>
        <img
          src={images[index].src}
          alt={images[index].alt || `image-${index + 1}`}
          className="max-h-[72vh] max-w-[92vw] object-contain rounded-lg shadow-xl border border-white/10"
          loading="eager"
        />
        <button onClick={isRTL ? prev : next} className="px-3 py-2 text-white/80 hover:text-white select-none">›</button>
      </div>

      {/* thumbs */}
      <div className="p-3 overflow-x-auto bg-black/50" onClick={e => e.stopPropagation()}>
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`border ${i === index ? 'border-white' : 'border-white/20'} rounded overflow-hidden`}
            >
              <img src={img.src} alt={img.alt || `thumb-${i + 1}`} className="h-16 w-24 object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
/** --------------------------------------------------- */

const WorkPage: React.FC = () => {
  const { isRTL } = useLanguage();

  const lang = isRTL ? 'ar' : 'en';
  const dir = isRTL ? 'rtl' : 'ltr';

  const title = isRTL ? 'أعمالنا – Syrian Visions' : 'Our Work – Syrian Visions';
  const desc = isRTL
    ? 'نبني ما تحتاجه فعلاً: مواقع حديثة، تكاملات عملية، دعم مرن—وتضمين أنظمة نقاط بيع (POS) للمطاعم. تسعير عادل حسب نطاق العمل.'
    : 'We build what you actually need: modern sites, practical integrations, flexible support—and POS systems for restaurants. Fair, scope-based pricing.';

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.location.href = '/#contact';
  };

  /** ------- Galleries (5 images each; add your files in public/pictures/...) ------- */
    const restaurantImages: GalleryImage[] = [
    { src: '/Resturant/rest1.png',  alt: isRTL ? 'واجهة مطعم' : 'Restaurant UI' },
    { src: '/Resturant/meny.png',   alt: isRTL ? 'قائمة طعام' : 'Menu page' },
    { src: '/Resturant/Gallery.png',alt: isRTL ? 'حجز طاولات' : 'Table booking' },
    { src: '/Resturant/CTA.png',    alt: isRTL ? 'فاتورة رقمية' : 'Digital receipt' },
  ];

  const hotelImages: GalleryImage[] = [
    { src: 'Hotell/HotellBG.png', alt: isRTL ? 'غرف الفندق' : 'Hotel rooms gallery' },
    { src: 'Hotell/HotellSek.png', alt: isRTL ? 'محرك الحجز' : 'Booking engine' },
    { src: 'Hotell/HotellSek2.png', alt: isRTL ? 'عروض وباقات' : 'Offers & packages' },
    { src: 'Hotell/HotellSek3.png', alt: isRTL ? 'مراجعات وموقع' : 'Reviews & map' },
    { src: 'Hotell/HotellCTA.png', alt: isRTL ? 'صفحة رئيسية' : 'Homepage layout' },
  ];

  const salonImages: GalleryImage[] = [
    { src: '/Barber/BarberBG.png', alt: isRTL ? 'حجز مواعيد' : 'Appointment booking' },
    { src: '/Barber/BarberSek.png', alt: isRTL ? 'قائمة الخدمات' : 'Services & pricing' },
    { src: '/Barber/BarberSek2.png', alt: isRTL ? 'قبل/بعد' : 'Before/after gallery' },
    { src: '/Barber/BarberSek4.png', alt: isRTL ? 'التواصل واتساب' : 'WhatsApp chat' },
    { src: '/Barber/BarberCTA.png', alt: isRTL ? 'الصفحة الرئيسية' : 'Landing page' },
  ];

  const [openR, setOpenR] = useState(false);
  const [openH, setOpenH] = useState(false);
  const [openS, setOpenS] = useState(false);

  return (
    <Reveal>
      <Helmet htmlAttributes={{ lang, dir }} />
      <Seo title={title} description={desc} path="/work" />

      <div className="pt-20">
        {/* Hero */}
        <section className="gradient-primary pt-20 min-h-[calc(100vh-5rem)] flex items-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {isRTL ? 'ماذا نبني' : 'What we build'}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {isRTL
                ? 'قصتك وهويتك وموقعك—مصمّمون بعناية.'
                : 'Your story, your brand, your site—crafted with care.'}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="btn-primary px-8 py-4 rounded-full text-white font-semibold flex items-center justify-center gap-2"
              >
                {isRTL ? 'ابدأ محادثة' : 'Start a conversation'}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </button>
              <a
                href="mailto:support@syrianvisions.com"
                className="btn-secondary px-8 py-4 rounded-full font-semibold"
              >
                {isRTL ? 'عرض سعر مخصّص' : 'Get a custom quote'}
              </a>
            </div>
          </div>
        </section>

        {/* Industries / Bransjer vi hjelper */}
        <section id="restaurants" className="py-20 bg-primary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              {isRTL ? 'قطاعات نخدمها' : 'Industries we serve'}
            </h2>

            {/* Restaurant (text left, image right) */}
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
              <div className={isRTL ? 'order-2 lg:order-1' : 'order-1'}>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {isRTL ? 'مطاعم' : 'Restaurants'}
                </h3>
                <p className="text-text-muted text-lg leading-relaxed">
                  {isRTL
                    ? 'نُنشئ مواقع أنيقة وعملية للمطاعم: قائمة طعام جذّابة، حجز طاولات، خرائط وجداول، وربط مع نظام نقاط البيع (POS) للطلبات والفواتير والتقارير—كل ذلك بسرعة وأداء عالٍ.'
                    : 'We craft beautiful, practical restaurant websites: gorgeous menus, table booking, maps & schedules, and POS integrations for orders, receipts, and reports—fast and reliable.'}
                </p>
                <div className="mt-6 flex gap-4">
                  <button onClick={() => setOpenR(true)} className="btn-secondary px-6 py-3 rounded-full font-semibold">
                    {isRTL ? 'شاهد الأمثلة' : 'View examples'}
                  </button>
                </div>
              </div>
              <div className={isRTL ? 'order-1 lg:order-2' : 'order-2'}>
                <figure className="rounded-2xl overflow-hidden shadow-heavy border border-white/10">
                  <button onClick={() => setOpenR(true)} className="block w-full text-left focus:outline-none">
                    <img
                      src="/Resturant/rest1.png"
                      alt={isRTL ? 'موقع مطعم' : 'Restaurant website'}
                      loading="lazy"
                      className="w-full h-[340px] md:h-[420px] object-cover"
                      width={1600}
                      height={1067}
                    />
                  </button>
                </figure>
              </div>
            </div>

            {/* Hotel (image left, text right) */}
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
              <div className={isRTL ? 'order-1' : 'order-1 lg:order-1'}>
                <figure className="rounded-2xl overflow-hidden shadow-heavy border border-white/10">
                  <button onClick={() => setOpenH(true)} className="block w-full text-left focus:outline-none">
                    <img
                      src="/Hotell/HotellBG.png"
                      alt={isRTL ? 'موقع فندق' : 'Hotel website'}
                      loading="lazy"
                      className="w-full h-[340px] md:h-[420px] object-cover"
                      width={1600}
                      height={1067}
                    />
                  </button>
                </figure>
              </div>
              <div className={isRTL ? 'order-2' : 'order-2 lg:order-2'}>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {isRTL ? 'فنادق' : 'Hotels'}
                </h3>
                <p className="text-text-muted text-lg leading-relaxed">
                  {isRTL
                    ? 'نُصمّم مواقع فنادق أنيقة وسهلة الاستخدام مع كل ما يحتاجه الفندق: معرض غرف، محرك حجز، باقات وعروض، خرائط ومراجعات—متوافقة مع الجوال وسريعة التحميل.'
                    : 'We design elegant, easy-to-use hotel websites with everything you need: room galleries, booking engine, packages & offers, maps and reviews—mobile-friendly and fast.'}
                </p>
                <div className="mt-6 flex gap-4">
                  <button onClick={() => setOpenH(true)} className="btn-secondary px-6 py-3 rounded-full font-semibold">
                    {isRTL ? 'شاهد الأمثلة' : 'View examples'}
                  </button>
                </div>
              </div>
            </div>

            {/* Salon (text left, image right) */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className={isRTL ? 'order-2 lg:order-1' : 'order-1'}>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {isRTL ? 'صالونات الحلاقة والتجميل' : 'Hair Salons & Barbers'}
                </h3>
                <p className="text-text-muted text-lg leading-relaxed">
                  {isRTL
                    ? 'ننشئ مواقع لصالونات الحلاقة والتجميل مع نظام حجز مواعيد بسيط، عرض قائمة الخدمات والأسعار، صور قبل/بعد، وربط واتساب للتواصل المباشر.'
                    : 'We build salon websites with simple appointment booking, clear service lists & pricing, before/after galleries, and WhatsApp handoff for quick chats.'}
                </p>
                <div className="mt-6 flex gap-4">
                  <button onClick={() => setOpenS(true)} className="btn-secondary px-6 py-3 rounded-full font-semibold">
                    {isRTL ? 'شاهد الأمثلة' : 'View examples'}
                  </button>
                </div>
              </div>
              <div className={isRTL ? 'order-1 lg:order-2' : 'order-2'}>
                <figure className="rounded-2xl overflow-hidden shadow-heavy border border-white/10">
                  <button onClick={() => setOpenS(true)} className="block w-full text-left focus:outline-none">
                    <img
                      src="/Barber/BarberBG.png"
                      alt={isRTL ? 'موقع صالون' : 'Salon website'}
                      loading="lazy"
                      className="w-full h-[340px] md:h-[420px] object-cover"
                      width={1600}
                      height={1067}
                    />
                  </button>
                </figure>
              </div>
            </div>
          </div>
        </section>


        {/* Process */}
        <section className="py-20 bg-secondary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Workflow className="w-6 h-6 text-accent-color" />
              {isRTL ? 'العملية' : 'Process'}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  t: isRTL ? 'استكشاف' : 'Discover',
                  p: isRTL ? 'نستمع، نحدّد الهدف، ونضع نطاقًا واضحًا.' : 'We listen, define goals, and agree on a clear scope.',
                },
                {
                  t: isRTL ? 'تصميم + تطوير' : 'Design + Build',
                  p: isRTL ? 'تصميم نظيف وتجربة سلسة، مع تطوير سريع وأساسيات SEO.' : 'Clean design and smooth UX, with fast dev and SEO essentials.',
                },
                {
                  t: isRTL ? 'إطلاق + دعم' : 'Launch + Support',
                  p: isRTL ? 'إطلاق منظم، ثم دعم فعلي وصيانة مرنة عند الحاجة.' : 'Structured launch, then real support and optional maintenance.',
                },
              ].map((step, i) => (
                <div key={i} className="glass-card rounded-xl p-6">
                  <div className="text-accent-color font-semibold mb-2">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.t}</h3>
                  <p className="text-text-muted">{step.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Capabilities */}
        <section className="py-20 bg-primary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">
              {isRTL ? 'قدراتنا' : 'Capabilities'}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                isRTL ? 'مواقع سريعة وحديثة، متجاوبة وجاهزة للـSEO.' : 'Fast, modern, responsive websites—SEO-ready.',
                isRTL ? 'تصميم نظيف ومخصّص متوافق مع الهوية.' : 'Clean, custom design aligned with your brand.',
                isRTL ? 'تكاملات عملية (دفع، حجز، CRM، واتساب...).' : 'Practical integrations (payments, booking, CRM, WhatsApp, etc.).',
                isRTL ? 'نظام نقاط بيع للمطاعم (POS): طلبات، طاولات، فواتير، تقارير.' : 'Restaurant POS: orders, tables, receipts, reports.',
                isRTL ? 'أساسيات SEO: عناوين/أوصاف، خريطة موقع، روابط نظيفة.' : 'SEO essentials: titles/descriptions, sitemap, clean URLs.',
                isRTL ? 'دعم بعد الإطلاق وخطط صيانة مرنة (اختيارية).' : 'Post-launch support and flexible, optional maintenance.',
              ].map((text, i) => (
                <div key={i} className="glass-card rounded-xl p-6 flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-accent-color mt-1 flex-shrink-0" />
                  <p className="text-text-muted text-lg">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        

  
        {/* Results / Promises */}
        <section className="py-20 bg-secondary">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-accent-color" />
              {isRTL ? 'نتائج نلتزم بها' : 'Results we aim for'}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                isRTL ? 'مؤشرات الويب الأساسية: هدفنا الافتراضي هو مستوى "جيد".' : 'Core Web Vitals “Good” as our default target.',
                isRTL ? 'أساسيات SEO: عناوين/أوصاف، خريطة موقع، روابط نظيفة.' : 'SEO essentials: titles/descriptions, sitemap, clean URLs.',
                isRTL ? 'استجابة لتحديثات بسيطة خلال 48–72 ساعة.' : '48–72h turnaround on minor updates.',
              ].map((text, i) => (
                <div key={i} className="glass-card rounded-xl p-6">
                  <p className="text-text-muted text-lg">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {isRTL ? 'جاهز نبدأ؟' : 'Ready to get started?'}
              </h2>
              <p className="text-xl text-text-muted mb-8">
                {isRTL
                  ? 'مكالمة تحديد نطاق مجانية وبدون التزام.'
                  : 'Free, no-pressure scoping call.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={scrollToContact}
                  className="btn-primary px-8 py-4 rounded-full text-white font-semibold flex items-center justify-center gap-2"
                >
                  {isRTL ? 'تواصل معنا' : 'Start a conversation'}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
                </button>
                <a
                  href="mailto:support@syrianvisions.com"
                  className="btn-secondary px-8 py-4 rounded-full font-semibold"
                >
                  {isRTL ? 'عرض سعر مخصّص' : 'Get a custom quote'}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Lightboxes */}
      <LightboxGallery images={restaurantImages} isOpen={openR} onClose={() => setOpenR(false)} isRTL={isRTL} />
      <LightboxGallery images={hotelImages}      isOpen={openH} onClose={() => setOpenH(false)} isRTL={isRTL} />
      <LightboxGallery images={salonImages}      isOpen={openS} onClose={() => setOpenS(false)} isRTL={isRTL} />
    </Reveal>
  );
};

export default WorkPage;
