import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full text-white shadow-lg hover:shadow-xl z-40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 overflow-hidden group animate-shine"
          style={{
            backgroundSize: '200% 100%',
            backgroundImage: 'linear-gradient(110deg, #334155 45%, #94a3b8 50%, #334155 55%)', // Silver shine on dark slate base
            animationDuration: '3s'
          }}
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;