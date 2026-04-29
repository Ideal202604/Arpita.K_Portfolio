import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScrollNavButtons from '@/components/ScrollNavButtons';
import ChatbotWidget from '@/components/ChatbotWidget';
import SiteMotion from '@/components/SiteMotion';

const About = lazy(() => import('@/components/About'));
const Gallery = lazy(() => import('@/components/Gallery'));
const AcademicProfile = lazy(() => import('@/components/AcademicProfile'));
const Certifications = lazy(() => import('@/components/Certifications'));
const Workshops = lazy(() => import('@/components/Workshops'));
const Conferences = lazy(() => import('@/components/Conferences'));
const CorporateProfile = lazy(() => import('@/components/Contributions'));
const Research = lazy(() => import('@/components/Research'));
const Awards = lazy(() => import('@/components/Awards'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* === FULL-HEIGHT CONTAINER: Ensures body fills viewport === */}
        <div className="relative h-screen overflow-x-clip motion-stage flex flex-col">
          {/* Background atmosphere layers */}
          <div className="pointer-events-none fixed inset-0 -z-10 page-atmosphere" />
          <div className="pointer-events-none fixed -top-28 -left-20 -z-10 h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-3xl motion-blob-gold" />
          <div className="pointer-events-none fixed -bottom-36 -right-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-teal/12 blur-3xl motion-blob-teal" />

          <SiteMotion />
          <Navbar />

          {/* === MAIN CONTENT: Expands to fill available space === */}
          <main className="relative z-10 flex-1">
            <Hero />
            <Suspense fallback={<div className="h-40" />}>
              <About />
              <Gallery />
              <AcademicProfile />
              <Certifications />
              <Workshops />
              <Conferences />
              <CorporateProfile />
              <Research />
              <Awards />
              <Contact />
            </Suspense>
          </main>

          {/* === FOOTER: Shrinks but never grows, always at bottom === */}
          <Suspense fallback={null}>
            <Footer />
          </Suspense>

          {/* Navigation buttons */}
          <ScrollNavButtons />

          {/* === CHATBOT WIDGET: Positioned above footer === */}
          <ChatbotWidget />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
