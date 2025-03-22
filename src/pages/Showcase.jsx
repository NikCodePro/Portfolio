import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/shared/Layout';
import { useAnimations } from '../hooks/useAnimations';
import { images } from '../constants/images';
import { useTheme } from '../context/ThemeContext';
import { themeConfig } from '../styles/theme';

const Showcase = () => {
  const { theme } = useTheme();
  const currentTheme = themeConfig[theme];
  const { fadeInUp, staggerContainer } = useAnimations();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? images.projects
    : images.projects.filter(project => project.category === selectedCategory);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-24">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className={`${currentTheme.text.secondary} max-w-2xl mx-auto`}>
            Explore our portfolio of innovative solutions across various industries
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {images.projectCategories.map((category, index) => (
            <motion.button
              key={index}
              variants={fadeInUp}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? `${currentTheme.primary.solid} text-white`
                  : `${currentTheme.glass} ${currentTheme.border}`
              } transition-all duration-300`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className={`group relative overflow-hidden rounded-xl ${currentTheme.glass} ${currentTheme.border}`}
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`${currentTheme.text.secondary} mb-4`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-xs px-2 py-1 rounded-full ${currentTheme.glass}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Showcase;