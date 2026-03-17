import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const PHOTO_URL = '/Arpita-2.png';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { value: '18+', label: 'Years Experience' },
    { value: '2', label: 'Published Books' },
    { value: '10+', label: 'Awards Won' },
  ];

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden noise-bg hero-section"
    >
      {/* Theme-aware gradient background */}
      <div className="absolute inset-0 hero-bg" />

      {/* Animated blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-teal/10 blur-3xl animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-blob hero-blob-delay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      {/* Decorative grid */}
      <div className="absolute inset-0 pointer-events-none hero-grid-overlay" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 w-full hero-shell">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center hero-main-grid">

          {/* Left: Text — max-width 620px */}
          <div className="order-1 lg:order-1 flex flex-col justify-center py-6 lg:py-0 max-w-[620px]">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center sm:justify-start gap-2 px-2.5 sm:px-4 py-2 rounded-full glass border border-white/20 mb-5 self-start"
            >
              <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              <span className="hidden sm:inline text-xs font-medium text-emerald-900 dark:text-emerald-300 [@media(hover:none)_and_(pointer:coarse)]:hidden">Director - ICS Global</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-6xl font-bold hero-text-primary leading-[1.1] mb-3 font-display"
            >
              {t.hero.name}
            </motion.h1>

            {/* Title + Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 mb-2"
            >
              <span className="text-lg font-semibold text-emerald-900 dark:text-emerald-300">{t.hero.title}</span>
              <span className="hero-text-secondary opacity-70">•</span>
              <span className="text-lg text-teal font-medium">{t.hero.subtitle}</span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hero-text-secondary text-base sm:text-lg leading-relaxed mb-6 max-w-xl opacity-80"
            >
              {t.hero.tagline}
            </motion.p>

            {/* Contact quick row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4 mb-6"
            >
              <a href="tel:+919890451547" className="flex items-center gap-2 hero-text-secondary hover:text-gold transition-colors text-sm opacity-80">
                <Phone className="w-3.5 h-3.5" />
                <span>+91 98904 51547</span>
              </a>
              <a href="mailto:arpita@idealizeer.in" className="flex items-center gap-2 hero-text-secondary hover:text-gold transition-colors text-sm opacity-80">
                <Mail className="w-3.5 h-3.5" />
                <span>arpita@idealizeer.in</span>
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row sm:items-stretch gap-3 mb-8"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto sm:min-w-[180px] gradient-gold text-white border-0 shadow-gold font-semibold gap-2 hover:opacity-90 hover:scale-[1.03] transition-all"
                onClick={scrollToAbout}
              >
                Profile
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="w-full sm:w-auto sm:min-w-[180px] border-border hero-text-primary bg-white/70 hover:bg-white/90 font-semibold gap-2 hover:scale-[1.03] transition-all"
              >
                <Mail className="w-4 h-4" />
                {t.hero.contactNow}
              </Button>
            </motion.div>

            {/* Stats — equal spacing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-3 sm:gap-5"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="text-center cursor-default rounded-[12px] bg-card/10 border border-white/10 px-2 py-3"
                >
                  <div className="text-3xl font-bold text-gold font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs hero-text-secondary mt-1 opacity-60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Photo — fixed aspect ratio 3:4 glassmorphism frame */}
          <div className="order-4 lg:order-2 flex justify-start lg:justify-end mt-6 lg:mt-0 [@media(hover:none)_and_(pointer:coarse)]:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative"
            >
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-[16px] bg-gradient-to-br from-gold/40 to-teal/30 blur-2xl scale-110 pointer-events-none" />

              {/* 3D Glassmorphism card */}
              <motion.div
                className="relative glass rounded-[16px] p-3 border border-border/70 shadow-card-premium"
              >
                <div className="relative overflow-hidden rounded-[16px] w-[84vw] max-w-[320px] sm:w-[52vw] sm:max-w-[370px] md:w-[40vw] md:max-w-[390px] lg:w-[clamp(300px,30vw,360px)] [@media(hover:none)_and_(pointer:coarse)]:w-[88vw] [@media(hover:none)_and_(pointer:coarse)]:max-w-[360px] bg-muted/30 media-frame flex items-center justify-center p-2">
                  <img
                    src={PHOTO_URL}
                    alt="Dr. Arpita Pankaj Kathane"
                    className="w-full h-auto max-h-[380px] sm:max-h-[430px] md:max-h-[470px] lg:max-h-[500px] object-contain object-center"
                    loading="lazy"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Floating badge bottom */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -right-3 glass border border-border/70 rounded-[16px] px-4 py-2.5 shadow-xl"
                >
                  <div className="text-xs font-semibold hero-text-primary">PhD in Education</div>
                  <div className="text-xs font-medium text-emerald-900 dark:text-emerald-300">SGBAU, 2018</div>
                </motion.div>

                {/* Floating badge top */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -top-4 -left-3 glass border border-border/70 rounded-[16px] px-4 py-2.5 shadow-xl"
                >
                  <div className="text-xs font-semibold hero-text-primary">London Book</div>
                  <div className="text-xs font-medium text-emerald-900 dark:text-emerald-300">World Record 🏆</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
