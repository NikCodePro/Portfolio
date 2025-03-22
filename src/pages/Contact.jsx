import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Clock, Send, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "react-hot-toast";
import { useTheme } from "../context/ThemeContext";
import { themeConfig } from "../styles/theme";
import { useAnimations } from "../hooks/useAnimations";
import { submitContactForm } from "../utils/api"; // Make sure this function is implemented

// Reusable FormInput component
const FormInput = ({ label, name, type = "text", error, theme, ...props }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium mb-2">
      {label}
    </label>
    <div className="relative">
      <input
        type={type}
        id={name}
        name={name}
        className={`w-full p-3 rounded-lg border transition-all duration-300 ${
          theme === "dark"
            ? "bg-gray-800/50 border-gray-700 text-white"
            : "bg-white/50 border-gray-200 text-gray-900"
        } ${error ? "border-red-500" : "focus:border-blue-500"} 
          focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm`}
        {...props}
      />
      {error && (
        <p className="absolute -bottom-6 left-0 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  </div>
);

const Contact = () => {
  const { theme } = useTheme();
  const currentTheme = themeConfig[theme];
  const { fadeInUp, staggerContainer, hoverScale, floatingAnimation } =
    useAnimations();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formErrors, setFormErrors] = useState({});

  // Track mouse movement for background animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["contact@example.com", "support@example.com"],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+1 (234) 567-8900", "+1 (234) 567-8901"],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 - 18:00", "Sat - Sun: Closed"],
    },
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      errors.email = "Invalid email format";
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setIsSubmitting(true);
    try {
      await submitContactForm(formData);
      toast.success("Message sent successfully!", {
        duration: 3000,
        icon: "🎉",
        style: {
          background: theme === "dark" ? "#333" : "#fff",
          color: theme === "dark" ? "#fff" : "#333",
        },
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFormErrors({});
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`min-h-screen relative ${currentTheme.background.main} transition-colors duration-300`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <motion.div
          className={`absolute top-0 left-0 w-[500px] h-[500px] ${currentTheme.primary.solid}/10 rounded-full filter blur-3xl`}
          animate={{
            x: mousePosition.x * 0.05,
            y: mousePosition.y * 0.05,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute bottom-0 right-0 w-[500px] h-[500px] ${currentTheme.primary.solid}/10 rounded-full filter blur-3xl`}
          animate={{
            x: -mousePosition.x * 0.05,
            y: -mousePosition.y * 0.05,
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2020/06/20/05/15/hands-5319695_1280.jpg')" }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            background: `linear-gradient(135deg, 
              ${
                theme === "dark" ? "rgba(30,41,59,0.9)" : "rgba(59,130,246,0.8)"
              } 0%, 
              ${
                theme === "dark" ? "rgba(17,24,39,0.9)" : "rgba(139,92,246,0.8)"
              } 100%)`,
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.div
              className={`mb-8 mx-auto w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-r ${currentTheme.primary.gradient} p-2 shadow-xl`}
              whileHover={hoverScale}
            >
              <Send className="w-12 h-12 text-white" />
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
            >
              We're here to help you. Let's create something great together!
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className={`${currentTheme.background.section} py-16`}>
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={hoverScale}
                className={`p-6 rounded-xl ${currentTheme.glass} border ${currentTheme.border} shadow-lg`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`p-3 rounded-full bg-gradient-to-r ${currentTheme.primary.gradient} mr-4`}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className={`text-xl font-semibold ${currentTheme.text.primary}`}
                  >
                    {item.title}
                  </h3>
                </div>
                {item.details.map((detail, idx) => (
                  <p
                    key={idx}
                    className={`ml-14 text-sm ${currentTheme.text.secondary}`}
                  >
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className={`max-w-4xl mx-auto p-8 rounded-xl ${currentTheme.glass} border ${currentTheme.border} shadow-lg`}
          >
            <div
              className={`grid grid-cols-1 ${currentTheme.text.primary} md:grid-cols-2 gap-6`}
            >
              <FormInput
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={formErrors.name}
                required
                theme={theme}
              />
              <FormInput
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={formErrors.email}
                required
                theme={theme}
              />
            </div>
            <div className={`${currentTheme.text.primary}`}>
              <FormInput
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={formErrors.subject}
                theme={theme}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className={`block text-sm ${currentTheme.text.primary} font-medium mb-2`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`w-full p-3 rounded-lg border transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-gray-800/50 border-gray-700 text-white"
                    : "bg-white/50 border-gray-200 text-gray-900"
                } ${
                  formErrors.message
                    ? "border-red-500"
                    : "focus:border-blue-500"
                } focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm`}
                required
              />
              {formErrors.message && (
                <p className="text-xs text-red-500 mt-1">
                  {formErrors.message}
                </p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${currentTheme.background.section} py-16`}>
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className={`max-w-4xl mx-auto p-8 rounded-xl ${currentTheme.glass} border ${currentTheme.border} shadow-lg`}
          >
            <h2
              className={`text-3xl font-bold mb-8 text-center ${currentTheme.text.primary}`}
            >
              Frequently Asked Questions
            </h2>
            {[
              "How quickly will you respond to my inquiry?",
              "Do you offer international support?",
              "What are your support hours?",
            ].map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`mb-4 p-4 rounded-lg ${
                  theme === "dark" ? "bg-gray-700/60" : "bg-gray-50"
                }`}
              >
                <h3 className={`font-medium text-lg ${currentTheme.text.primary} mb-2`}>{question}</h3>
                <p
                  className={
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
