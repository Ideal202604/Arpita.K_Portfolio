import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAwardImageClass, isStraightFrameImage } from '@/lib/awardImageDisplay';
import { formatTitle } from '@/lib/formatTitle';

const conferences = [
  { year: '2024', title: 'Design Thinking Paper - MJTC, Kerala (March 2)', type: 'Paper Presentation', location: 'Kerala' },
  { year: '2024', title: 'ICIA 2024 – Paper: Integrating Design Thinking with Experiential Learning', type: 'Paper Presentation', location: 'Islamic University of Maldives' },
  { year: '2024', title: 'Best Research Paper – 56th IATE Conference on Indian Knowledge System', type: 'Award', location: 'YCMOU, Nashik' },
  { year: '2024', title: 'Paper at SDG4-Quality Education Conference – Jan 10-11', type: 'Paper Presentation', location: '' },
  { year: '2024', title: 'Expert Session at Army Law College Symposium – Pathways to Success (May 5)', type: 'Expert Session', location: '' },
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

const conferenceImages = [
  'UNI 20-G20 CONFERENCE.png',
  'UNI 20-G20 CONFERENCE WITH DELEGATES.png',
  'UNI 20-G20 CONFERENCE WITH DELEGATES2.png',
  'CONFERENCE ON NEP, ORGANIZED AT D Y PATIL, PIMPRI.png',
];

const typeColors: Record<string, string> = {
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {conferences.map((conf, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group bg-card border border-border rounded-[16px] p-5 shadow-card-premium card-3d hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <div className="mb-4 h-1 w-14 rounded-full bg-gradient-to-r from-gold/70 to-teal/60" />
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span className="text-xs font-bold text-gold min-w-[36px]">{conf.year}</span>
                </div>
                <span className={`text-[11px] font-medium px-2 py-1 rounded-full border flex-shrink-0 ${typeColors[conf.type] || 'bg-muted text-muted-foreground border-border'}`}>
                  {conf.type}
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold leading-snug text-foreground group-hover:text-gold transition-colors">{conf.title}</h3>
                <div className="mt-2 min-h-4">
                  {conf.location ? (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{conf.location}</span>
                    </div>
                  ) : (
                    <span className="text-xs text-muted-foreground">Venue details available on request</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="mb-4 text-lg font-bold text-foreground">Conference Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            {conferenceImages.map((fileName, i) => (
              <motion.div
                key={fileName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group h-full rounded-[16px] border border-border bg-card p-3 shadow-card-premium transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden rounded-[12px] border border-border/70 bg-muted/20 p-2">
                  <img
                    src={`/assets/awards/${fileName}`}
                    alt={fileName}
                    loading="lazy"
                    className={`${getAwardImageClass(fileName)} ${isStraightFrameImage(fileName) ? '' : 'transition-transform duration-300 group-hover:scale-105'}`}
                  />
                  <span className="absolute left-2 top-2 rounded-full border border-teal/30 bg-background/85 px-2 py-0.5 text-[10px] font-semibold text-teal">
                    Conference
                  </span>
                </div>
                <h4 className="px-1 pt-3 text-sm font-semibold leading-snug text-foreground min-h-[3.25rem]">{formatTitle(fileName)}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conferences;
