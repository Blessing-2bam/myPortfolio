import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Aboutss from "../assets/Picnic-121.webp";

export default function About() {
  
  return (
    <section
      id="about"
      className="relative py-20 w-full h-screen "
      style={{
        backgroundImage: `url(${Aboutss})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-white p-8 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-6xl font-bold mb-8">
          About Me🌸
        </h2>

        {/* Typing Text */}
        <p
          
          className="text-lg font-bold md:text-xl leading-relaxed text-gray-200"
        >I’m just a girl who loves music and is passionate about turning ideas into visually stunning and highly interactive web experiences. I specialize <span class="font-semibold text-purple-400">HTML, CSS, JavaScript, React, and Tailwind CSS</span>.
        When I’m not coding, I enjoy <span class="font-semibold">solving design challenges</span>, experimenting with animations, and optimizing performance. My goal is to create <span class="font-semibold">interfaces that are both functional and delightful to use</span>.
        </p>

         <ul className="text-lg font-bold md:text-xl text-gray-200">
          <li>🌸 Responsive web design</li>
          <li>🌸 Interactive UI components</li>
          <li>🌸 Optimized performance and accessibility</li>
          <li>🌸 Modern front-end frameworks (React, Tailwind CSS)</li>
         </ul>
      </div>
    </section>
  );
}

