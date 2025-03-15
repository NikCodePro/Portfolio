import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsTwitter, BsEnvelope, BsChevronRight } from 'react-icons/bs';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  
  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Showcase", path: "/showcase" },
        { name: "Contact", path: "/contact" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Web Development", path: "/services#web" },
        { name: "App Development", path: "/services#app" },
        { name: "Digital Marketing", path: "/services#marketing" },
        { name: "UI/UX Design", path: "/services#design" },
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "Email Us", path: "mailto:contact@example.com" },
        { name: "Call Us", path: "tel:+1234567890" },
        { name: "Support", path: "/contact" },
        { name: "FAQ", path: "/faq" },
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

  return (
    <footer className={`w-full ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      {/* Decorative Top Border */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <motion.h2 
                className="text-2xl font-bold"
                whileHover={{ scale: 1.05 }}
              >
                Your Brand
              </motion.h2>
            </Link>
            <p className="text-sm md:text-base opacity-75 mb-6">
              Transforming ideas into digital excellence through innovative solutions and cutting-edge technology.
            </p>
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
        
        {/* Social Links & Copyright */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"
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