import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Shield, Scissors } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const timeline = [
  { year: '2018', degree: 'Ph.D. in Education', institution: 'S.G.B. Amravati University', icon: GraduationCap, color: 'from-gold to-yellow-400', highlight: true },
  { year: '2013', degree: 'SET (Education)', institution: 'State Eligibility Test', icon: Award, color: 'from-teal to-cyan-400', highlight: false },
  { year: '2012', degree: 'M.Ed.', institution: 'S.G.B. Amravati University', icon: GraduationCap, color: 'from-gold to-yellow-400', highlight: false },
  { year: '2009', degree: 'B.Ed.', institution: 'S.G.B. Amravati University', icon: GraduationCap, color: 'from-teal to-cyan-400', highlight: false },
  { year: '2001', degree: 'MA (English Literature)', institution: 'Nagpur University', icon: BookOpen, color: 'from-gold to-yellow-400', highlight: false },
  { year: '', degree: 'Certified Technical Writer', institution: 'Professional Certification', icon: BookOpen, color: 'from-teal to-cyan-400', highlight: false },
  { year: '', degree: 'Fashion Designing Certification', institution: 'Professional Certification', icon: Scissors, color: 'from-gold to-yellow-400', highlight: false },
  { year: '', degree: 'POSH Certified', institution: 'Prevention of Sexual Harassment', icon: Shield, color: 'from-teal to-cyan-400', highlight: false },
  { year: '', degree: 'Guidance & Counselling Certified', institution: 'Professional Certification', icon: Award, color: 'from-gold to-yellow-400', highlight: false },
];

const AcademicProfile: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="academic" className="section-padding bg-muted/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-2">{t.academic.heading}</h2>
          <p className="text-muted-foreground">{t.academic.subheading}</p>
          <div className="w-20 h-1 gradient-gold mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 timeline-line hidden md:block" />

          <div className="space-y-6">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
                >
                  {/* Card */}
                  <div className={`md:w-5/12 w-full ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`bg-card border border-border rounded-[16px] p-5 shadow-card-premium card-3d ${item.highlight ? 'ring-1 ring-gold/30' : ''}`}>
                      <div className={`flex items-center gap-3 ${isLeft ? 'md:flex-row-reverse' : 'flex-row'} flex-row`}>
                        <div className={`w-10 h-10 rounded-[12px] bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          {item.year && (
                            <div className="text-xs font-bold text-gold uppercase tracking-wider mb-0.5">{item.year}</div>
                          )}
                          <h3 className="font-bold text-foreground text-sm">
                            {item.degree}
                          </h3>
                        </div>
                      </div>
                      <p className={`text-xs text-muted-foreground mt-2 ${isLeft ? 'md:text-right' : ''}`}>{item.institution}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.color} border-4 border-background shadow-gold`} />
                  </div>

                  {/* Spacer */}
                  <div className="md:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicProfile;
