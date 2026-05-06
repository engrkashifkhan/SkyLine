import React, { lazy, Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load below-the-fold sections for performance
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Gallery = lazy(() => import('./components/Gallery'));
const Resources = lazy(() => import('./components/Resources'));
const Capabilities = lazy(() => import('./components/Capabilities'));
const Safety = lazy(() => import('./components/Safety'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-32">
    <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
  </div>
);

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <About />
        <Services />
        <Gallery />
        <Resources />
        <Capabilities />
        <Safety />
        <Certifications />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;