import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';

const ScrollNavButtons: React.FC = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowButtons(window.scrollY > 180);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {showButtons && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="fixed bottom-6 right-4 sm:right-6 z-[60] flex flex-col gap-2"
        >
          <button
            type="button"
            aria-label="Scroll to top"
            onClick={scrollToTop}
            className="h-11 w-11 rounded-full border border-border/80 bg-card/85 backdrop-blur-xl shadow-card-premium text-foreground hover:bg-card transition-colors flex items-center justify-center"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Scroll to bottom"
            onClick={scrollToBottom}
            className="h-11 w-11 rounded-full border border-border/80 bg-card/85 backdrop-blur-xl shadow-card-premium text-foreground hover:bg-card transition-colors flex items-center justify-center"
          >
            <ArrowDown className="h-5 w-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollNavButtons;
