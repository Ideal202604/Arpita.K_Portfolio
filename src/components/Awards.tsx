import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { getAwardImageClass, isStraightFrameImage } from '@/lib/awardImageDisplay';
import { formatTitle } from '@/lib/formatTitle';

type AwardItem = {
  src: string;
  title: string;
  localFileName?: string;
};

const awardItems: AwardItem[] = [
  { src: '/assets/awards/London Book of World Record.png', title: formatTitle('London Book of World Record.png'), localFileName: 'London Book of World Record.png' },
  { src: '/assets/awards/London Book of World Record2.png', title: formatTitle('London Book of World Record2.png'), localFileName: 'London Book of World Record2.png' },
  { src: '/assets/awards/BEST Paper Award at YCMOU.png', title: formatTitle('BEST Paper Award at YCMOU.png'), localFileName: 'BEST Paper Award at YCMOU.png' },
  { src: '/assets/awards/BEST Paper Award at YCMOU2.png', title: formatTitle('BEST Paper Award at YCMOU2.png'), localFileName: 'BEST Paper Award at YCMOU2.png' },
  { src: '/assets/awards/BEST Paper Award at YCMOU3.png', title: formatTitle('BEST Paper Award at YCMOU3.png'), localFileName: 'BEST Paper Award at YCMOU3.png' },
  { src: '/assets/awards/VYAPAR JAGAT AWARD.png', title: formatTitle('VYAPAR JAGAT AWARD.png'), localFileName: 'VYAPAR JAGAT AWARD.png' },
  { src: '/assets/awards/VYAPAR JAGAT AWARD2.png', title: formatTitle('VYAPAR JAGAT AWARD2.png'), localFileName: 'VYAPAR JAGAT AWARD2.png' },
  { src: '/assets/awards/STAR CONTRIBUTOR AWARD TZP.png', title: formatTitle('STAR CONTRIBUTOR AWARD TZP.png'), localFileName: 'STAR CONTRIBUTOR AWARD TZP.png' },
  { src: '/assets/awards/THE GURU 2021.png', title: formatTitle('THE GURU 2021.png'), localFileName: 'THE GURU 2021.png' },
  { src: '/assets/awards/BEST LEADER 2020.png', title: formatTitle('BEST LEADER 2020.png'), localFileName: 'BEST LEADER 2020.png' },
  { src: '/assets/awards/Selected as a PMA Coordinator.png', title: formatTitle('Selected as a PMA Coordinator.png'), localFileName: 'Selected as a PMA Coordinator.png' },
  { src: '/assets/awards/Business ICON Award.png', title: formatTitle('Business ICON Award.png'), localFileName: 'Business ICON Award.png' },
  {
    src: 'https://media.licdn.com/dms/image/v2/C4E22AQGzH3VmskXgPQ/feedshare-shrink_800/feedshare-shrink_800/0/1604126498911?e=1776297600&v=beta&t=1K5hmmoQBLR47Tzkwguf9i04ABp7SOKAfKiQGtEowaQ',
    title: 'Successfully completed the Women Startup Programme-IIM Bangalore (NSRCEL).',
  },
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {awardItems.map((item, i) => (
            <motion.div
              key={`${item.title}-${i}`}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group self-start rounded-[16px] border border-border bg-card p-3 shadow-card-premium transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-square overflow-hidden rounded-[12px] border border-border/70 bg-muted/20 p-2">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className={`${getAwardImageClass(item.localFileName ?? item.title)} ${isStraightFrameImage(item.localFileName ?? item.title) ? '' : 'transition-transform duration-300 group-hover:scale-105'}`}
                />
                <span className="absolute left-2 top-2 rounded-full border border-gold/30 bg-background/85 px-2 py-0.5 text-[10px] font-semibold text-gold">
                  Award
                </span>
              </div>
              <h3 className="px-1 pt-3 text-sm font-semibold leading-snug text-foreground">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
