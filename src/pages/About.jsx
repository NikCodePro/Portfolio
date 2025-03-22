import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  ChevronDown,
  Users,
  Globe,
  Code,
  Zap,
  Award,
  Briefcase,
  CheckCircle,
} from "lucide-react";
import { useTheme } from '../context/ThemeContext';
import { themeConfig } from '../styles/theme';

const About = () => {
  const { theme } = useTheme();
  const currentTheme = themeConfig[theme];
  const scrollControls = useAnimation();

  useEffect(() => {
    scrollControls.start({
      y: [0, 10, 0],
      transition: { duration: 2, repeat: Infinity },
    });
  }, [scrollControls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className={`min-h-screen ${currentTheme.background.main} transition-colors duration-300`}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Updated gradient background with theme support */}
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90'
            : 'bg-gradient-to-br from-blue-600 to-purple-700 opacity-80'
        }`}>
          <div className="absolute inset-0 opacity-10 bg-pattern"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-white">
          {/* Hero content */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              We Are <span className="text-yellow-300">Innovators</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto font-light"
            >
              Discover our journey, our mission, and the technology that powers
              our vision to transform the digital landscape.
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-8 px-8 py-3 bg-white text-purple-700 rounded-full font-medium hover:bg-yellow-300 hover:text-purple-900 transition duration-300 shadow-lg"
            >
              Our Story
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={scrollControls}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        >
          <ChevronDown size={40} className="animate-pulse" />
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="md:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-30 blur-lg rounded-xl"></div>
                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Our team working together"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="md:w-1/2"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-8 bg-blue-500"></div>
                <h3 className="text-blue-500 font-medium">OUR JOURNEY</h3>
              </div>
              <h2 className={`text-4xl md:text-5xl  font-bold mb-6 leading-tight ${currentTheme.text.primary}`}>
                A Decade of Digital{" "}
                <span className="text-blue-500">Excellence</span>
              </h2>
              <p className={`text-lg leading-relaxed mb-8 ${currentTheme.text.primary}`}>
                We are a forward-thinking IT firm that has been transforming
                businesses through technology since 2013. Our passion is to
                empower organizations with cutting-edge solutions that drive
                growth and innovation. From humble beginnings with just three
                developers, we've grown into a global team of experts dedicated
                to your success.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <Users
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg ${currentTheme.text.primary}`}>Expert Team</h4>
                    <p className="text-gray-800 dark:text-gray-400">
                      50+ certified professionals
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                    <Award
                      className="text-purple-600 dark:text-purple-400"
                      size={24}
                    />
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg ${currentTheme.text.primary}`}>Award Winning</h4>
                    <p className="text-gray-800 dark:text-gray-400">
                      15+ industry awards
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={`py-24 ${currentTheme.background.section}`}>
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className={`inline-block px-3 py-1 ${
              theme === 'dark' 
                ? 'bg-blue-900/40 text-blue-300'
                : 'bg-blue-100 text-blue-600'
            } rounded-full font-medium text-sm mb-4`}>
              OUR PURPOSE
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${currentTheme.text.primary}`}>
              Our Mission
            </h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto mt-2 mb-8 rounded-full"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`${currentTheme.glass} rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden`}
            >
              {/* Mission content */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-purple-500/20 blur-2xl rounded-full transform translate-x-10 -translate-y-10"></div>
              
              <motion.div variants={fadeInUp} className="relative">
                <div className="flex justify-center mb-8">
                  <div className="h-20 w-20 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Zap
                      size={32}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  </div>
                </div>

                <p className={`text-xl md:text-2xl ${currentTheme.text.primary} font-light text-center mb-8 leading-relaxed`}>
                  "To deliver innovative IT solutions that drive growth,
                  streamline operations, and foster digital success for our
                  clients worldwide, creating measurable impact through
                  technology excellence."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <motion.div variants={fadeInUp} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCircle
                          size={24}
                          className="text-green-600 dark:text-green-400"
                        />
                      </div>
                    </div>
                    <h4 className={`${currentTheme.text.primary} font-bold mb-2`}>Excellence</h4>
                    <p className={`${currentTheme.text.primary}`}>
                      Delivering nothing short of exceptional quality
                    </p>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                        <Briefcase
                          size={24}
                          className="text-yellow-600 dark:text-yellow-400"
                        />
                      </div>
                    </div>
                    <h4 className={`${currentTheme.text.primary} font-bold mb-2`}>Innovation</h4>
                    <p className={`${currentTheme.text.primary}`}>
                      Pushing boundaries with creative solutions
                    </p>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <Users
                          size={24}
                          className="text-purple-600 dark:text-purple-400"
                        />
                      </div>
                    </div>
                    <h4 className={`${currentTheme.text.primary} font-bold mb-2`}>Collaboration</h4>
                    <p className={`${currentTheme.text.primary}`}>
                      Working together to achieve shared goals
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className={`py-24 ${currentTheme.background.main}`}>
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className={`inline-block px-3 py-1 ${
              theme === 'dark'
                ? 'bg-purple-900/40 text-purple-300'
                : 'bg-purple-100 text-purple-600'
            } rounded-full font-medium text-sm mb-4`}>
              TECH STACK
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${currentTheme.text.primary}`}>
              Technologies We Use
            </h2>
            <div className="h-1 w-20 bg-purple-500 mx-auto mt-2 mb-8 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-800 dark:text-gray-400">
              We leverage cutting-edge technologies to build scalable, robust, and
              efficient solutions for our clients.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8"
          >
            {/* Tech stack cards */}
            {[
              { name: "React", icon: <Code size={24} /> },
              { name: "Node.js", icon: <Code size={24} /> },
              { name: "Express", icon: <Code size={24} /> },
              { name: "MongoDB", icon: <Code size={24} /> },
              { name: "Tailwind CSS", icon: <Code size={24} /> },
              { name: "Framer Motion", icon: <Code size={24} /> },
              { name: "Firebase", icon: <Code size={24} /> },
              { name: "GraphQL", icon: <Code size={24} /> },
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`${currentTheme.glass} rounded-xl shadow-lg hover:shadow-xl 
                  transition-all duration-300 p-6 group hover:-translate-y-2`}
              >
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 mb-4 w-12 h-12 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <div className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300">
                    {tech.icon}
                  </div>
                </div>
                <h3 className="font-bold text-lg">{tech.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className={`${currentTheme.background.section} py-24`}>
        <div className="container mx-auto px-6">
          {/* Section header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className={`inline-block px-3 py-1 ${
              theme === 'dark'
                ? 'bg-green-900/40 text-green-300'
                : 'bg-green-100 text-green-600'
            } rounded-full font-medium text-sm mb-4`}>
              GLOBAL IMPACT
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${currentTheme.text.primary}`}>
              Our Global Reach
            </h2>
            <div className="h-1 w-20 bg-green-500 mx-auto mt-2 mb-8 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-800 dark:text-gray-400">
              With a presence in multiple countries, our innovative solutions
              empower businesses across the globe.
            </p>
          </motion.div>

          <div className="relative mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://cdn.pixabay.com/photo/2018/03/15/16/11/background-3228704_1280.jpg"
                  alt="World map with our locations"
                  className="w-full h-auto object-cover"
                />
                {/* For a real implementation, you could add animated markers for office locations */}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Globe size={28} className="mr-2" />
                <span>150+</span>
              </p>
              <p className={`mt-2 text-lg font-medium ${currentTheme.text.primary}`}>Clients Worldwide</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400">
                10+
              </p>
              <p className={`mt-2 text-lg font-medium ${currentTheme.text.primary}`}>Countries</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400">
                200+
              </p>
              <p className={`mt-2 text-lg font-medium ${currentTheme.text.primary}`}>Projects Delivered</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-yellow-600 dark:text-yellow-400">
                98%
              </p>
              <p className={`mt-2 text-lg font-medium ${currentTheme.text.primary}`}>Client Satisfaction</p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Call To Action */}
      <section className={`bg-gradient-to-r ${currentTheme.primary.gradient} text-white py-20`}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to start your digital journey with us?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's create something amazing together.
            </p>
            <button className={`px-8 py-3 ${
              theme === 'dark'
                ? 'bg-white text-gray-900'
                : 'bg-gray-900 text-white'
            } rounded-full font-medium hover:bg-yellow-300 hover:text-gray-900 transition duration-300 shadow-lg text-lg`}>
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
