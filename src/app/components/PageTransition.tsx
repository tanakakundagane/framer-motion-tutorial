"use client";

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, ReactNode } from 'react';

const pageVariants = {
  initial: {
    opacity: 0,
    x: "100%",
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    x: "-100%",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleComplete = () => {
      setIsAnimating(false);
    };

    // Simulate route change events (for demo purposes)
    handleStart();
    handleComplete();

    return () => {
      // Clean up listeners if needed
    };
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
