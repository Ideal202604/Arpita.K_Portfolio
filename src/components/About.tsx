import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Star, Lightbulb, Award, Book } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const PHOTO_URL = 'https://res.cloudinary.com/duhhsnbwh/image/upload/v1771498895/Arpita_Kathane_sotre2.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } }),
};

const About: React.FC = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: Lightbulb, label: t.about.highlights.designThinker, color: 'text-teal' },
    { icon: Star, label: t.about.highlights.director, color: 'text-gold' },
    { icon: Book, label: 'Research & Publications', color: 'text-gold' },
    { icon: Award, label: 'Awards & Recognition', color: 'text-teal' },
  ];

  const contactItems = [
    { icon: Mail, label: t.about.contact.email, value: 'arpita@idealizeer.in', href: 'mailto:arpita@idealizeer.in' },
    { icon: Linkedin, label: t.about.contact.linkedin, value: 'Dr. Arpita Kathane', href: 'https://www.linkedin.com/in/dr-arpita-kathane-8683461a1/' },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-max">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-4">{t.about.heading}</h2>
          <div className="w-20 h-1 gradient-gold mx-auto rounded-full" />
        </motion.div>

        {/* Grid: image 40% / text 60% */}
        <div className="grid lg:grid-cols-10 gap-8 lg:gap-10 items-start">
          {/* Left: Photo — 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4 flex flex-col items-center"
          >
            <motion.div
              className="relative p-3 glass rounded-[16px] border border-border/70 shadow-card-premium w-[88vw] max-w-[380px] sm:w-[60vw] sm:max-w-[370px] lg:w-[clamp(300px,30vw,360px)] lg:max-w-none"
            >
              <div className="relative w-full bg-muted/30 media-frame flex items-center justify-center p-2">
                <img
                  src={PHOTO_URL}
                  alt="Dr. Arpita Pankaj Kathane"
                  className="w-full h-auto max-h-[540px] object-contain object-center rounded-[16px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Highlight cards with 3D hover */}
            <div className="grid grid-cols-2 gap-3 mt-6 w-[88vw] max-w-[380px] sm:w-[60vw] sm:max-w-[370px] lg:w-[clamp(300px,30vw,360px)] lg:max-w-none">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ y: -4, scale: 1.03 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-[16px] p-3 flex items-center gap-2 shadow-card-premium card-3d cursor-default"
                >
                  <h.icon className={`w-4 h-4 flex-shrink-0 ${h.color}`} />
                  <span className="text-xs font-medium text-foreground leading-tight">{h.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio + Contact — 3/5 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Dr. Arpita Pankaj Kathane
            </h3>

            <p className="text-gold font-semibold mb-1 text-sm">Director & Chief Operating Officer</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              London Book of World Records honouree and award-winning design-thinking expert, Dr. Arpita brings decades of leadership in content strategy, learner-centric programme design, and large-scale training. As Director & CEO of ICS Global, she has built AI-driven content ecosystems, ghost-written 19 books, and led high-impact workshops at top universities & industry forums. An accomplished author of international scholarly volumes, she blends empathy-led coaching with data-powered optimisation to drive excellence in every project.
            </p>
            <p className="mb-6 rounded-[14px] border border-gold/30 bg-gold/10 px-4 py-3 text-sm font-semibold leading-relaxed text-foreground">
              Design Thinking Expert | London Book of World Record Winner for Academic & Social Contributions | Director - ICS GLOBAL | Visiting Faculty - Symbiosis | Content Strategist | Empathetic Academician (Experience Based Learning)
            </p>

            {/* Contact Info — flex rows with equal spacing */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-3">Contact Information</h4>
              <div className="flex flex-col gap-3">
                {contactItems.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    custom={i}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    whileHover={{ x: 4 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 group bg-card border border-border rounded-[16px] p-3 min-h-[84px] shadow-card-premium card-3d"
                  >
                    <div className="w-10 h-10 rounded-[12px] bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</div>
                      <div className="text-sm text-foreground group-hover:text-gold transition-colors font-medium">{item.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
