import React from 'react'
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import WorkPage from './pages/WorkPage'
import FaqPage from './pages/FaqPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import PageWrapper from './components/anim/PageWrapper'
import ScrollToTop from './components/anim/ScrollToTop'
import { LanguageProvider, useLanguage } from './context/LanguageContext'

import './App.css'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutUsPage /></PageWrapper>} />
        <Route path="/work" element={<PageWrapper><WorkPage /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><FaqPage /></PageWrapper>} />
        <Route path="/privacy" element={<PageWrapper><PrivacyPolicyPage /></PageWrapper>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  )
}

/** Global SEO som byter språk dynamisk */
function SeoHelmet() {
  const { isRTL } = useLanguage()

  const en = {
    title: 'Syrian Visions – Web Design & Development',
    desc: 'Modern websites, clean design, and reliable delivery for your business.'
  }
  const ar = {
    title: 'Syrian Visions - تطوير مواقع الويب',
    desc: 'مواقع حديثة وسريعة بتصميم نظيف وتسليم موثوق لأعمالك.'
  }

  const t = isRTL ? ar : en
  const lang = isRTL ? 'ar' : 'en'
  const dir = isRTL ? 'rtl' : 'ltr'

  return (
    <Helmet>
      {/* Viktig: oppdater html-attributt */}
      <html lang={lang} dir={dir} />

      {/* Basis per side (kan overstyrast inne i sider ved behov) */}
      <title>{t.title}</title>
      <meta name="description" content={t.desc} />

      {/* Open Graph / Twitter */}
      <meta property="og:title" content={t.title} />
      <meta property="og:description" content={t.desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://syrianvisions.com" />
      <meta property="og:image" content="/pictures/og-image.png" />
      <meta property="og:site_name" content="Syrian Visions" />
      <meta property="og:locale" content={isRTL ? 'ar_AR' : 'en_US'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t.title} />
      <meta name="twitter:description" content={t.desc} />
      <meta name="twitter:image" content="/pictures/og-image.png" />
    </Helmet>
  )
}

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <SeoHelmet />
          <div className="min-h-screen bg-primary text-text-color">
            <Header />
            <AnimatedRoutes />
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  )
}

export default App
