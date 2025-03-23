import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  SiBlockchaindotcom,
  SiCplusplus,
  SiDjango,
  SiFlutter,
  SiMongodb,
  SiMysql,
  SiTensorflow,
} from "react-icons/si";
import {
  ChevronDown,
  Users,
  Globe,
  Zap,
  Award,
  Briefcase,
  CheckCircle,
} from "lucide-react";
// import { RiApiLine as RiApiFill } from "react-icons/ri";
import { useTheme } from "../context/ThemeContext";
import { themeConfig } from "../styles/theme";

const About = () => {
  const { theme } = useTheme();
  const currentTheme = themeConfig[theme];
  const scrollControls = useAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div
      className={`min-h-screen ${currentTheme.background.main} transition-colors duration-300`}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Updated gradient background with theme support */}
        <div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90"
              : "bg-gradient-to-br from-blue-600 to-purple-700 opacity-80"
          }`}
        >
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
              onClick={() => setIsModalOpen(true)}
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

      {/* Modal - Appears when "Our Story" button is clicked */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex backdrop-blur-lg items-center justify-center"
        >
          {/* Animated background overlay */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse"
          ></motion.div>
          {/* Modal content */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`relative text-white rounded-lg p-8 z-10 max-w-lg mx-auto`}
          >
            <h3 className="text-2xl font-bold mb-4">Our Company's Story</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vel neque eget nisl dictum blandit. Duis accumsan libero vel lacus
              pretium, at sagittis libero facilisis. Integer tincidunt, nulla ac
              scelerisque consequat, diam quam semper justo, eu tincidunt lacus
              magna et sapien.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}

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
              <h2
                className={`text-4xl md:text-5xl  font-bold mb-6 leading-tight ${currentTheme.text.primary}`}
              >
                A Decade of Digital{" "}
                <span className="text-blue-500">Excellence</span>
              </h2>
              <p
                className={`text-lg leading-relaxed mb-8 ${currentTheme.text.primary}`}
              >
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
                    <h4
                      className={`font-bold text-lg ${currentTheme.text.primary}`}
                    >
                      Expert Team
                    </h4>
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
                    <h4
                      className={`font-bold text-lg ${currentTheme.text.primary}`}
                    >
                      Award Winning
                    </h4>
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
            <div
              className={`inline-block px-3 py-1 ${
                theme === "dark"
                  ? "bg-blue-900/40 text-blue-300"
                  : "bg-blue-100 text-blue-600"
              } rounded-full font-medium text-sm mb-4`}
            >
              OUR PURPOSE
            </div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${currentTheme.text.primary}`}
            >
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

                <p
                  className={`text-xl md:text-2xl ${currentTheme.text.primary} font-light text-center mb-8 leading-relaxed`}
                >
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
                    <h4
                      className={`${currentTheme.text.primary} font-bold mb-2`}
                    >
                      Excellence
                    </h4>
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
                    <h4
                      className={`${currentTheme.text.primary} font-bold mb-2`}
                    >
                      Innovation
                    </h4>
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
                    <h4
                      className={`${currentTheme.text.primary} font-bold mb-2`}
                    >
                      Collaboration
                    </h4>
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
            <div
              className={`inline-block px-5 py-2 ${
                theme === "dark"
                  ? "bg-purple-900/40 text-purple-300"
                  : "bg-purple-100 text-purple-600"
              } rounded-full font-medium text-sm mb-6 backdrop-blur-sm border border-purple-500/20`}
            >
              TECH STACK
            </div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${currentTheme.text.primary}`}
            >
              Technologies We Use
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-2 mb-8 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-800 dark:text-gray-400">
              We leverage cutting-edge technologies to build scalable, robust,
              and efficient solutions for our clients.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-10"
          >
            {/* Tech stack cards */}
            {[
              {
                name: "Node.js",
                icon: (
                  <svg viewBox="0 0 448 512" className="w-8 h-8">
                    <path
                      fill="currentColor"
                      d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"
                    />
                  </svg>
                ),
              },
              {
                name: "Python",
                icon: (
                  <svg viewBox="0 0 448 512" className="w-8 h-8">
                    <path
                      fill="currentColor"
                      d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"
                    />
                  </svg>
                ),
              },
              {
                name: "TensorFlow",
                icon: <SiTensorflow className="w-8 h-8" />,
              },
              {
                name: "Django",
                icon: <SiDjango className="w-8 h-8" />,
              },
              // C++ Icon
              {
                name: "C++",
                icon: <SiCplusplus className="w-8 h-8" />,
              },
              // Flutter Icon
              {
                name: "Flutter",
                icon: <SiFlutter className="w-8 h-8" />,
              },
              {
                name: "PHP",
                icon: (
                  <svg viewBox="0 0 640 512" className="w-8 h-8">
                    <path
                      fill="currentColor"
                      d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"
                    />
                  </svg>
                ),
              },
              {
                name: "React",
                icon: (
                  <svg viewBox="0 0 512 512" className="w-8 h-8">
                    <path
                      fill="currentColor"
                      d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-16.9-29.7 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
                    />
                  </svg>
                ),
              },
              {
                name: "Java",
                icon: (
                  <svg viewBox="0 0 384 512" className="w-8 h-8">
                    <path
                      fill="currentColor"
                      d="M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"
                    />
                  </svg>
                ),
              },
              {
                name: "Docker",
                icon: (
                  <svg viewBox="0 0 640 512" className="w-8 h-8">
                    <path
                      fill="currentColor"
                      d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"
                    />
                  </svg>
                ),
              },
              {
                name: "MongoDB",
                icon: <SiMongodb className="w-8 h-8" />,
              },
              {
                name: "MySQL",
                icon: <SiMysql className="w-8 h-8" />,
              },
              {
                name: "Firebase",
                icon: (
                  <svg viewBox="0 0 32 32" className="w-8 h-8">
                    <path
                      fill="currentColor"
                      d="M19.62 11.558l-3.203 2.98-2.972-5.995 1.538-3.448c.4-.7 1.024-.692 1.414 0z"
                    />
                    <path
                      fill="currentColor"
                      d="M13.445 8.543l2.972 5.995-11.97 11.135z"
                    />
                    <path
                      fill="currentColor"
                      d="M23.123 7.003c.572-.55 1.164-.362 1.315.417l3.116 18.105-10.328 6.2c-.36.2-1.32.286-1.32.286s-.874-.104-1.207-.3L4.447 25.673z"
                    />
                    <path
                      fill="currentColor"
                      d="M13.445 8.543l-8.997 17.13L8.455.638c.148-.78.592-.855.988-.167z"
                    />
                  </svg>
                ),
              },
              {
                name: "Blockchain",
                icon: <SiBlockchaindotcom className="w-8 h-8" />,
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, 1, -1, 0],
                  transition: { duration: 0.3 },
                }}
                className={`${currentTheme.glass} rounded-2xl shadow-lg overflow-hidden relative group ${currentTheme.text.primary}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="p-8 relative z-10 flex flex-col items-center">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-4 mb-5 w-16 h-16 flex items-center justify-center shadow-md relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></div>
                    <div className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10">
                      {tech.icon}
                    </div>
                  </div>

                  <h3 className="font-bold text-lg group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {tech.name}
                  </h3>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
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
            <div
              className={`inline-block px-3 py-1 ${
                theme === "dark"
                  ? "bg-green-900/40 text-green-300"
                  : "bg-green-100 text-green-600"
              } rounded-full font-medium text-sm mb-4`}
            >
              GLOBAL IMPACT
            </div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${currentTheme.text.primary}`}
            >
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
              <p
                className={`mt-2 text-lg font-medium ${currentTheme.text.primary}`}
              >
                Clients Worldwide
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400">
                10+
              </p>
              <p
                className={`mt-2 text-lg font-medium ${currentTheme.text.primary}`}
              >
                Countries
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400">
                200+
              </p>
              <p
                className={`mt-2 text-lg font-medium ${currentTheme.text.primary}`}
              >
                Projects Delivered
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-yellow-600 dark:text-yellow-400">
                98%
              </p>
              <p
                className={`mt-2 text-lg font-medium ${currentTheme.text.primary}`}
              >
                Client Satisfaction
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call To Action */}
      <section
        className={`bg-gradient-to-r ${currentTheme.primary.gradient} text-white py-20`}
      >
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
            <button
              className={`px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-yellow-300 hover:text-gray-900 transition duration-300 shadow-lg text-lg`}
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
