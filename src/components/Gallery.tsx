import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

import { Dialog, DialogContent } from '@/components/ui/dialog';

import Arpita1 from '@/assets/Arpita1.svg';
import Arpita2 from '@/assets/Arpita2.svg';
import Arpita3 from '@/assets/Arpita3.svg';
import Arpita4 from '@/assets/Arpita4.svg';
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

  const highlightImages = [
    'Felicitation on a special occasion from my Ph.D. Guide, Dr. G. L. Gulhane.png',
    'FELICITATION AS A GUEST SPEAKER AT MGM UNIVERSITY.png',
    'SHREEYASH COLLEGE OF ENGINEERING, CH. SAMBHAJI NAGAR.png',
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

        <div className="grid lg:grid-cols-12 gap-2.5 sm:gap-3 items-stretch rounded-[10px] bg-card p-2 sm:p-3 shadow-card-premium">
          {/* Left collage: four smaller images */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-2.5 sm:gap-3 auto-rows-[128px] sm:auto-rows-[170px] md:auto-rows-[205px]">
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
                  className="relative h-full rounded-[6px] overflow-hidden cursor-zoom-in bg-muted"
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
              className="relative rounded-[6px] overflow-hidden cursor-zoom-in bg-muted h-[268px] sm:h-[350px] md:h-[422px] lg:h-full lg:min-h-[422px]"
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

        <div className="mt-10">
          <h3 className="mb-4 text-lg font-bold text-foreground">Gallery Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {highlightImages.map((fileName, i) => (
              <motion.div
                key={fileName}
                custom={i + 5}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group rounded-[16px] border border-border bg-card p-3 shadow-card-premium transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden rounded-[12px] border border-border/70 bg-muted">
                  <img
                    src={`/assets/awards/${fileName}`}
                    alt={fileName}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-2 top-2 rounded-full border border-teal/30 bg-background/85 px-2 py-0.5 text-[10px] font-semibold text-teal">
                    Gallery
                  </span>
                </div>
                <h4 className="px-1 pt-3 text-sm font-semibold leading-snug text-foreground">{fileName}</h4>
              </motion.div>
            ))}
          </div>
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
