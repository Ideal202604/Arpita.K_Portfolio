import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Mic, Award, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const publications = [
  { type: 'Book', icon: BookOpen, color: 'from-gold/20 to-yellow-400/10', border: 'border-gold/30', iconColor: 'text-gold', title: 'Emerging Trends in Management and Social Sciences', detail: 'Published Author' },
  { type: 'Book', icon: BookOpen, color: 'from-gold/20 to-yellow-400/10', border: 'border-gold/30', iconColor: 'text-gold', title: 'Entrepreneurship & Innovation – From Idea to Market', detail: 'Published Author' },
  { type: 'PhD Thesis', icon: FileText, color: 'from-teal/20 to-cyan-400/10', border: 'border-teal/30', iconColor: 'text-teal', title: 'Development of Phonetic Based Packaged Programme and Its Effectiveness on Academic Achievement of Students with Dyslexia', detail: 'S.G.B. Amravati University, 2018' },
  { type: 'Book Chapter', icon: FileText, color: 'from-teal/20 to-cyan-400/10', border: 'border-teal/30', iconColor: 'text-teal', title: 'Impact of Design Thinking On Teaching and Learning', detail: 'Published Book Chapter' },
  { type: 'Keynote Speaker', icon: Mic, color: 'from-gold/20 to-yellow-400/10', border: 'border-gold/30', iconColor: 'text-gold', title: 'National Conference on Ethical Implications of AI in Education', detail: "GVM's Dr. Dada Vaida College of Education, Ponda, Goa" },
  { type: 'Conference Paper', icon: Mic, color: 'from-teal/20 to-cyan-400/10', border: 'border-teal/30', iconColor: 'text-teal', title: 'Transforming Teaching by Integrating Design Thinking with Experiential Learning', detail: 'ICIA 2024 – Islamic University of Maldives' },
  { type: 'Best Paper Award', icon: Award, color: 'from-gold/20 to-yellow-400/10', border: 'border-gold/30', iconColor: 'text-gold', title: 'Best Research Paper at 56th Annual National Conference of IATE', detail: 'Indian Knowledge System – Feb 2024, YCMOU Nashik' },
  { type: 'Honorary Chair', icon: Star, color: 'from-teal/20 to-cyan-400/10', border: 'border-teal/30', iconColor: 'text-teal', title: '5th International Conference on Machine Learning and Big Data Analytics', detail: 'Honorary Chair – 2025' },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`bg-card border ${pub.border} rounded-[16px] p-6 bg-gradient-to-br ${pub.color} card-3d shadow-card-premium min-h-[160px] flex flex-col`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-[12px] bg-background/80 flex items-center justify-center flex-shrink-0">
                  <pub.icon className={`w-5 h-5 ${pub.iconColor}`} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider ${pub.iconColor}`}>{pub.type}</span>
              </div>
              <h3 className="font-semibold text-foreground text-sm leading-snug mb-2 flex-1">
                {pub.title}
              </h3>
              <p className="text-xs text-muted-foreground">{pub.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
