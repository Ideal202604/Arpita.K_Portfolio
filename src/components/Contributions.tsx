import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle, Lightbulb, FileText, Users, BookOpen, Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const rolesAndResponsibilities = [
  'Design Thinking Expert for cross-functional institutional and industry projects',
  'Director and operational leader for programme planning and execution',
  'Visiting Faculty support for innovation and learner-centric frameworks',
  'Academic-industry bridge building through collaborative initiatives',
];

const mouHighlights = [
  'Institutional partnerships to deliver academic and corporate upskilling programs',
  'Collaborative program design for employability, innovation, and leadership outcomes',
  'Cross-organization knowledge sharing through workshops and faculty engagement',
];

const contentStrategyWork = [
  'AI-enabled content strategy and curriculum architecture for outcome-based learning',
  'Academic and professional publication support including books, chapters, and technical assets',
  'Content quality governance for institutional and enterprise learning systems',
];

const trainingContributions = [
  { icon: Lightbulb, title: 'Design Thinking First', detail: 'Design Thinking embedded as the foundational model for workshop and training interventions.' },
  { icon: Users, title: 'Academic Training', detail: 'Student-centric workshops, seminars, and structured training sessions for educational impact.' },
  { icon: Briefcase, title: 'Corporate Development', detail: 'Industry-facing professional development sessions aligned to workplace skills and culture.' },
  { icon: BookOpen, title: 'Faculty Development', detail: 'Capacity building and knowledge transfer sessions for educators and institutional teams.' },
];

const mouImages = [
  'ACADEMIC MOU WITH PIBm, PUNE.png',
  'ACADEMIC MOU WITH TILAK MAHARASHTRA VIDHYAPEETH, PUNE.png',
];

const Contributions: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="corporate" className="section-padding bg-muted/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-2">{t.nav.corporate}</h2>
          <p className="text-muted-foreground">MoUs, strategic roles, and structured corporate-academic development impact</p>
          <div className="w-20 h-1 gradient-gold mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-gold/20 rounded-[16px] p-6 shadow-card-premium h-full hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-gold/70 to-teal/60" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-[12px] gradient-gold flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  MoUs
                </h3>
              </div>
              <div className="space-y-3">
                {mouHighlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-teal/20 rounded-[16px] p-6 shadow-card-premium h-full hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-gold/70 to-teal/60" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-[12px] bg-teal flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Content Strategy Work
                </h3>
              </div>
              <div className="space-y-3">
                {contentStrategyWork.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mb-10">
          <h3 className="mb-4 text-lg font-bold text-foreground">MoU Documentation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {mouImages.map((fileName, i) => (
              <motion.div
                key={fileName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="group rounded-[16px] border border-border bg-card p-3 shadow-card-premium transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden rounded-[12px] border border-border/70 bg-muted">
                  <img
                    src={`/assets/awards/${fileName}`}
                    alt={fileName}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-2 top-2 rounded-full border border-gold/30 bg-background/85 px-2 py-0.5 text-[10px] font-semibold text-gold">
                    MOU
                  </span>
                </div>
                <h4 className="px-1 pt-3 text-sm font-semibold leading-snug text-foreground">{fileName}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border rounded-[16px] p-6 shadow-card-premium hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <div className="mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-gold/70 to-teal/60" />
            <h3 className="mb-4 text-lg font-bold text-foreground">Roles & Responsibilities</h3>
            <div className="space-y-3">
              {rolesAndResponsibilities.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <p className={`text-sm leading-relaxed ${i === 0 ? 'font-semibold text-gold' : 'text-muted-foreground'}`}>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-card border border-border rounded-[16px] p-6 shadow-card-premium hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <div className="mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-gold/70 to-teal/60" />
            <h3 className="mb-4 text-lg font-bold text-foreground">Training & Development Contributions</h3>
            <div className="space-y-3">
              {trainingContributions.map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-[12px] border border-border/70 bg-background/70 p-3">
                  <item.icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${i === 0 ? 'text-gold' : 'text-teal'}`} />
                  <div>
                    <div className={`text-sm font-semibold ${i === 0 ? 'text-gold' : 'text-foreground'}`}>{item.title}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;
