import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const conferences = [
  { year: '2025', title: 'Honorary Chair – 5th International Conference on ML & Big Data Analytics', type: 'Chair', location: '' },
  { year: '2024', title: 'Keynote Speaker – National Conference on Ethical Implications of AI in Education', type: 'Keynote', location: 'Ponda, Goa' },
  { year: '2024', title: 'ICIA 2024 – Paper: Integrating Design Thinking with Experiential Learning', type: 'Paper Presentation', location: 'Islamic University of Maldives' },
  { year: '2024', title: 'Best Research Paper – 56th IATE Conference on Indian Knowledge System', type: 'Award', location: 'YCMOU, Nashik' },
  { year: '2024', title: 'Paper at SDG4-Quality Education Conference – Jan 10-11', type: 'Paper Presentation', location: '' },
  { year: '2024', title: 'Expert Session at Army Law College Symposium – Pathways to Success (May 5)', type: 'Expert Session', location: '' },
  { year: '2024', title: 'Design Thinking Paper – MJTC, Kerala (March 2)', type: 'Paper Presentation', location: 'Kerala' },
  { year: '2023', title: 'International Conference: Future of Universities – Symbiosis (June 19-21)', type: 'Attended', location: 'Pune' },
  { year: '2023', title: 'FDPs at Symbiosis Institute of Technology (Mech Dept) & YCMOU', type: 'FDP', location: '' },
  { year: '2020', title: "4th National Teachers' Congress (Dec 15-18)", type: 'Attended', location: '' },
  { year: '2019', title: 'National Conference – Impact of NEP 2019 on Current Education System (Dec 16-17)', type: 'Attended', location: '' },
  { year: '2012', title: 'One Day Workshop on Gender and Education', type: 'Workshop', location: 'Amravati' },
  { year: '2009', title: 'State Level Seminar – Indian Writing in English in Post-Modern Era', type: 'Seminar', location: 'Telhara' },
  { year: '2003', title: 'Fourth Annual Conference of NUETO', type: 'Conference', location: 'Nagpur' },
  { year: '2003', title: 'State Level Seminar – Evaluation Techniques & Studies in Literature', type: 'Seminar', location: 'Nagpur' },
  { year: '2000', title: 'Workshop on Unity in Diversity (Ford Foundation, USA)', type: 'Workshop', location: 'Nagpur' },
];

const typeColors: Record<string, string> = {
  Chair: 'bg-gold/20 text-gold border-gold/30',
  Keynote: 'bg-teal/20 text-teal border-teal/30',
  'Paper Presentation': 'bg-gold/10 text-gold border-gold/20',
  Award: 'bg-gold/20 text-gold border-gold/30',
  'Expert Session': 'bg-teal/10 text-teal border-teal/20',
  Attended: 'bg-muted text-muted-foreground border-border',
  FDP: 'bg-muted text-muted-foreground border-border',
  Workshop: 'bg-teal/10 text-teal border-teal/20',
  Seminar: 'bg-gold/10 text-gold border-gold/20',
  Conference: 'bg-muted text-muted-foreground border-border',
};

const Conferences: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="conferences" className="section-padding bg-muted/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-2">{t.conferences.heading}</h2>
          <p className="text-muted-foreground">{t.conferences.subheading}</p>
          <div className="w-20 h-1 gradient-gold mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-3">
          {conferences.map((conf, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="bg-card border border-border rounded-[16px] p-4 flex items-start gap-4 shadow-card-premium card-3d"
            >
              <div className="flex items-center gap-2 flex-shrink-0">
                <Calendar className="w-4 h-4 text-gold" />
                <span className="text-xs font-bold text-gold min-w-[36px]">{conf.year}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-foreground leading-snug">{conf.title}</h3>
                {conf.location && (
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{conf.location}</span>
                  </div>
                )}
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full border flex-shrink-0 ${typeColors[conf.type] || 'bg-muted text-muted-foreground border-border'}`}>
                {conf.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conferences;
