import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, BookOpen, Heart, Brain, Zap, MessageSquare, Shield,
         Activity, Smile, Handshake, Mail, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const general = [
  { icon: Lightbulb, title: 'Design Thinking' },
  { icon: BookOpen, title: 'Resume Writing' },
  { icon: Users, title: 'Interview Techniques' },
  { icon: Activity, title: 'Body Language & Appearance' },
  { icon: Shield, title: 'Ethics & Professionalism' },
  { icon: Target, title: 'Importance of NDA' },
  { icon: MessageSquare, title: 'Communication Techniques' },
  { icon: BookOpen, title: 'Imbibing Values' },
  { icon: Brain, title: 'Stress Management' },
  { icon: Handshake, title: 'Bonding Activities' },
  { icon: Users, title: 'Culture Settings' },
  { icon: Zap, title: 'AI Ethics in Academics' },
];

const specialized = [
  { icon: Heart, title: 'Soft Skills & Design Thinking' },
  { icon: Users, title: 'Organizational Cultural Competence' },
  { icon: Shield, title: 'Work Ethics & Professionalism' },
  { icon: MessageSquare, title: 'Communication Techniques' },
  { icon: Brain, title: 'Stress Management' },
  { icon: Activity, title: 'Feedback Handling' },
  { icon: Mail, title: 'Email Ethics' },
  { icon: Handshake, title: 'Interpersonal Skills' },
  { icon: Smile, title: 'Ethical Gossiping' },
  { icon: Heart, title: 'Emotional Intelligence' },
  { icon: Users, title: 'Teamwork & Collaboration' },
  { icon: Lightbulb, title: 'Design Thinking' },
  { icon: Brain, title: 'Critical Thinking' },
  { icon: Heart, title: 'Emotional Thinking' },
  { icon: Target, title: 'Logical Thinking' },
];

const Workshops: React.FC = () => {
  const { t } = useLanguage();
  const [tab, setTab] = useState<'general' | 'specialized'>('general');
  const items = tab === 'general' ? general : specialized;

  return (
    <section id="workshops" className="section-padding bg-background">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="section-heading mb-2">{t.workshops.heading}</h2>
          <p className="text-muted-foreground">{t.workshops.subheading}</p>
          <div className="w-20 h-1 gradient-gold mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {(['general', 'specialized'] as const).map(tab_name => (
            <button
              key={tab_name}
              onClick={() => setTab(tab_name)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                tab === tab_name
                  ? 'gradient-gold text-white shadow-gold'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab_name === 'general' ? t.workshops.general : t.workshops.specialized}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={`${tab}-${i}`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className={`bg-card border rounded-[16px] p-5 text-center card-3d shadow-card-premium flex flex-col items-center justify-center min-h-[110px] ${
                i % 2 === 0 ? 'border-gold/20' : 'border-teal/20'
              }`}
            >
              <div className={`w-10 h-10 rounded-[12px] mx-auto mb-3 flex items-center justify-center ${
                i % 2 === 0 ? 'bg-gold/10' : 'bg-teal/10'
              }`}>
                <item.icon className={`w-5 h-5 ${i % 2 === 0 ? 'text-gold' : 'text-teal'}`} />
              </div>
              <h3 className="text-xs font-semibold text-foreground leading-tight">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
