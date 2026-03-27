import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const NAV_LOGO = 'data:image/png;base64,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';

const navLinks = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'academic', href: '#academic' },
  { key: 'certifications', href: '#certifications' },
  { key: 'workshops', href: '#workshops' },
  { key: 'corporate', href: '#corporate' },
  { key: 'research', href: '#research' },
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
            <div className="w-12 h-10 sm:w-14 sm:h-11 rounded-xl overflow-hidden shadow-gold border border-border/80 flex-shrink-0 bg-card p-1">
              <img src={NAV_LOGO} alt="ICS Global Logo" className="w-full h-full object-contain" loading="lazy" />
            </div>
            <div className="hidden 2xl:block">
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
