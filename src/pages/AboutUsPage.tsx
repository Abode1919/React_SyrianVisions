import React from 'react';
import { ArrowRight, Target, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Reveal from "../components/anim/Reveal"
import moussaImg from '../pictures/moussa.jpeg'
import abdoImg from '../pictures/abdo.jpeg'
import ibrahimImg from '../pictures/ibrahim.jpeg'



const AboutUsPage: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const team = [
    {
      name: 'موسى الرحمون',
      nameEn: 'Moussa Elrahmoun',
      role: 'مطور واجهات أمامية',
      roleEn: 'Frontend Developer',
      image: moussaImg,
      skills: ['React', 'TypeScript', 'CSS']
    }, 
    {
      name: 'عبدو غصن',
      nameEn: 'Abdo Ghosn',
      role: 'مطور خلفية',
      roleEn: 'Backend Developer',
      image: abdoImg,
      skills: ['Node.js', 'Python', 'Database']
    },
    {
      name: 'إبراهيم الرحمون ',
      nameEn: 'Ibrahim Elrahmoun',
      role: 'مصمم UX/UI',
      roleEn: 'UX/UI Designer',
      image: ibrahimImg,
      skills: ['Figma', 'Adobe XD', 'Sketch']
    }
  ];
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
  <Reveal>
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('aboutTitle')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('aboutSubtitle')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary">
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
                    ? 'نحن فريق من المطورين والمصممين المتخصصين في إنشاء حلول رقمية مبتكرة للأعمال العربية. هدفنا هو مساعدة الشركات والأفراد على بناء حضور رقمي قوي وفعال.'
                    : 'We are a team of developers and designers specialized in creating innovative digital solutions for Arabic businesses. Our goal is to help companies and individuals build a strong and effective digital presence.'
                  }
                </p>
                <p>
                  {isRTL
                    ? 'نؤمن بأن التكنولوجيا يجب أن تكون في خدمة الإنسان، ولذلك نركز على إنشاء مواقع ويب وتطبيقات سهلة الاستخدام وتلبي احتياجات المستخدمين العرب.'
                    : 'We believe that technology should serve humanity, so we focus on creating websites and applications that are user-friendly and meet the needs of Arabic users.'
                  }
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">40+</div>
                <div className="text-text-muted">
                  {isRTL ? 'مشروع منجز' : 'Completed Projects'}
                </div>
              </div>
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">30+</div>
                <div className="text-text-muted">
                  {isRTL ? 'عميل راضي' : 'Happy Clients'}
                </div>
              </div>
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">3+</div>
                <div className="text-text-muted">
                  {isRTL ? 'سنوات خبرة' : 'Years Experience'}
                </div>
              </div>
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-text-muted">
                  {isRTL ? 'دعم فني' : 'Technical Support'}
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </section>
  
      {/* Team Section */}
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
              {isRTL
                ? 'فريق من المحترفين المتخصصين في مختلف مجالات التطوير والتصميم'
                : 'A team of professionals specialized in various fields of development and design'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={isRTL ? member.name : member.nameEn}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {isRTL ? member.name : member.nameEn}
                </h3>
                
                <p className="text-accent-color font-medium mb-4">
                  {isRTL ? member.role : member.roleEn}
                </p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary rounded-full text-sm text-text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              {isRTL
                ? 'دعنا نساعدك في تحقيق رؤيتك الرقمية. تواصل معنا اليوم لمناقشة مشروعك.'
                : 'Let us help you achieve your digital vision. Contact us today to discuss your project.'
              }
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