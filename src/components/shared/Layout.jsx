import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { themeConfig } from '../../styles/theme';

export const Layout = ({ children, className = '' }) => {
  const { theme } = useTheme();
  const currentTheme = themeConfig[theme];

  return (
    <motion.div 
      className={`min-h-screen relative ${currentTheme.background.main} ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute w-[500px] h-[500px] ${currentTheme.primary.solid}/10 rounded-full filter blur-3xl`}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className={`absolute right-0 w-[500px] h-[500px] ${currentTheme.primary.solid}/10 rounded-full filter blur-3xl`}
          animate={{
            y: [0, 20, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
};