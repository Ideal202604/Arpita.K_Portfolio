import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen, Users, PenTool, Heart, Settings,
  BarChart, Layers, Wrench, Search, FileText
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const skills = [
  { icon: BookOpen, title: 'Curriculum Development', color: 'from-gold/20 to-yellow-400/10', border: 'border-gold/20', iconColor: 'text-gold' },
  { icon: Users, title: 'Communication & Body Language', color: 'from-teal/20 to-cyan-400/10', border: 'border-teal/20', iconColor: 'text-teal' },
  { icon: Layers, title: 'Training & Development', color: 'from-gold/20 to-yellow-400/10', border: 'border-gold/20', iconColor: 'text-gold' },
  { icon: PenTool, title: 'Technical Writing', color: 'from-teal/20 to-cyan-400/10', border: 'border-teal/20', iconColor: 'text-teal' },
  { icon: Heart, title: 'Counselling & Guidance', color: 'from-gold/20 to-yellow-400/10', border: 'border-gold/20', iconColor: 'text-gold' },
  { icon: Settings, title: 'General Administration', color: 'from-teal/20 to-cyan-400/10', border: 'border-teal/20', iconColor: 'text-teal' },
  { icon: BarChart, title: 'Pedagogical Understanding', color: 'from-gold/20 to-yellow-400/10', border: 'border-gold/20', iconColor: 'text-gold' },
  { icon: Wrench, title: 'Tool Development', color: 'from-teal/20 to-cyan-400/10', border: 'border-teal/20', iconColor: 'text-teal' },
  { icon: Search, title: 'Research Work', color: 'from-gold/20 to-yellow-400/10', border: 'border-gold/20', iconColor: 'text-gold' },
  { icon: FileText, title: 'Publication', color: 'from-teal/20 to-cyan-400/10', border: 'border-teal/20', iconColor: 'text-teal' },
];

const Skills: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-2">{t.skills.heading}</h2>
          <p className="text-muted-foreground">{t.skills.subheading}</p>
          <div className="w-20 h-1 gradient-gold mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] gap-5 lg:gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`bg-card border ${skill.border} rounded-[16px] p-6 bg-gradient-to-br ${skill.color} skill-card-hover cursor-default shadow-card-premium flex flex-col items-center text-center min-h-[180px] justify-center`}
            >
              <div className="w-12 h-12 rounded-[12px] bg-background/85 border border-border/50 flex items-center justify-center mb-4 shadow-sm">
                <skill.icon className={`w-5 h-5 ${skill.iconColor}`} />
              </div>
              <h3 className="font-semibold text-foreground text-sm leading-tight">{skill.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
