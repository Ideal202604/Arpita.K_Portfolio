import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Lightbulb, Heart, Users, BookOpen, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const positions = [
  'Subject Expert & Panel Member for Learning Disability at YCMOU',
  'Coordinator at PMA (PMA Coordinator selected)',
  'Mentor at BYST (Bharatiya Yuva Shakti Trust)',
  'Design Thinking Expert for various projects',
  'Content Editing Committee Member at YCMOU for Indian Knowledge System (IKS) script',
];

const ldContributions = [
  { icon: Heart, title: 'Diagnostic Test Development', detail: 'Created a comprehensive diagnostic test to identify LD indicators early.' },
  { icon: BookOpen, title: 'Customized Remedial Modules', detail: 'Developed tailored remedial modules to address specific LD challenges.' },
  { icon: Users, title: 'Parent Counselling', detail: 'Conducted extensive parent counselling sessions for support.' },
  { icon: Award, title: 'Educator Workshops', detail: 'Spearheaded workshops for educators with strategies to support LD individuals.' },
  { icon: CheckCircle, title: 'Community Partnerships', detail: 'Established partnerships to promote LD awareness and inclusion.' },
  { icon: Lightbulb, title: 'Awareness Campaigns', detail: 'Initiated awareness campaigns in communities and institutions.' },
];

const dtContributions = [
  { icon: Users, title: 'Empowering Students & Teachers', detail: 'Cultivating innovation by empowering Design Thinking methodologies.' },
  { icon: Lightbulb, title: 'Mindset Shifting', detail: 'Guiding students to embrace creativity through Design Thinking.' },
  { icon: CheckCircle, title: 'Mentorship & Support', detail: 'Providing continuous mentorship for innovation journeys.' },
  { icon: Award, title: 'Professional Workshops', detail: 'Conducting workshops to enhance professional Design Thinking application.' },
  { icon: BookOpen, title: 'Conference Presentations', detail: 'Sharing insights through paper presentations at conferences.' },
  { icon: Heart, title: 'Start-up Mentoring', detail: 'Mentoring entrepreneurs in applying Design Thinking for innovation.' },
];

const Contributions: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contributions" className="section-padding bg-muted/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-2">{t.contributions.heading}</h2>
          <p className="text-muted-foreground">{t.contributions.subheading}</p>
          <div className="w-20 h-1 gradient-gold mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Positions Held */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h3 className="text-xl font-bold text-foreground mb-5 text-center">
            {t.contributions.positions}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {positions.map((pos, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-card border border-gold/20 rounded-[16px] p-4 flex items-start gap-3 shadow-card-premium card-3d"
              >
                <div className="w-6 h-6 rounded-full gradient-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">{i + 1}</span>
                </div>
                <p className="text-sm text-foreground font-medium leading-snug">{pos}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dual column contributions */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* LD Field */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-gold/20 rounded-[16px] p-6 shadow-card-premium h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-[12px] gradient-gold flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {t.contributions.ldField}
                </h3>
              </div>
              <div className="space-y-3">
                {ldContributions.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{item.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Design Thinking Field */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-teal/20 rounded-[16px] p-6 shadow-card-premium h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-[12px] bg-teal flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {t.contributions.dtField}
                </h3>
              </div>
              <div className="space-y-3">
                {dtContributions.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{item.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;
