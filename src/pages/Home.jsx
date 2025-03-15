import React, { useEffect, useState, createContext, useContext, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import {
  BsArrowRight,
  BsCode,
  BsMegaphone,
  BsServer,
  BsGlobe,
} from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdSettings } from "react-icons/md";
// Main HomePage Component
import { useTheme } from '../context/ThemeContext';
import {images} from "../constants/images" 
// Assuming you installed this: npm install react-icons-animated
// If not installed or you prefer a different approach, you can skip this for now.
// import { AnimatedIcon } from 'react-icons-animated';

// Theme Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Or 'dark'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};



// Animated Icons Section (Conditional import)
const AnimatedIconsSection = () => {
  // Check if AnimatedIcon is available (if the library was installed)
  // if (typeof AnimatedIcon === 'undefined') {
  //   return <div className="py-16 bg-indigo-100"><div className="container mx-auto px-6 text-center"><h2 className="text-3xl font-bold mb-8 text-gray-800">Animated Features</h2><p>Install 'react-icons-animated' to see animated icons here.</p></div></div>;
  // }

  return (
    <div className="py-16 bg-indigo-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Animated Features
        </h2>
        <div className="flex justify-around">
          {/* <AnimatedIcon value={<MdSettings size={48} />} animation="spin" color="blue" /> */}
          <MdSettings
            size={48}
            className={`transition-transform duration-500 hover:rotate-180 ${
              useTheme().theme === "dark" ? "text-white" : "text-blue-500"
            }`}
          />
          {/* Add more animated icons or custom animations here */}
        </div>
      </div>
    </div>
  );
};

// Carousel Section
const CarouselSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const projects = images.projects;

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our latest work and innovative solutions
          </p>
        </motion.div>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl mx-4">
                <div className="relative h-64 md:h-96">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-200">{project.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Horizontal Scroll Section
const HorizontalScrollSection = () => {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  const items = [
    {
      icon: <BsCode className="w-8 h-8" />,
      title: "Modern Technologies",
      description: "Using latest frameworks and tools"
    },
    {
      icon: <BsServer className="w-8 h-8" />,
      title: "Scalable Solutions",
      description: "Built for growth and performance"
    },
    {
      icon: <BsGlobe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Supporting clients worldwide"
    }
  ];

  return (
    <div className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-center">Our Expertise</h2>
        </motion.div>
        
        <div 
          ref={containerRef}
          className="flex overflow-x-scroll snap-x snap-mandatory hide-scrollbar"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] md:min-w-[400px] snap-center p-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="text-indigo-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="h-1 bg-indigo-500 mt-8"
          style={{ scaleX: scrollXProgress }}
        />
      </div>
    </div>
  );
};

// Accordion Component
const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Frequently Asked Questions
        </h2>
        {items.map((item, index) => (
          <motion.div key={index} className="mb-4 rounded-md shadow-sm">
            <motion.button
              className="flex items-center justify-between w-full py-3 px-4 font-semibold text-left bg-white rounded-t-md focus:outline-none"
              onClick={() => toggleItem(index)}
            >
              <span>{item.title}</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.button>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-gray-50 rounded-b-md"
            >
              <div className="p-4">{item.content}</div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Card Dropdown Component
const ServiceCardWithDropdown = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div
        className={`p-6 text-white bg-gradient-to-r ${service.color}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="p-6 overflow-hidden"
      >
        <p className="text-gray-600">
          {service.extendedDescription || service.description}
        </p>
        {isOpen && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-4 text-indigo-600 hover:text-indigo-800"
            onClick={() => setIsOpen(false)}
          >
            Read Less
          </motion.button>
        )}
      </motion.div>
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="block p-4 text-center text-sm font-medium text-indigo-600 hover:text-indigo-800 bg-gray-50"
        >
          Learn More
        </motion.button>
      )}
    </motion.div>
  );
};

// Services Section Component with scroll animations
const ServicesSection = () => {
  const services = [
    {
      icon: <BsCode className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Modern, responsive websites that engage visitors and drive conversions using cutting-edge frameworks like React.",
      color: "from-blue-500 to-cyan-400",
      extendedDescription:
        "Our web development services include front-end and back-end development, custom features, and ongoing maintenance. We specialize in React, Node.js, and other modern technologies.",
    },
    {
      icon: <BsServer className="w-8 h-8" />,
      title: "App Development",
      description:
        "Native and cross-platform mobile applications that deliver seamless user experiences across all devices.",
      color: "from-purple-500 to-pink-400",
      extendedDescription:
        "We build high-performance mobile applications for iOS and Android using technologies like React Native and Swift. Our app development process focuses on user experience and scalability.",
    },
    {
      icon: <BsGlobe className="w-8 h-8" />,
      title: "SEO & Digital Marketing",
      description:
        "Data-driven strategies to improve your search rankings and maximize your online visibility.",
      color: "from-green-500 to-emerald-400",
      extendedDescription:
        "Our SEO and digital marketing experts use the latest techniques to improve your website's visibility in search engines and drive organic traffic. We offer services like keyword research, content optimization, and link building.",
    },
    {
      icon: <BsMegaphone className="w-8 h-8" />,
      title: "Social Media Marketing",
      description:
        "Engaging social media campaigns that build brand awareness and foster meaningful customer relationships.",
      color: "from-orange-500 to-amber-400",
      extendedDescription:
        "We help businesses build a strong presence on social media platforms through engaging content, targeted advertising, and community management. Our social media strategies are designed to increase brand awareness and customer engagement.",
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Expert Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions designed to meet your business needs and
            drive innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCardWithDropdown key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const bgCircleScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]); // Example: circles grow on scroll

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900">
      <div className="absolute inset-0 z-0">
        {/* Animated background elements */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              transition: {
                duration: 20 + Math.random() * 30,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              scale: bgCircleScale, // Apply the scroll-based scale
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transforming Ideas Into
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Digital Excellence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Innovative IT solutions tailored to propel your business forward in
            the digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-white text-indigo-900 font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              onClick={() =>
                toast.success(
                  "Thank you for your interest! Scrolling to services..."
                )
              }
            >
              Explore Services <BsArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-transparent border-2 border-white text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
              onClick={() =>
                toast.success("Contact form is ready for your inquiry!")
              }
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="animate-bounce"
        >
          <div className="text-white text-center">
            <p className="mb-2 text-sm font-light">Scroll to explore</p>
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Features section with scroll animations
const FeaturesSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div ref={containerRef} className="py-24 bg-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          style={{ scale, opacity }} 
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-indigo-200 max-w-2xl mx-auto">
            We combine technical expertise with creative innovation to deliver
            exceptional digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Technical Excellence",
              description:
                "Our team of skilled developers stays at the forefront of technology to deliver cutting-edge solutions.",
            },
            {
              title: "Client-Focused Approach",
              description:
                "We prioritize understanding your business goals to create tailored solutions that drive results.",
            },
            {
              title: "Ongoing Support",
              description:
                "Our relationship doesn't end at launch. We provide continuous support to ensure lasting success.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-indigo-800/50 backdrop-blur-sm rounded-lg p-8 border border-indigo-700/50"
            >
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-indigo-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Call to Action Component
const CTASection = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-violet-600 to-indigo-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-8">
            Let's discuss how our IT solutions can help you achieve your
            business goals and stay ahead of the competition.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:shadow-lg transition-all"
            onClick={() => toast.success("Contact form activated!")}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

// Remove the ThemeContext and ThemeProvider code from Home.jsx since it's now in a separate file

// Update the Home component
const Home = () => {
  const [showNotification, setShowNotification] = useState(false);
  const { theme } = useTheme(); // This should now work correctly

  const accordionItems = [
    {
      title: "What services do you offer?",
      content:
        "We offer web development, app development, SEO & digital marketing, and social media marketing.",
    },
    {
      title: "What technologies do you use?",
      content:
        "We primarily use React, Node.js, React Native, and various digital marketing tools.",
    },
    {
      title: "What is your pricing structure?",
      content:
        "Our pricing varies depending on the project scope. Please contact us for a detailed quote.",
    },
    // Add your accordion data here
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
      toast.success(
        "Welcome to our website! Explore our services or contact us for a consultation.",
        {
          duration: 5000,
          position: "bottom-right",
        }
      );
    }, 3000);

    return () => clearTimeout(timer);
  });

  const themeStyles = {
    light: {
      backgroundColor: "bg-gradient-to-br from-gray-50 to-white",
      textColor: "text-gray-900",
      sectionBg: "bg-white",
      cardBg: "bg-gray-50",
    },
    dark: {
      backgroundColor: "bg-gradient-to-br from-gray-900 to-black",
      textColor: "text-white",
      sectionBg: "bg-gray-800",
      cardBg: "bg-gray-700",
    },
  };

  const currentTheme = themeStyles[theme];

  return (
    <div
      className={`min-h-screen ${currentTheme.backgroundColor} ${currentTheme.textColor}`}
    >
      <Toaster />
      <HeroSection />
      <ServicesSection />
      <HorizontalScrollSection />
      <CarouselSection />
      <FeaturesSection />
      <AnimatedIconsSection />
      <Accordion items={accordionItems} />
      <CTASection />
    </div>
  );
};

export default Home;
