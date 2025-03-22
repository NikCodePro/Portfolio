import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/shared/Layout';
import { useAnimations } from '../hooks/useAnimations';
import { useTheme } from '../context/ThemeContext';
import { themeConfig } from '../styles/theme';
import { BsCode, BsServer, BsGlobe, BsBrush } from 'react-icons/bs';

const Services = () => {
  const { theme } = useTheme();
  const currentTheme = themeConfig[theme];
  const { fadeInUp, staggerContainer, hoverScale } = useAnimations();

  const services = [
    {
      icon: <BsCode size={24} />,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies",
      features: [
        "Custom web applications",
        "E-commerce solutions",
        "Progressive Web Apps (PWA)",
        "API development"
      ]
    },
    // Add more services...
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-24">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className={`${currentTheme.text.secondary} max-w-2xl mx-auto`}>
            Comprehensive solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={hoverScale}
              className={`p-8 rounded-xl ${currentTheme.glass} ${currentTheme.border}`}
            >
              <div className={`w-12 h-12 rounded-lg ${currentTheme.primary.solid} flex items-center justify-center text-white mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className={`${currentTheme.text.secondary} mb-6`}>
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className={`mr-2 ${currentTheme.text.accent}`}>•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Layout>
  );
};

export default Services;