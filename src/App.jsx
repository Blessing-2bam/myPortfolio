// src/App.jsx
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MyToolkit from "./components/MyToolkit";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-purple-600 z-50 transition-opacity duration-700">
        <div className="w-16 h-16 border-4 border-pink-200 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-white text-lg font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="font-sans md:pl-56 focus:text-purple-600 active:text-purple-700">
      <Navbar />
      <Hero />
      <Projects />
      <MyToolkit />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
