import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  width?: 'fit-content' | '100%';
}

const Reveal: React.FC<RevealProps> = ({ children, delay = 0.25, width = 'fit-content' }) => {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  if (shouldReduceMotion) {
    return <div style={{ width }}>{children}</div>;
  }

  return (
    <div style={{ width, overflow: 'visible' }}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;