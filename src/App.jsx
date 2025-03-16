import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Showcase, Home, Services, Contact } from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle"; // Import ThemeToggle

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ThemeToggle /> {/* Add ThemeToggle here */}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
