import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-30">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-purple-600  "
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-56 bg-pink-50 shadow-md z-20 flex flex-col items-center py-8 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Logo */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-purple-400 bg-clip-text text-transparent mb-12">
          BlessingB🌸
        </h1>

        {/* Nav Links */}
        <nav className="flex flex-col space-y-6">
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-purple-500 hover:text-purple-600 hover:scale-110 transition transform duration-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="projects"
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-purple-500 hover:text-purple-600 hover:scale-110 transition transform duration-300 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="about"
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium text-purple-500 hover:text-purple-600 hover:scale-110 transition transform duration-300 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="text-white bg-purple-500 px-4 py-2 rounded-lg text-center hover:bg-purple-700 hover:scale-105 transition transform duration-300 font-medium cursor-pointer"
          >
            Contact Me
          </Link>
        </nav>
      </aside>
    </>
  );
}

