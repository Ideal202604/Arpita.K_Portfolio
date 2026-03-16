import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, Github, Linkedin, Figma, ExternalLink, Phone, Mail, Zap } from 'lucide-react';

interface DeveloperModalProps {
  open: boolean;
  onClose: () => void;
}

const devLinks = [
  { icon: Globe, label: 'Portfolio', href: 'https://tech-world-ai.vercel.app/', color: 'text-teal' },
  { icon: Figma, label: 'Figma', href: 'https://jargon-savant-75370195.figma.site/', color: 'text-gold' },
  { icon: ExternalLink, label: 'Framer', href: 'https://portfolio-wajid-daud-tamboli.framer.website/', color: 'text-teal' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/wajid-daud-tamboli-3217b031a/', color: 'text-gold' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/wajiddaudtamboli', color: 'text-teal' },
];

const DeveloperModal: React.FC<DeveloperModalProps> = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md px-4"
          >
            <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="gradient-hero p-6 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center shadow-gold text-2xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                    W
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                      Wajid Daud Tamboli
                    </h3>
                    <p className="text-white/70 text-sm">Full Stack Developer & UI/UX Designer</p>
                    <p className="text-gold text-xs font-medium mt-0.5">Idealizeer Content Solution</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <a href="tel:+919667033839" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Phone className="w-4 h-4 text-gold" />
                    +91 9667033839
                  </a>
                  <a href="mailto:wajiddaudtamboli123@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="w-4 h-4 text-teal" />
                    wajiddaudtamboli123@gmail.com
                  </a>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Profiles & Work</p>
                  <div className="grid grid-cols-5 gap-2">
                    {devLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-muted transition-colors group"
                      >
                        <link.icon className={`w-5 h-5 ${link.color} group-hover:scale-110 transition-transform`} />
                        <span className="text-xs text-muted-foreground">{link.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DeveloperModal;
