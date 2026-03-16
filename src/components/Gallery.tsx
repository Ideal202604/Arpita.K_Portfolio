import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

import { Dialog, DialogContent } from '@/components/ui/dialog';

import Arpita1 from '@/assets/Arpita1.svg';
import Arpita2 from '@/assets/Arpita2.svg';
import Arpita3 from '@/assets/Arpita3.svg';
import Arpita4 from '@/assets/Arpita4.svg';
import Arpita5 from '@/assets/Arpita5.svg';
import ArpitaKathane from '@/assets/Arpita-kathane.svg';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: 'easeOut' },
  }),
};

const Gallery: React.FC = () => {
  const { t } = useLanguage();

  const [previewOpen, setPreviewOpen] = useState(false);
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);

  const featured = { src: ArpitaKathane, alt: 'Gallery featured' };
  const thumbnails = [
    { src: Arpita1, alt: 'Gallery image 1' },
    { src: Arpita2, alt: 'Gallery image 2' },
    { src: Arpita3, alt: 'Gallery image 3' },
    { src: Arpita4, alt: 'Gallery image 4' },
  ];

  const openPreview = (item: { src: string; alt: string }) => {
    setPreview(item);
    setPreviewOpen(true);
  };

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-2">{t.gallery.heading}</h2>
          <p className="text-muted-foreground">{t.gallery.subheading}</p>
          <div className="w-20 h-1 gradient-gold mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-3 lg:gap-4 items-stretch">
          {/* Left collage: four smaller images */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-3 lg:gap-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[210px]">
            {thumbnails.map((item, i) => (
              <motion.div
                key={item.src}
                custom={i + 1}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative h-full rounded-[14px] overflow-hidden cursor-zoom-in"
                  onClick={() => openPreview(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') openPreview(item);
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Right collage: one tall image */}
          <motion.div
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <motion.div
              className="relative rounded-[14px] overflow-hidden cursor-zoom-in h-[290px] sm:h-[370px] md:h-[430px] lg:h-full lg:min-h-[436px]"
              onClick={() => openPreview(featured)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') openPreview(featured);
              }}
            >
              <img
                src={featured.src}
                alt={featured.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>

        <Dialog
          open={previewOpen}
          onOpenChange={(open) => {
            setPreviewOpen(open);
            if (!open) setPreview(null);
          }}
        >
          <DialogContent className="max-w-[min(92vw,1100px)] p-0 overflow-hidden bg-card border-border">
            <div className="relative w-full max-h-[80vh] p-4 sm:p-6 bg-muted/30 flex items-center justify-center">
              {preview ? (
                <img
                  src={preview.src}
                  alt={preview.alt}
                  className="max-w-full max-h-[72vh] object-contain"
                />
              ) : (
                <div className="h-[40vh]" />
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
