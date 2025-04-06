import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/shared/Layout';
import { useTheme } from '../context/ThemeContext';
import { FiAirplay, FiLoader } from 'react-icons/fi';

const Showcase = () => {
  const { theme } = useTheme();
  const textColorClass = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const bgColorClass = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100';

  return (
    <Layout>
      <motion.div
        className={`flex flex-col items-center justify-center h-screen ${bgColorClass}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={`text-4xl font-bold mb-4 ${textColorClass}`}>
          Showcase Page
        </h1>
        <p className={`text-lg ${textColorClass} text-center`}>
          Coming Soon!
        </p>
        <motion.div
          className="mt-8"
          animate={{ rotate: 360 }}
          transition={{
            loop: Infinity,
            duration: 2,
            ease: "linear"
          }}
        >
          <FiLoader className="font-stretch-extra-condensed"/>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Showcase;