import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Lightbulb,
  BookOpen,
  Heart,
  Brain,
  MessageSquare,
  Shield,
  Activity,
  Handshake,
  Mail,
  Target,
  Briefcase,
  Building2,
  GraduationCap,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const academicTraining = [
  { icon: Lightbulb, title: 'Design Thinking' },
  { icon: GraduationCap, title: 'Student Workshops' },
  { icon: MessageSquare, title: 'Seminars & Communication Sessions' },
  { icon: BookOpen, title: 'Resume Writing' },
  { icon: Users, title: 'Interview Techniques' },
  { icon: Activity, title: 'Body Language & Appearance' },
  { icon: Shield, title: 'Ethics & Professionalism' },
  { icon: Brain, title: 'Stress Management' },
  { icon: Handshake, title: 'Bonding Activities' },
  { icon: Brain, title: 'Critical Thinking' },
  { icon: Heart, title: 'Emotional Intelligence' },
  { icon: Target, title: 'Logical Application for Learning' },
];

const corporateTraining = [
  { icon: Lightbulb, title: 'Design Thinking' },
  { icon: Building2, title: 'Industry Sessions' },
  { icon: Briefcase, title: 'Professional Development Programs' },
  { icon: Heart, title: 'Soft Skills & Design Thinking' },
  { icon: Shield, title: 'Work Ethics & Professionalism' },
  { icon: MessageSquare, title: 'Communication Techniques' },
  { icon: Brain, title: 'Stress Management' },
  { icon: Activity, title: 'Feedback Handling' },
  { icon: Mail, title: 'Email Ethics' },
  { icon: Handshake, title: 'Interpersonal Skills' },
  { icon: Users, title: 'Teamwork & Collaboration' },
  { icon: Heart, title: 'Emotional Intelligence' },
];

const Workshops: React.FC = () => {
  const { t } = useLanguage();
  const [tab, setTab] = useState<'academic' | 'corporate'>('academic');
  const items = tab === 'academic' ? academicTraining : corporateTraining;

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 rounded-[16px] border border-gold/30 bg-gold/10 p-4"
        >
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Priority</span>
            <h3 className="text-sm font-bold text-foreground">Design Thinking</h3>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Design Thinking is featured as the primary capability across both academic and corporate training tracks.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {(['academic', 'corporate'] as const).map(tab_name => (
            <button
              key={tab_name}
              onClick={() => setTab(tab_name)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                tab === tab_name
                  ? 'gradient-gold text-white shadow-gold'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab_name === 'academic' ? 'Academic (Student-focused)' : 'Corporate Training'}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 text-xs mb-6">
          <span className="rounded-full border border-border bg-card px-3 py-1 text-muted-foreground">Workshops</span>
          <span className="rounded-full border border-border bg-card px-3 py-1 text-muted-foreground">Seminars</span>
          <span className="rounded-full border border-border bg-card px-3 py-1 text-muted-foreground">Training Sessions</span>
          <span className="rounded-full border border-border bg-card px-3 py-1 text-muted-foreground">Industry Programs</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={`${tab}-${i}`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className={`bg-card border rounded-[16px] p-5 text-center card-3d shadow-card-premium flex flex-col items-center justify-center min-h-[118px] transition-transform hover:-translate-y-1 ${
                i === 0 ? 'border-gold ring-1 ring-gold/30 bg-gold/5' : i % 2 === 0 ? 'border-gold/20' : 'border-teal/20'
              }`}
            >
              <div className={`w-10 h-10 rounded-[12px] mx-auto mb-3 flex items-center justify-center ${
                i === 0 ? 'bg-gold/20' : i % 2 === 0 ? 'bg-gold/10' : 'bg-teal/10'
              }`}>
                <item.icon className={`w-5 h-5 ${i === 0 || i % 2 === 0 ? 'text-gold' : 'text-teal'}`} />
              </div>
              <h3 className={`text-xs font-semibold leading-tight ${i === 0 ? 'text-gold' : 'text-foreground'}`}>{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
