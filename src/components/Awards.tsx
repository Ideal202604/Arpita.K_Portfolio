import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const awardImages = [
  'London Book of World Record.png',
  'London Book of World Record2.png',
  'BEST Paper Award at YCMOU.png',
  'BEST Paper Award at YCMOU2.png',
  'BEST Paper Award at YCMOU3.png',
  'VYAPAR JAGAT AWARD.png',
  'VYAPAR JAGAT AWARD2.png',
  'STAR CONTRIBUTOR AWARD TZP.png',
  'THE GURU 2021.png',
  'BEST LEADER 2020.png',
  'Selected as a PMA Coordinator.png',
  'Business ICON Award.png',
];

const Awards: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="awards" className="section-padding bg-muted/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-2">{t.awards.heading}</h2>
          <p className="text-muted-foreground">{t.awards.subheading}</p>
          <div className="w-20 h-1 gradient-gold mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {awardImages.map((fileName, i) => (
            <motion.div
              key={fileName}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
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
                  Award
                </span>
              </div>
              <h3 className="px-1 pt-3 text-sm font-semibold leading-snug text-foreground">
                {fileName}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
