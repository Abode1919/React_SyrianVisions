import React, { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface Project {
  id: number;
  title: string;
  titleEn: string;
  category: string;
  thumbnail: string;
  large: string;
  link?: string;
}

const PortfolioSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample projects data (in real app, these would be actual image URLs)
  const projects: Project[] = [
    {
      id: 1,
      title: 'موقع شركة تجارية',
      titleEn: 'Corporate Website',
      category: 'web',
      thumbnail: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=400',
      large: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#'
    },
    {
      id: 2,
      title: 'تطبيق جوال',
      titleEn: 'Mobile Application',
      category: 'mobile',
      thumbnail: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400',
      large: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'متجر إلكتروني',
      titleEn: 'E-commerce Store',
      category: 'web',
      thumbnail: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
      large: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '#'
    },
    {
      id: 4,
      title: 'تصميم هوية بصرية',
      titleEn: 'Brand Identity Design',
      category: 'design',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400',
      large: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'منصة تعليمية',
      titleEn: 'Learning Platform',
      category: 'web',
      thumbnail: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=400',
      large: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'تطبيق إدارة مشاريع',
      titleEn: 'Project Management App',
      category: 'mobile',
      thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400',
      large: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filters = [
    { key: 'all', label: 'الكل', labelEn: 'All Projects' },
    { key: 'web', label: 'مواقع ويب', labelEn: 'Web Projects' },
    { key: 'mobile', label: 'تطبيقات', labelEn: 'Mobile Apps' },
    { key: 'design', label: 'تصاميم', labelEn: 'Designs' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="work" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('workTitle')}
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto mb-8">
            {t('workSubtitle')}
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map(filter => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-accent text-white'
                    : 'bg-transparent border border-border-color text-text-muted hover:text-white hover:border-accent-color'
                }`}
              >
                {isRTL ? filter.label : filter.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => openLightbox(project)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-medium hover:shadow-heavy transition-all duration-300 group-hover:-translate-y-2">
                <img
                  src={project.thumbnail}
                  alt={isRTL ? project.title : project.titleEn}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {isRTL ? project.title : project.titleEn}
                    </h3>
                    {project.link && (
                      <div className="flex items-center space-x-2 rtl:space-x-reverse text-accent-color">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">
                          {isRTL ? 'مشاهدة المشروع' : 'View Project'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedProject && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
              <button
                onClick={closeLightbox}
                className="lightbox-close"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedProject.large}
                alt={isRTL ? selectedProject.title : selectedProject.titleEn}
                className="lightbox-image"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {isRTL ? selectedProject.title : selectedProject.titleEn}
                </h3>
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 rtl:space-x-reverse text-accent-color hover:text-white transition-colors"
                    onClick={e => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{isRTL ? 'زيارة الموقع' : 'Visit Website'}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;