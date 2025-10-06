import React, { useEffect, useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Helmet } from 'react-helmet-async';
import Seo from '../components/Seo';

interface Project {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  category: 'web' | 'mobile' | 'design';
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

const WorkPage: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'mobile' | 'design'>('all');

  const lang = isRTL ? 'ar' : 'en';
  const dir = isRTL ? 'rtl' : 'ltr';
  const title = isRTL ? 'أعمالنا – Syrian Visions' : 'Our Work – Syrian Visions';
  const desc = isRTL
    ? 'استعرض مشاريع الويب والتطبيقات والتصميم التي أنجزناها.'
    : 'Browse our recent web, app, and design projects.';

  const projects: Project[] = [
    {
      id: 1,
      title: 'موقع شركة تجارية',
      titleEn: 'Corporate Website',
      description: 'موقع شركة تجارية متعدد الصفحات مع نظام إدارة محتوى',
      descriptionEn: 'Multi-page corporate website with content management system',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'تطبيق إدارة المهام',
      titleEn: 'Task Management App',
      description: 'تطبيق لإدارة المهام والمشاريع مع واجهة سهلة الاستخدام',
      descriptionEn: 'Task and project management app with user-friendly interface',
      category: 'mobile',
      technologies: ['React Native', 'Firebase'],
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#'
    },
    {
      id: 3,
      title: 'متجر إلكتروني',
      titleEn: 'E-commerce Store',
      description: 'متجر إلكتروني متكامل مع نظام دفع آمن وإدارة مخزون',
      descriptionEn: 'Complete e-commerce store with secure payment and inventory management',
      category: 'web',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#'
    },
    {
      id: 4,
      title: 'هوية بصرية متكاملة',
      titleEn: 'Complete Brand Identity',
      description: 'تصميم هوية بصرية متكاملة تشمل الشعار والألوان والخطوط',
      descriptionEn: 'Complete brand identity design including logo, colors, and fonts',
      category: 'design',
      technologies: ['Figma', 'Adobe Illustrator', 'Photoshop'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'منصة تعليمية',
      titleEn: 'Learning Platform',
      description: 'منصة تعليمية تفاعلية مع نظام إدارة الطلاب والمدرسين',
      descriptionEn: 'Interactive learning platform with student and teacher management system',
      category: 'web',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#'
    },
    {
      id: 6,
      title: 'تطبيق توصيل طعام',
      titleEn: 'Food Delivery App',
      description: 'تطبيق لتوصيل الطعام مع نظام تتبع الطلبات',
      descriptionEn: 'Food delivery app with order tracking system',
      category: 'mobile',
      technologies: ['Flutter', 'Firebase', 'Google Maps'],
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filters = [
    { key: 'all' as const, label: 'الكل', labelEn: 'All Projects' },
    { key: 'web' as const, label: 'مواقع ويب', labelEn: 'Web Projects' },
    { key: 'mobile' as const, label: 'تطبيقات جوال', labelEn: 'Mobile Apps' },
    { key: 'design' as const, label: 'تصاميم', labelEn: 'Design Projects' }
  ];

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  // Lukke med Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && selectedProject && closeModal();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedProject]);

  return (
    <div className="pt-20">
      {/* språk/retning */}
      <Helmet htmlAttributes={{ lang, dir }} />
      {/* SEO for /work */}
      <Seo
        title={title}
        description={desc}
        path="/work"
      />

      {/* Hero Section */}
      <section className="py-20 gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('workTitle')}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {t('workSubtitle')}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4" role="tablist" aria-label="Project filters">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-white text-primary font-semibold'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                role="tab"
                aria-selected={activeFilter === filter.key}
              >
                {isRTL ? filter.label : filter.labelEn}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                onClick={() => openModal(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={isRTL ? project.title : project.titleEn}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex space-x-2 rtl:space-x-reverse">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                            aria-label="Open live site"
                          >
                            <ExternalLink className="w-4 h-4 text-white" />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                            aria-label="Open GitHub repo"
                          >
                            <Github className="w-4 h-4 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {isRTL ? project.title : project.titleEn}
                  </h3>

                  <p className="text-text-muted mb-4 line-clamp-2">
                    {isRTL ? project.description : project.descriptionEn}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-accent-color/20 text-accent-color text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-text-muted/20 text-text-muted text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="lightbox-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={isRTL ? 'تفاصيل المشروع' : 'Project details'}
        >
          <div
            className="max-w-4xl mx-auto bg-primary rounded-2xl overflow-hidden shadow-heavy relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg.black/40 transition-colors z-10"
              aria-label={isRTL ? 'إغلاق' : 'Close'}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative">
              <img
                src={selectedProject.image}
                alt={isRTL ? selectedProject.title : selectedProject.titleEn}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-6 gap-4">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {isRTL ? selectedProject.title : selectedProject.titleEn}
                  </h2>
                  <p className="text-text-muted text-lg">
                    {isRTL ? selectedProject.description : selectedProject.descriptionEn}
                  </p>
                </div>

                <div className="flex space-x-4 rtl:space-x-reverse">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Open live site"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Open GitHub repo"
                    >
                      <Github className="w-5 h-5 text.white" />
                    </a>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  {isRTL ? 'التقنيات المستخدمة:' : 'Technologies Used:'}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-accent-color/20 text-accent-color rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkPage;
