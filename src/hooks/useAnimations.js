import { useAnimation } from 'framer-motion';

export const useAnimations = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const hoverScale = {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300 }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return {
    fadeInUp,
    staggerContainer,
    hoverScale,
    floatingAnimation
  };
};