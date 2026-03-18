import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Mic, Award, BadgeCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const researchBuckets = [
  {
    title: 'Books',
    icon: BookOpen,
    border: 'border-gold/30',
    iconColor: 'text-gold',
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
    items: [
      {
        title: 'Development of Phonetic Based Packaged Programme and Its Effectiveness on Academic Achievement of Students with Dyslexia',
        description: 'Doctoral work centered on practical intervention models for students with dyslexia.',
        institution: 'S.G.B. Amravati University, 2018',
      },
    ],
  },
  {
    title: 'Book Chapters',
    icon: FileText,
    border: 'border-gold/30',
    iconColor: 'text-gold',
    items: [
      {
        title: 'Impact of Design Thinking On Teaching and Learning',
        description: 'Chapter contribution on applying Design Thinking in modern pedagogy and learner experience.',
        institution: 'Published Book Chapter',
      },
    ],
  },
  {
    title: 'Conference Papers',
    icon: Mic,
    border: 'border-teal/30',
    iconColor: 'text-teal',
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

        <div className="mb-8 rounded-[16px] border border-gold/30 bg-gold/10 p-4">
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-4 w-4 text-gold" />
            <h3 className="text-sm font-bold text-foreground">Design Thinking Featured</h3>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Design Thinking-oriented publications are surfaced prominently across book chapters and conference papers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {researchBuckets.map((bucket, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`bg-card border ${bucket.border} rounded-[16px] p-6 card-3d shadow-card-premium`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-[12px] bg-background/80 flex items-center justify-center flex-shrink-0">
                  <bucket.icon className={`w-5 h-5 ${bucket.iconColor}`} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider ${bucket.iconColor}`}>{bucket.title}</span>
              </div>

              <div className="space-y-3">
                {bucket.items.map((item, idx) => (
                  <div key={idx} className="rounded-[12px] border border-border/70 bg-background/70 p-3">
                    <h3 className="text-sm font-semibold text-foreground leading-snug">{item.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                    <p className="mt-2 text-[11px] font-medium text-gold">{item.institution}</p>
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
