import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Mic, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const researchBuckets = [
  {
    title: 'Books',
    icon: BookOpen,
    border: 'border-gold/30',
    iconColor: 'text-gold',
    tagBg: 'bg-gold/15 border-gold/30 text-gold',
    glow: 'from-gold/25 to-transparent',
    items: [
      {
        title: 'Emerging Trends in Management and Social Sciences',
        description: 'Published book contribution focused on contemporary management and social science dimensions.',
        institution: 'Publication Contribution',
      },
      {
        title: 'Entrepreneurship & Innovation - From Idea to Market',
        description: 'Published title supporting innovation practice and entrepreneurial transformation journeys.',
        institution: 'Publication Contribution',
      },
    ],
  },
  {
    title: 'PhD Thesis',
    icon: FileText,
    border: 'border-teal/30',
    iconColor: 'text-teal',
    tagBg: 'bg-teal/15 border-teal/30 text-teal',
    glow: 'from-teal/25 to-transparent',
    items: [
      {
        title: 'Development of Phonetic Based Packaged Programme and Its Effectiveness on Academic Achievement of Students with Dyslexia',
        description: 'Doctoral work centered on practical intervention models for students with dyslexia.',
        institution: 'S.G.B. Amravati University, 2018',
      },
    ],
  },
  {
    title: 'Conference Papers',
    icon: Mic,
    border: 'border-teal/30',
    iconColor: 'text-teal',
    tagBg: 'bg-teal/15 border-teal/30 text-teal',
    glow: 'from-teal/25 to-transparent',
    items: [
      {
        title: 'Transforming Teaching by Integrating Design Thinking with Experiential Learning',
        description: 'Research paper presentation on classroom transformation using Design Thinking-first frameworks.',
        institution: 'ICIA 2024 - Islamic University of Maldives',
      },
      {
        title: 'Paper at SDG4-Quality Education Conference',
        description: 'Presentation discussing quality education outcomes and implementation pathways.',
        institution: 'Conference Event, Jan 10-11, 2024',
      },
    ],
  },
  {
    title: 'Awards',
    icon: Award,
    border: 'border-gold/30',
    iconColor: 'text-gold',
    tagBg: 'bg-gold/15 border-gold/30 text-gold',
    glow: 'from-gold/25 to-transparent',
    items: [
      {
        title: 'Best Research Paper at 56th Annual National Conference of IATE',
        description: 'Recognized for contribution in Indian Knowledge System-oriented research.',
        institution: 'YCMOU Nashik, Feb 2024',
      },
      {
        title: 'London Book of World Record Recognition',
        description: 'International recognition for academic and social contributions.',
        institution: 'Global Recognition',
      },
    ],
  },
];

const Research: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="research" className="section-padding bg-background">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-2">{t.research.heading}</h2>
          <p className="text-muted-foreground">{t.research.subheading}</p>
          <div className="w-20 h-1 gradient-gold mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {researchBuckets.map((bucket, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative overflow-hidden bg-card border ${bucket.border} rounded-[16px] p-6 card-3d shadow-card-premium hover:-translate-y-1 hover:shadow-xl transition-all`}
            >
              <div className={`pointer-events-none absolute -top-14 -right-10 h-36 w-36 rounded-full bg-gradient-to-br ${bucket.glow} blur-2xl`} />
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-[12px] bg-background/90 border border-border/70 flex items-center justify-center flex-shrink-0">
                  <bucket.icon className={`w-5 h-5 ${bucket.iconColor}`} />
                  </div>
                  <span className={`text-sm font-bold tracking-wide ${bucket.iconColor}`}>{bucket.title}</span>
                </div>
                <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${bucket.tagBg}`}>
                  {bucket.items.length} {bucket.items.length > 1 ? 'items' : 'item'}
                </span>
              </div>

              <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-gold/70 to-teal/60" />

              <div className="space-y-3">
                {bucket.items.map((item, idx) => (
                  <div key={idx} className="rounded-[12px] border border-border/70 bg-background/70 p-4 hover:border-gold/30 transition-colors">
                    <h3 className="text-sm font-semibold text-foreground leading-snug">{item.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                    <div className="mt-3 inline-flex items-center rounded-full border border-gold/25 bg-gold/10 px-2.5 py-1">
                      <span className="text-[11px] font-medium text-gold">{item.institution}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
