import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsTwitter, BsEnvelope, BsChevronRight, BsArrowUp } from 'react-icons/bs';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  
  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Showcase", path: "/showcase" },
        { name: "Contact", path: "/contact" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", path: "" },
        { name: "App Development", path: "" },
        { name: "Digital Marketing", path: "" },
        { name: "UI/UX Design", path: "" },
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "Email Us", path: "mailto:contact@example.com" },
        { name: "Call Us", path: "tel:+1234567890" },
        { name: "Support", path: "/contact" },
      ]
    }
  ];
  
  const socialLinks = [
    { icon: <BsGithub size={20} />, url: "https://github.com" },
    { icon: <BsLinkedin size={20} />, url: "https://linkedin.com" },
    { icon: <BsTwitter size={20} />, url: "https://twitter.com" },
    { icon: <BsEnvelope size={20} />, url: "mailto:contact@example.com" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const socialIconVariants = {
    hover: {
      y: -5,
      scale: 1.2,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative w-full ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white' 
        : 'bg-gradient-to-b from-gray-50 via-gray-100 to-white text-gray-800'
    }`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[100px] transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[100px] transform translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Decorative Top Border with enhanced gradient */}
      <div className="relative w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse" />
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`absolute -top-5 right-8 p-3 rounded-full shadow-lg backdrop-blur-sm ${
          theme === 'dark' 
            ? 'bg-gray-800/80 text-white hover:bg-gray-700/80' 
            : 'bg-white/80 text-gray-800 hover:bg-gray-50/80'
        }`}
        whileHover={{ y: -2, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <BsArrowUp size={20} />
      </motion.button>
      
      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section with Newsletter */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <motion.h2 
                className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Your Brand
              </motion.h2>
            </Link>
            <p className={`text-sm md:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
              Transforming ideas into digital excellence through innovative solutions and cutting-edge technology.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold mb-3">Stay Updated</h3>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`flex-1 px-4 py-2 rounded-lg text-sm ${
                    theme === 'dark' 
                      ? 'bg-gray-800/50 border-gray-700' 
                      : 'bg-white/50 border-gray-200'
                  } border backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium hover:opacity-90"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
          
          {/* Links Sections */}
          {footerLinks.map((section, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="col-span-1"
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <motion.li 
                    key={linkIdx}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link 
                      to={link.path} 
                      className="flex items-center text-sm md:text-base opacity-75 hover:opacity-100"
                    >
                      <BsChevronRight className="mr-2 text-xs opacity-75" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Social Links & Copyright with glass effect */}
        <motion.div 
          className={`mt-16 pt-8 border-t ${
            theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
          } flex flex-col md:flex-row justify-between items-center`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                variants={socialIconVariants}
                whileHover="hover"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.p variants={itemVariants} className="text-sm opacity-75">
            © {new Date().getFullYear()} Your Brand. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;