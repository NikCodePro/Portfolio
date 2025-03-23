import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "../components/shared/Layout";
import { useAnimations } from "../hooks/useAnimations";
import { useTheme } from "../context/ThemeContext";
import { themeConfig } from "../styles/theme";
import {
  BsX,
  BsArrowRight,
  BsMegaphone,
  BsCode,
  BsServer,
  BsGear,
  BsClipboardCheck,
  BsKanban,
  BsBrush,
  BsCart4,
  BsGlobe,
} from "react-icons/bs";
// import { services } from '../data/services'; // Move your services array to a separate file

const services = [
  {
    icon: <BsCode className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Craft modern, responsive websites that captivate users and drive conversions using the latest frameworks.",
    color: "from-blue-500 to-cyan-400",
    extendedDescription:
      "Our web development services deliver dynamic, SEO-optimized websites that blend cutting-edge design with robust functionality. We specialize in creating interactive front-end interfaces and scalable back-end systems to ensure your online presence is both visually appealing and high-performing.",
    features: [
      "Responsive Design",
      "SEO-Friendly Architecture",
      "Cross-Browser Compatibility",
      "Performance Optimization",
      "Scalable Solutions",
    ],
  },
  {
    icon: <BsServer className="w-8 h-8" />,
    title: "Mobile App Development",
    description:
      "Develop native and cross-platform mobile applications that offer seamless, intuitive user experiences.",
    color: "from-purple-500 to-pink-400",
    extendedDescription:
      "Transform your app ideas into engaging, high-performance mobile solutions. Whether you need a native or hybrid application, our process focuses on robust security, user-centric design, and scalable performance to keep your users connected on any device.",
    features: [
      "Native & Hybrid Development",
      "User-Centric Design",
      "Cross-Platform Compatibility",
      "High Performance",
      "Scalable Infrastructure",
    ],
  },
  {
    icon: <BsGear className="w-8 h-8" />,
    title: "Software Development",
    description:
      "Tailor-made software solutions designed to optimize your business processes and drive innovation.",
    color: "from-indigo-500 to-blue-400",
    extendedDescription:
      "Our team crafts custom software that meets your unique business needs—from enterprise applications to cloud integrations. We leverage agile methodologies and modern tech stacks to deliver secure, scalable, and efficient systems that fuel growth.",
    features: [
      "Custom Software Solutions",
      "Agile Development",
      "Scalable & Secure",
      "Cloud Integration",
      "User-Centric Approach",
    ],
  },
  {
    icon: <BsClipboardCheck className="w-8 h-8" />,
    title: "Software Testing",
    description:
      "Ensure flawless performance with comprehensive testing that guarantees a secure and bug-free software experience.",
    color: "from-red-500 to-rose-400",
    extendedDescription:
      "Our dedicated QA team employs both manual and automated testing strategies to detect and resolve issues early in the development cycle. We provide detailed reports and actionable insights to help you maintain high standards of quality and reliability.",
    features: [
      "Functional & Regression Testing",
      "Performance & Load Testing",
      "Security & Penetration Testing",
      "Automated Test Suites",
      "User Acceptance Testing",
    ],
  },
  {
    icon: <BsKanban className="w-8 h-8" />,
    title: "Product Management",
    description:
      "Strategic planning and execution that drive your product from concept to market success.",
    color: "from-emerald-500 to-green-400",
    extendedDescription:
      "Our product management services combine market analysis, agile methodologies, and iterative development to transform innovative ideas into market-ready products. We work closely with you to define a clear roadmap and deliver measurable business outcomes.",
    features: [
      "Product Strategy & Roadmapping",
      "User Research & Journey Mapping",
      "MVP Development & Validation",
      "Agile Product Development",
      "Product Analytics & Optimization",
    ],
  },
  {
    icon: <BsBrush className="w-8 h-8" />,
    title: "UI/UX Design",
    description:
      "Intuitive design solutions that balance aesthetic appeal with functional excellence.",
    color: "from-violet-500 to-purple-400",
    extendedDescription:
      "Our creative design team crafts visually stunning interfaces and seamless user experiences. From initial wireframes to polished design systems, we ensure your digital products are both attractive and user-friendly, enhancing customer satisfaction and engagement.",
    features: [
      "User Interface Design",
      "User Experience Research",
      "Wireframing & Prototyping",
      "Design Systems & Style Guides",
      "Accessibility Compliance",
    ],
  },
  {
    icon: <BsCart4 className="w-8 h-8" />,
    title: "E-commerce Solutions",
    description:
      "Robust e-commerce platforms engineered to streamline online sales and enhance customer engagement.",
    color: "from-amber-500 to-yellow-400",
    extendedDescription:
      "We build secure, scalable e-commerce solutions that integrate seamless payment processing, efficient inventory management, and insightful customer analytics. Our tailored platforms are designed to boost conversions and foster long-term customer loyalty.",
    features: [
      "Custom E-commerce Platforms",
      "Optimized Shopping Cart & Checkout",
      "Payment Gateway Integration",
      "Inventory & Order Management",
      "Customer Analytics & Personalization",
    ],
  },
  {
    icon: <BsGlobe className="w-8 h-8" />,
    title: "SEO & Digital Marketing",
    description:
      "Boost your online presence with data-driven strategies that improve search rankings and drive organic traffic.",
    color: "from-green-500 to-emerald-400",
    extendedDescription:
      "Our SEO and digital marketing experts use advanced analytics and innovative techniques to elevate your brand's visibility online. We focus on keyword optimization, content strategy, and comprehensive link building to ensure measurable growth in organic traffic.",
    features: [
      "Keyword Research & Optimization",
      "Content Marketing",
      "Link Building Strategies",
      "Analytics & Performance Tracking",
      "Social Media Integration",
    ],
  },
  {
    icon: <BsMegaphone className="w-8 h-8" />,
    title: "Social Media Marketing",
    description:
      "Engage your audience with creative social media campaigns that amplify your brand voice and drive engagement.",
    color: "from-orange-500 to-amber-400",
    extendedDescription:
      "Our social media marketing services are designed to build a vibrant online community around your brand. We create tailored strategies that drive engagement, enhance reach, and foster strong customer relationships through compelling content and data-driven insights.",
    features: [
      "Content Strategy & Creation",
      "Audience Engagement",
      "Performance Analytics",
      "Influencer Collaboration",
      "Campaign Management",
    ],
  },
];


// Update the ServiceModal component to receive currentTheme as a prop
const ServiceModal = ({ service, isOpen, onClose, currentTheme }) => {
  const { theme } = useTheme();
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm"></div>

          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative min-h-screen flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-4xl glass-morphism rounded-2xl p-8 overflow-hidden">
              {/* Animated background patterns */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className={`absolute -inset-40 bg-gradient-to-r ${service.color} opacity-10 blur-3xl gradient-bg`}
                />
                
                <motion.div
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl"
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/80 hover:text-white"
                >
                  <BsX size={24} />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}
                  >
                    {service.icon}
                  </div>
                  <h2 className={`text-3xl font-bold text-white`}>
                    {service.title}
                  </h2>
                </div>

                <p className={`text-xl mb-8 text-white`}>
                  {service.extendedDescription}
                </p>

                {service.features && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}
                        />
                        <span className={`text-white`}>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 bg-gradient-to-r ${service.color} rounded-full flex items-center gap-2`}
                >
                  Get Started <BsArrowRight />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Update the ServiceCard component to receive currentTheme as a prop
const ServiceCard = ({ service, onClick, currentTheme }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-xl blur-xl transform group-hover:scale-110 transition-transform duration-300" />
      
      <div className={`relative p-6 rounded-xl glass-morphism
        border border-white/10 hover:border-white/20 transition-all duration-300
        backdrop-blur-lg shadow-xl`}>
        <div className="relative z-10">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} 
            flex items-center justify-center mb-4 group-hover:scale-110 
            transition-transform duration-300 animate-float`}>
            {service.icon}
          </div>
          <h3 className={`text-xl ${currentTheme.text.primary} font-bold mb-2`}>
            {service.title}
          </h3>
          <p className={`${currentTheme.text.secondary}`}>
            {service.description}
          </p>
        </div>

        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 to-transparent"
        />
      </div>
    </motion.div>
  );
};

// Update your Services component to use these new components
const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const { theme } = useTheme();
  const currentTheme = themeConfig[theme];
  const { fadeInUp, staggerContainer, hoverScale } = useAnimations();

  return (
    <Layout>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90"
              : "bg-gradient-to-br from-blue-600 to-purple-700 opacity-80"
          }`}
        >
          <div className="absolute inset-0 opacity-10 bg-pattern"></div>
        </div>

        {/* Floating Gradients */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-yellow-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-3 border border-white/20 rounded-full text-sm font-medium mb-8 backdrop-blur-sm"
            >
              INNOVATIVE SOLUTIONS FOR THE DIGITAL AGE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              Transform Your Vision
              <br />
              Into <span className="text-yellow-300">Digital Excellence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12"
            >
              Discover our comprehensive range of services designed to elevate
              your business in the digital landscape
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-yellow-300 transition duration-300 shadow-lg flex items-center gap-2"
              >
                Explore Showcase <BsArrowRight />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white rounded-full font-medium hover:bg-white/10 transition duration-300"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="w-1 h-1 bg-white rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Section with existing code */}
      <div className={`${currentTheme.background.section} py-24 relative overflow-hidden`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          />
        </div>

        {/* Existing content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="text-center mb-16"
          >
            <div
              className={`inline-block px-4 py-2 rounded-full ${
                theme === "dark" ? "bg-blue-900/30" : "bg-blue-100"
              } text-blue-600 text-sm font-medium mb-6`}
            >
              OUR EXPERTISE
            </div>
            <h1 className={`text-4xl md:text-6xl ${currentTheme.text.primary} font-bold mb-6`}>
              Transforming Ideas into
              <span className="text-blue-600 dark:text-blue-400">
                {" "}
                Digital Reality
              </span>
            </h1>
            <p
              className={`${currentTheme.text.secondary} max-w-2xl mx-auto text-lg`}
            >
              We deliver cutting-edge solutions tailored to your business needs,
              helping you stay ahead in the digital landscape
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                onClick={() => setSelectedService(service)}
                currentTheme={currentTheme}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        currentTheme={currentTheme}
      />

      {/* Enhanced CTA Section */}
      <section className={`relative overflow-hidden py-24`}>
        <div
          className={`absolute inset-0 bg-gradient-to-r ${currentTheme.primary.gradient} opacity-90`}
        ></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-12 text-white/90 max-w-2xl mx-auto">
              Let's collaborate to create innovative solutions that drive your
              success
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-yellow-300 transition duration-300 shadow-lg inline-flex items-center gap-2"
            >
              Start Your Journey <BsArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
