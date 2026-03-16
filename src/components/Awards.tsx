import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Medal } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const awards = [
  { icon: Trophy, title: 'London Book of World Record Award', detail: 'For Training and Social Contribution', tier: 'gold' },
  { icon: Star, title: 'Best Research Paper Award', detail: '56th IATE Conference by YCMOU, Nashik – Feb 2024', tier: 'gold' },
  { icon: Award, title: 'PMA Coordinator Selection', detail: 'Selected as PMA Coordinator for MES BBA & MBA College', tier: 'teal' },
  { icon: Medal, title: 'STAR CONTRIBUTOR AWARD TZP', detail: 'Star Contributor Recognition', tier: 'gold' },
  { icon: Trophy, title: 'Judge / Panelist – Idea Pitch', detail: 'Symbiosis, Pune – Innovation Panel', tier: 'teal' },
  { icon: Star, title: 'Felicitation at Abhikalpana Sanman Sohala', detail: 'Mumbai – Special Recognition', tier: 'gold' },
  { icon: Award, title: 'Felicitation as Guest Speaker', detail: 'MGM University, Ch. Sambhaji Nagar', tier: 'teal' },
  { icon: Medal, title: 'Felicitation as Guest Speaker', detail: 'Shreeyas Engineering College, Ch. Sambhaji Nagar', tier: 'gold' },
  { icon: Trophy, title: 'THE GURU 2021', detail: 'Excellence in Teaching & Mentorship', tier: 'teal' },
  { icon: Star, title: 'BEST LEADER 2020', detail: 'Outstanding Leadership Recognition', tier: 'gold' },
  { icon: Award, title: 'VYAPAR JAGAT AWARD', detail: 'Business & Social Excellence', tier: 'teal' },
  { icon: Medal, title: 'And Many More...', detail: 'Continued recognition across institutions and conferences', tier: 'gold' },
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

        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`bg-card border rounded-[16px] p-6 text-center award-card-hover shadow-card-premium cursor-default flex flex-col items-center min-h-[210px] justify-center ${
                award.tier === 'gold' ? 'border-gold/30' : 'border-teal/30'
              }`}
            >
              <div className={`w-10 h-10 rounded-full mx-auto mb-4 flex items-center justify-center ${
                award.tier === 'gold' ? 'gradient-gold shadow-gold' : 'bg-teal shadow-glow'
              }`}>
                <award.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-foreground text-sm leading-tight mb-2">
                {award.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{award.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
