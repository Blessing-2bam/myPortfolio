import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Typed from "typed.js"; // ✅ import typed.js
import laptop from "../assets/laptop.avif";

export default function Hero() {
  const bgRef = useRef(null);
  const typedRef = useRef(null); // ✅ ref for typing text

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const offset = window.scrollY * 0.4; // adjust speed here
        bgRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typed.js effect
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        `Have you ever wanted to take a peek at a web designer’s portfolio?<br>
        Well, you’re in luck! Keep scrolling to explore some of my recent 
        <span class="text-purple-400 font-semibold"> website design projects</span>.`,
      ],
      typeSpeed: 40, // speed of typing
      backSpeed: 0, // no backspacing
      showCursor: true,
      cursorChar: "|",
      smartBackspace: false,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with Parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${laptop})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center max-w-3xl border border-purple-400 p-6 rounded-md shadow-lg bg-black/10 backdrop-blur-md mx-auto   shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300">
        <h2 className="font-carefree text-4xl md:text-4xl font-bold mb-4 text-pink-50">
          Web Design Created Just for You
        </h2>

        {/* Typing Text */}
        <p
          ref={typedRef}
          className="text-lg md:text-xl mb-6 text-gray-200"
        ></p>

        <Link
          to="projects"
          smooth={true}
          offset={-70}
          duration={500}
          className="bg-gradient-to-r from-purple-500 to-pink-200 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:from-pink-500 hover:to-purple-500"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
}
