import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import {
  BsArrowRight,
  BsCode,
  BsMegaphone,
  BsServer,
  BsGlobe,
  BsGear,
  BsCart4,
  BsBrush,
  BsKanban,
  BsClipboardCheck,
  BsShield,
  BsSpeedometer,
  BsGraphUp,
  BsCloud,
  BsArrowLeftCircle,
  BsArrowRightCircle,
} from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "../context/ThemeContext";
import { images } from "../constants/images";
import { themeStyles } from "../styles/theme";

// Carousel Section
const CarouselSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  // Using the expanded projects data
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our latest work and innovative solutions across multiple
            industries and technologies
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
                    <div className="flex items-center mb-3">
                      <span className="bg-indigo-500/70 text-white text-xs px-2 py-1 rounded mr-2">
                        {project.category}
                      </span>
                      <span className="bg-gray-800/70 text-white text-xs px-2 py-1 rounded">
                        {project.clientType}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-200 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.technologies &&
                        project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>
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

const HorizontalScrollSection = () => {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const ExpertiseCard = ({ item }) => (
    <motion.div
      className="min-w-[300px] md:min-w-[400px] lg:min-w-[450px] snap-center p-6"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 h-full hover:bg-white/15 transition-all">
        <div className="flex items-center mb-6">
          <div className="bg-indigo-900/60 rounded-lg p-3 mr-4 text-indigo-400">
            {item.icon}
          </div>
          <h3 className="text-2xl font-bold">{item.title}</h3>
        </div>
        <h4 className="text-indigo-300 font-medium mb-4">{item.subtitle}</h4>

        {item.keyPoints && (
          <ul className="space-y-2 mb-6">
            {item.keyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-indigo-400 mr-2 mt-1">•</span>
                <span className="text-gray-300">{point}</span>
              </li>
            ))}
          </ul>
        )}

        {item.statistic && (
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">{item.statistic.label}</span>
              <span className="text-3xl font-bold text-indigo-300">
                {item.statistic.value}
              </span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );

  const expertiseItems = [
    {
      icon: <BsCode className="w-8 h-8" />,
      title: "Advanced Development",
      subtitle: "Cutting-edge implementation strategies",
      keyPoints: [
        "React, Angular & Vue for dynamic frontends",
        "Node.js, Python & Go for high-performance backends",
        "GraphQL for efficient data querying",
      ],
      statistic: {
        label: "Average performance improvement",
        value: "68%",
      },
    },
    {
      icon: <BsServer className="w-8 h-8" />,
      title: "Scalable Infrastructure",
      subtitle: "Enterprise-grade architecture",
      keyPoints: [
        "Kubernetes orchestration for container management",
        "Auto-scaling configurations for demand fluctuations",
        "Load balancing & redundancy planning",
      ],
      statistic: {
        label: "Uptime guarantee",
        value: "99.99%",
      },
    },
    {
      icon: <BsGlobe className="w-8 h-8" />,
      title: "Global Reach",
      subtitle: "Worldwide service delivery",
      keyPoints: [
        "Multi-region deployment strategies",
        "Edge computing for reduced latency",
        "24/7 global support operations",
      ],
      statistic: {
        label: "Countries served",
        value: "137+",
      },
    },
    {
      icon: <BsShield className="w-8 h-8" />,
      title: "Enterprise Security",
      subtitle: "Multi-layered protection framework",
      keyPoints: [
        "Zero-trust architecture implementation",
        "End-to-end encryption for sensitive data",
        "Compliance with GDPR, HIPAA, SOC2 & more",
      ],
      statistic: {
        label: "Vulnerabilities prevented annually",
        value: "850+",
      },
    },
    {
      icon: <BsSpeedometer className="w-8 h-8" />,
      title: "Performance Optimization",
      subtitle: "Maximum efficiency engineering",
      keyPoints: [
        "Sub-100ms response time benchmarks",
        "Comprehensive performance monitoring",
        "Advanced image & asset optimization",
      ],
      statistic: {
        label: "Average page load improvement",
        value: "73%",
      },
    },
    {
      icon: <BsGraphUp className="w-8 h-8" />,
      title: "Data Analytics",
      subtitle: "Actionable business intelligence",
      keyPoints: [
        "Real-time analytics dashboards",
        "Machine learning for predictive modeling",
        "Custom KPI tracking & reporting",
      ],
      statistic: {
        label: "Average ROI for clients",
        value: "285%",
      },
    },
    {
      icon: <BsCloud className="w-8 h-8" />,
      title: "Cloud Architecture",
      subtitle: "Optimized cloud environments",
      keyPoints: [
        "Multi-cloud & hybrid cloud solutions",
        "Cost optimization & resource management",
        "Disaster recovery & business continuity planning",
      ],
      statistic: {
        label: "Average cloud cost reduction",
        value: "42%",
      },
    },
  ];

  return (
    <div className="py-24 bg-gray-900 text-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-indigo-400 font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Technical Excellence
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our multidisciplinary expertise enables us to solve complex
            challenges with precision-engineered solutions that deliver
            measurable business impact.
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 bg-gray-800/80 hover:bg-indigo-900/80 rounded-full p-2 text-white hidden md:block"
            aria-label="Scroll left"
          >
            <BsArrowLeftCircle size={32} />
          </button>

          <div
            ref={containerRef}
            className="flex overflow-x-scroll snap-x snap-mandatory hide-scrollbar py-8 px-4 -mx-4"
          >
            {expertiseItems.map((item, index) => (
              <ExpertiseCard key={index} item={item} />
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-10 bg-gray-800/80 hover:bg-indigo-900/80 rounded-full p-2 text-white hidden md:block"
            aria-label="Scroll right"
          >
            <BsArrowRightCircle size={32} />
          </button>
        </div>

        <div className="mt-12 relative">
          <motion.div
            className="h-1 bg-indigo-500 absolute left-0 top-0"
            style={{ scaleX: scrollXProgress, transformOrigin: "0%" }}
          />
          <div className="h-1 bg-gray-700 w-full"></div>
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              Our technical capabilities are continuously enhanced through
              rigorous research and development initiatives, ensuring we remain
              at the forefront of technological innovation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-full font-medium transition-colors"
            >
              Explore Our Solutions
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Card Dropdown Component
const ServiceCardWithDropdown = ({ service }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div
        className={`p-6 text-white bg-gradient-to-r h-full ${service.color}`}
      >
        {service.icon}
        <h3 className="text-xl font-bold mb-2 mt-1">{service.title}</h3>
        <p className="text-gray-100 text-sm">{service.description}</p>
        <p className="text-gray-100 text-sm mt-0.5">
          {service.extendedDescription}
        </p>
      </div>
    </motion.div>
  );
};

// Services Section Component with scroll animations
const ServicesSection = () => {
  const { theme } = useTheme();
  const sectionBgClass = theme === "dark" ? "bg-gray-800" : "bg-gray-50";

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
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver seamless user experiences across all devices.",
      color: "from-purple-500 to-pink-400",
      extendedDescription:
        "We build high-performance mobile applications for iOS and Android using technologies like React Native and Swift. Our app development process focuses on user experience and scalability.",
    },
    {
      icon: <BsGear className="w-8 h-8" />,
      title: "Software Development",
      description:
        "Custom software solutions tailored to your business needs with clean, efficient, and scalable code.",
      color: "from-indigo-500 to-blue-400",
      extendedDescription:
        "Our software development team follows industry best practices to deliver robust, scalable, and secure solutions. We employ agile methodologies to ensure continuous delivery and rapid iteration.",
    },
    {
      icon: <BsClipboardCheck className="w-8 h-8" />,
      title: "Software Testing",
      description:
        "Comprehensive testing services to ensure your software is bug-free, secure, and delivers an exceptional user experience.",
      color: "from-red-500 to-rose-400",
      extendedDescription:
        "Our QA team employs manual and automated testing methodologies to identify issues early in the development cycle. We provide detailed reports and recommendations to improve software quality.",
      features: [
        "Functional & regression testing",
        "Performance & load testing",
        "Security testing & penetration testing",
        "Automated test suites",
        "User acceptance testing",
      ],
    },
    {
      icon: <BsKanban className="w-8 h-8" />,
      title: "Product Management",
      description:
        "Strategic product planning and execution to bring your vision to market with maximum impact and ROI.",
      color: "from-emerald-500 to-green-400",
      extendedDescription:
        "Our product management services help you define, build, and launch successful digital products. We focus on user needs, market opportunities, and business goals to create products that deliver value.",
      features: [
        "Product strategy & roadmapping",
        "User research & journey mapping",
        "MVP development & validation",
        "Agile product development",
        "Product analytics & optimization",
      ],
    },
    {
      icon: <BsBrush className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "User-centered design that creates intuitive, engaging experiences while maintaining brand consistency.",
      color: "from-violet-500 to-purple-400",
      extendedDescription:
        "Our design team creates visually stunning and user-friendly interfaces that enhance user satisfaction and engagement. We combine aesthetics with functionality to deliver exceptional digital experiences.",
      features: [
        "User interface design",
        "User experience research",
        "Wireframing & prototyping",
        "Design systems & style guides",
        "Accessibility compliance",
      ],
    },
    {
      icon: <BsCart4 className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description:
        "End-to-end e-commerce development with seamless payment processing, inventory management, and customer experience.",
      color: "from-amber-500 to-yellow-400",
      extendedDescription:
        "We build custom e-commerce solutions that help businesses sell products and services online. Our platforms are secure, scalable, and designed to maximize conversions and customer satisfaction.",
      features: [
        "Custom e-commerce platforms",
        "Shopping cart & checkout optimization",
        "Payment gateway integration",
        "Inventory & order management",
        "Customer analytics & personalization",
      ],
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
    <div className={`py-24 ${sectionBgClass}`}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            We Offer Comprehensive Services
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
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const bgCircleScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]); // Example: circles grow on scroll
  const bgClass =
    theme === "dark"
      ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      : "bg-gradient-to-br from-indigo-900 via-purple-800 to-violet-900";

  return (
    <div
      className={`relative h-screen flex items-center justify-center overflow-hidden ${bgClass}`}
    >
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-3">
            Transforming Ideas Into
            <span className="text-5xl mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              <br /> Digital Excellence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-4">
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
  const { theme } = useTheme(); // This should now work correctly

  useEffect(() => {
    const timer = setTimeout(() => {
      toast.success(
        "Welcome to our website! Explore our services or contact us for a consultation.",
        {
          duration: 5000,
          position: "top-center",
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
      <CarouselSection />
      <HorizontalScrollSection />
      <CTASection />
    </div>
  );
};

export default Home;
