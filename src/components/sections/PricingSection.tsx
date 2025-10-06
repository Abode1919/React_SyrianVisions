import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { ArrowRight } from "lucide-react";
import handImg from '../../pictures/hand.jpg';
const PricingSection: React.FC = () => {
  const { isRTL } = useLanguage();

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = "/#contact";
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Tekst */}
          <div className={isRTL ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              {isRTL ? "لننجز ما تحتاجه حقًّا" : "Let’s build what you actually need"}
            </h2>

            <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed">
              {isRTL
                ? "لا نعتمد باقات جامدة. نجلس معك لفهم أهدافك بدقّة، ثم نتفق على سعرٍ عادل وفق نطاق المشروع الفعلي. وإذا تغيّرت احتياجاتك، نُحدّث العرض ببساطة وشفافية."
                : "No rigid packages. We sit down with you, understand your goals, and agree on a fair price based on the real scope. If your needs change, we adjust—simple as that."}
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              {isRTL ? "ماذا نقدّم؟" : "What do we offer?"}
            </h2>

            <ul className="text-text-muted space-y-3 mb-10 list-none">
              <li>• {isRTL ? "مواقع سريعة وحديثة، مُهيّأة لمحركات البحث واستيعاب الزيارات." : "Fast, modern websites, ready for SEO and real traffic"}</li>
              <li>• {isRTL ? "تصميم نظيف ومخصّص مع تكاملات عملية تلائم أدواتك." : "Clean, custom design with practical integrations that fit your tools"}</li>
              <li>• {isRTL ? "دعمٌ بعد الإطلاق وخطط صيانة مرنة (اختيارية)." : "Post-launch support and flexible, optional maintenance plans"}</li>
              <li>• {isRTL ? "أنظمة نقاط بيع (POS) لإدارة الطلبات والطاولات والفواتير والتقارير." : "POS systems to handle orders, tables, receipts, and reports"}</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="btn-primary px-8 py-4 rounded-full text-white font-semibold flex items-center justify-center gap-2"
              >
                {isRTL ? "ابدأ الآن" : "Start a project"}
                <ArrowRight className={`w-5 h-5 ${isRTL ? "rotate-180" : ""}`} />
              </button>

              <a
                href="mailto:support@syrianvisions.com"
                className="btn-secondary px-8 py-4 rounded-full font-semibold text-center"
              >
                {isRTL ? "اسأل عن التسعير" : "Ask about pricing"}
              </a>
            </div>
          </div>

          {/* Bilete */}
          <div className={isRTL ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
            <figure className="rounded-2xl overflow-hidden shadow-heavy border border-white/10">
              <picture>
                <source srcSet={handImg} type="image/jpg" />
                <img
                  src={handImg}
                  alt={isRTL ? "عرض واجهة موقع حديث" : "Showcase of a modern website UI"}
                  loading="lazy"
                  className="w-full h-[340px] md:h-[420px] object-cover"
                  width={1200}
                  height={800}
                />
              </picture>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
