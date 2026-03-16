import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import ICSLogo from '@/assets/ICS_Logo.jpg';

const navLinks = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'academic', href: '#academic' },
  { key: 'experience', href: '#experience' },
  { key: 'skills', href: '#skills' },
  { key: 'research', href: '#research' },
  { key: 'workshops', href: '#workshops' },
  { key: 'awards', href: '#awards' },
  { key: 'contact', href: '#contact' },
] as const;

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const langLabels: Record<Language, string> = { en: 'EN', hi: 'हि', mr: 'म' };
  const langFull: Record<Language, string> = { en: 'English', hi: 'हिंदी', mr: 'मराठी' };

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/68 backdrop-blur-2xl border-b border-border/70 shadow-card-premium'
            : 'bg-transparent'
        }`}
      >
        <div className="container-max grid grid-cols-[auto_1fr_auto] items-center gap-4 h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#home"
            onClick={e => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-gold border border-border/80 flex-shrink-0 bg-card">
              <img src={ICSLogo} alt="ICS Global Logo" className="w-full h-full object-contain p-0.5" loading="lazy" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-foreground text-sm leading-none block font-display">
                ICS Global
              </span>
              <span className="text-xs text-muted-foreground leading-none">Dr. Arpita Kathane</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:grid grid-cols-9 gap-1.5 w-full max-w-5xl mx-auto px-3 py-1.5 rounded-full bg-card/65 border border-border/70 backdrop-blur-xl">
            {navLinks.map(link => (
              <a
                key={link.key}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                className="h-8 px-2 flex items-center justify-center text-center text-[11px] font-semibold text-muted-foreground hover:text-foreground rounded-full transition-all hover:bg-background/85 border border-transparent hover:border-border/80"
              >
                {t.nav[link.key as keyof typeof t.nav]}
              </a>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 justify-self-end">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(prev => !prev)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border/80 bg-card/60"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{langLabels[language]}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-1.5 w-28 bg-card/95 border border-border/80 rounded-xl shadow-lg overflow-hidden backdrop-blur-xl"
                    onMouseLeave={() => setLangOpen(false)}
                  >
                    {(['en', 'hi', 'mr'] as Language[]).map(lang => (
                      <button
                        key={lang}
                        onClick={() => { setLanguage(lang); setLangOpen(false); }}
                        className={`w-full text-left px-3 py-2 text-xs font-medium transition-colors ${
                          language === lang
                            ? 'bg-secondary text-gold font-semibold'
                            : 'text-foreground hover:bg-muted'
                        }`}
                      >
                        {langFull[lang]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(prev => !prev)}
              className="xl:hidden p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border/70 bg-card/50"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col pt-20 px-6 xl:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                  className="h-12 px-4 flex items-center text-base font-medium text-foreground hover:text-gold border border-border/50 rounded-lg transition-colors font-display"
                >
                  {t.nav[link.key as keyof typeof t.nav]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
