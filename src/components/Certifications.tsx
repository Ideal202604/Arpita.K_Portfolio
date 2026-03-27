import React, { useEffect, useRef } from 'react';
import { BookOpenCheck, ShieldCheck, Scissors, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: 'Certified Technical Writer',
    issuer: 'Professional Certification',
    icon: BookOpenCheck,
    accent: 'from-gold/95 to-yellow-300',
  },
  {
    title: 'Fashion Designing Certification',
    issuer: 'Professional Certification',
    icon: Scissors,
    accent: 'from-teal/95 to-cyan-300',
  },
  {
    title: 'POSH Certified',
    issuer: 'Prevention of Sexual Harassment',
    icon: ShieldCheck,
    accent: 'from-gold/90 to-amber-300',
  },
  {
    title: 'Guidance & Counselling Certified',
    issuer: 'Professional Certification',
    icon: Sparkles,
    accent: 'from-teal/90 to-emerald-300',
  },
] as const;

const Certifications: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cert-heading',
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        },
      );

      gsap.fromTo(
        cardRefs.current,
        { autoAlpha: 0, y: 40, rotateX: 8, scale: 0.95 },
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          stagger: 0.14,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
          },
        },
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="section-padding">
      <div className="container-max">
        <div className="text-center mb-12 cert-heading">
          <h2 className="section-heading mb-2">{t.certifications.heading}</h2>
          <p className="text-muted-foreground">{t.certifications.subheading}</p>
          <div className="w-24 h-1 gradient-gold mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-7">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/90 p-6 cert-flash-card"
              onMouseEnter={(event) => {
                gsap.to(event.currentTarget, {
                  y: -10,
                  rotateY: 4,
                  rotateX: -4,
                  boxShadow: '0 24px 48px hsl(222 47% 10% / 0.22), 0 0 24px hsl(43 96% 56% / 0.22)',
                  duration: 0.35,
                  ease: 'power2.out',
                });
              }}
              onMouseLeave={(event) => {
                gsap.to(event.currentTarget, {
                  y: 0,
                  rotateY: 0,
                  rotateX: 0,
                  boxShadow: '0 8px 24px hsl(222 47% 11% / 0.12)',
                  duration: 0.35,
                  ease: 'power2.out',
                });
              }}
            >
              <div className="absolute inset-0 opacity-0 cert-flash pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${cert.accent} flex items-center justify-center shadow-gold`}>
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground leading-tight">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
