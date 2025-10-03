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
      <>
        
       
        

        
        {
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-purple-600 z-50">
          <p className="mt-4 text-white text-lg font-semibold flex space-x-1">
            <span className="animate-bounce">L</span>
            <span className="animate-bounce delay-150">o</span>
            <span className="animate-bounce delay-300">a</span>
            <span className="animate-bounce delay-500">d</span>
            <span className="animate-bounce delay-700">i</span>
            <span className="animate-bounce delay-900">n</span>
            <span className="animate-bounce delay-[1100ms]">g</span>
            <span className="animate-bounce delay-[1300ms]">.</span>
            <span className="animate-bounce delay-[1500ms]">.</span>
            <span className="animate-bounce delay-[1700ms]">.</span>
          </p>
        </div>
        }
      </>
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

