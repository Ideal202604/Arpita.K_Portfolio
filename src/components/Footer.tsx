import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const NAV_LOGO = '/logo.svg';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container-max">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <img src={NAV_LOGO} alt="Dr. Arpita Kathane Logo" className="w-11 h-9 rounded-lg object-contain bg-card p-0.5 shadow-md" loading="lazy" />
              <div>
                <div className="font-bold text-foreground text-sm font-display">
                  Dr. Arpita Kathane
                </div>
                <div className="text-xs text-muted-foreground">Director – ICS Global</div>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a href="mailto:karpita2011@gmail.com" title="Email" aria-label="Email" className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-gold/10 transition-colors">
                <Mail className="w-3.5 h-3.5" />
              </a>
              <a href="http://linkedin.com/in/dr-arpita-kathane-8683461a1" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-gold hover:bg-gold/10 transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="flex flex-col items-center sm:items-end gap-1">
              <p className="text-xs text-muted-foreground">
                © {year} Dr. Arpita Kathane. {t.footer.rights}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
