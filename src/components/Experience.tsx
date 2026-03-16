import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronDown, ChevronUp, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const jobs = [
  {
    role: 'Director – ICS Global',
    company: 'Idealizeer Content Solutions Pvt. Ltd.',
    location: 'Pune',
    period: '2020 – Present',
    current: true,
    kra: [
      'Collaborate with academic institutions for research, development, and industry-ready training programs.',
      'Oversee administration and guide departmental heads for smooth operations.',
      'Lead the training wing and develop skill-based training materials.',
      'Academic Content Development and Management.',
      'Establish MoUs with academic institutions to enhance industry-academia collaboration.',
      'Conduct market research to identify business development opportunities and emerging trends.',
      'Drive R&D efforts to align with market dynamics and organizational objectives.',
    ],
  },
  {
    role: 'Visiting Faculty – Design Thinking',
    company: 'Symbiosis Institute of Technology',
    location: 'Pune',
    period: '2023',
    current: false,
    kra: [
      'Instructed Design Thinking courses to engineering students across 5 departments.',
      'Utilized diverse Design Thinking methods to inculcate a problem-solving approach.',
      'Delivered comprehensive instruction on diverse tools and techniques.',
      'Guided group projects, facilitating development of innovative business ideas.',
      'Developed and maintained course files, planned sessions, and generated evaluation reports.',
      'Cultivated a culture of active student participation and collaboration.',
    ],
  },
];

const Experience: React.FC = () => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-2">{t.experience.heading}</h2>
          <p className="text-muted-foreground">{t.experience.subheading}</p>
          <div className="w-20 h-1 gradient-gold mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-5 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-0.5 timeline-line" />

          <div className="space-y-7">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 lg:pl-0"
              >
                {/* Dot */}
                <div className={`absolute left-5 lg:left-1/2 lg:-translate-x-1/2 top-8 w-4 h-4 rounded-full border-4 border-background ${job.current ? 'bg-gold animate-pulse-gold' : 'bg-teal'}`} />

                {/* Year badge */}
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0">
                  <span className="text-xs font-bold text-gold bg-card border border-gold/20 rounded-full px-3 py-1 shadow-sm">
                    {job.period}
                  </span>
                </div>

                <div className={`lg:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className={`bg-card border rounded-[16px] overflow-hidden shadow-card-premium card-3d ${job.current ? 'border-gold/40' : 'border-border'}`}
                  >
                    {job.current && <div className="h-0.5 w-full gradient-gold" />}

                    <button
                      onClick={() => setExpanded(expanded === i ? null : i)}
                      className="w-full text-left p-5 flex items-start justify-between gap-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-12 h-12 rounded-[12px] flex items-center justify-center flex-shrink-0 shadow-md ${job.current ? 'gradient-gold' : 'bg-muted'}`}>
                          <Briefcase className={`w-5 h-5 ${job.current ? 'text-white' : 'text-muted-foreground'}`} />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground text-base">
                            {job.role}
                            {job.current && (
                              <span className="ml-2 text-xs font-medium text-gold bg-gold/10 px-2 py-0.5 rounded-full">Current</span>
                            )}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <span className="text-xs font-semibold text-teal">{job.company}</span>
                            <span className="text-muted-foreground text-xs">•</span>
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="w-3 h-3" />{job.location}
                            </span>
                            <span className="text-muted-foreground text-xs lg:hidden">•</span>
                            <span className="flex items-center gap-1 text-xs text-muted-foreground lg:hidden">
                              <Calendar className="w-3 h-3" />{job.period}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-1 rounded-md bg-muted/60 mt-1">
                        {expanded === i ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {expanded === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 border-t border-border pt-4">
                            <h4 className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">
                              {t.experience.keyResults}
                            </h4>
                            <ul className="space-y-2">
                              {job.kra.map((point, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
