import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email is required.';
    if (!form.message.trim() || form.message.length < 10) errs.message = 'Message must be at least 10 characters.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
    const text = encodeURIComponent(
      `Hello Dr. Arpita,\n\nMy name is ${form.name}.\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/919890451547?text=${text}`, '_blank');
    toast({ title: t.contact.success, description: t.contact.successDesc });
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: 'arpita@idealizeer.in', href: 'mailto:arpita@idealizeer.in' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Dr. Arpita Kathane', href: 'https://www.linkedin.com/in/dr-arpita-kathane-8683461a1/' },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-2">{t.contact.heading}</h2>
          <p className="text-muted-foreground">{t.contact.subheading}</p>
          <div className="w-20 h-1 gradient-gold mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-foreground mb-4">
              Contact Information
            </h3>
            {contactItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 group p-4 min-h-[88px] bg-card border border-border rounded-[16px] shadow-card-premium card-3d"
              >
                <div className="w-10 h-10 rounded-[12px] bg-gradient-to-br from-gold/20 to-yellow-400/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</div>
                  <div className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">{item.value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-border rounded-[16px] p-6 shadow-card-premium">
              <h3 className="text-xl font-bold text-foreground mb-5">
                Send a Message
              </h3>
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-teal mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-foreground mb-2">{t.contact.success}</h4>
                  <p className="text-muted-foreground text-sm">{t.contact.successDesc}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder={t.contact.name}
                        value={form.name}
                        onChange={e => setForm(prev => ({ ...prev, name: e.target.value }))}
                        className={`h-12 w-full bg-muted/50 rounded-[12px] focus-visible:ring-2 focus-visible:ring-gold/60 ${errors.name ? 'border-destructive' : ''}`}
                      />
                      {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder={t.contact.email}
                        value={form.email}
                        onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                        className={`h-12 w-full bg-muted/50 rounded-[12px] focus-visible:ring-2 focus-visible:ring-gold/60 ${errors.email ? 'border-destructive' : ''}`}
                      />
                      {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <Textarea
                      placeholder={t.contact.message}
                      value={form.message}
                      onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                      rows={5}
                      className={`w-full bg-muted/50 resize-none rounded-[12px] focus-visible:ring-2 focus-visible:ring-gold/60 ${errors.message ? 'border-destructive' : ''}`}
                    />
                    {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                  </div>
                  <div className="flex justify-center pt-1">
                    <Button
                      type="submit"
                      className="h-12 min-w-[180px] px-8 gradient-gold text-white border-0 shadow-gold hover:opacity-90 font-semibold gap-2 rounded-[12px]"
                    >
                      <Send className="w-4 h-4" />
                      {t.contact.send}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
