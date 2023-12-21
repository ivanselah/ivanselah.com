'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function PostScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-[60px] max-md:top-[56px] max-sm:top-[40px] left-0 right-0 h-1 bg-teal-300 origin-left"
      style={{ scaleX }}
    />
  );
}
