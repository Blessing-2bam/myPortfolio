// src/components/Projects.jsx
import Space_picture from "../assets/spacepic.png";
import Educity  from "../assets/Educitys.png";

import Adventure from '../assets/Adventure.png'
import Loopstudio from '../assets/loopstudio.png'
import Insure from '../assets/Insure.jpg'
import Beauty from '../assets/Beauty Salon.png'
import { useState } from "react";
import Multistep from '../assets/MultiStepForm.png'

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);




  const projects = [
    { title: "SpaceView Website ", desc: "Explore the wonders of space, from stars to galaxies, all in one place.", link: "https://sppaace.netlify.app", img: Space_picture  ,tech: ["CSS", "JavaScript", "Media Query"] },
    { title: "Beauty Project", desc: "Creative Beauty design work.", link: "https://beeauty.netlify.app", img:Beauty , tech: ["CSS", "JavaScript", "Media Query"]  },
    { title: "LOOPSTUDIOS", desc: "Interactive web project.", link: "https://loopstuudio.netlify.app", img: Loopstudio , tech: ["CSS", "JavaScript", "Media Query"]  },
     { title: "Educity", desc: "An Insurance website", link: "#", img: Educity , tech: ["CSS", "JavaScript", "Media Query"]  },
  
    { title: "Adventure project", desc: "Explore the World with this creative design work.", link: "https://adventture.netlify.app", img: Adventure , tech: ["CSS", "JavaScript", "Media Query"]  },
    { title: "Multistep Form", desc: "An Insurance website", link: "#", img: Multistep , tech: ["CSS", "JavaScript", "Media Query"]  },
      ];

  return (
    <section id="projects" className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-600">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() =>
                setActiveIndex(activeIndex === i ? null : i) // toggle overlay on tap
              }
            >
              {/* Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-center transform transition duration-500 group-hover:scale-110"
                
              />

              {/* Overlay with details */}
              <div
                className={`
                  absolute inset-0 bg-black/60 text-white 
                  flex flex-col items-center justify-center text-center p-6 transition-opacity duration-500
                  ${activeIndex === i ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                `}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, index) => (
                  <span 
                  key={index} 
                  className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium"
                 >
                 {t}
                </span>
                 ))}
                </div>

                
                <a
                  href={project.link}
                  target="_blank" 
                   rel="noopener noreferrer"
                  className="bg-purple-500 px-4 py-2 rounded-lg font-medium 
                             hover:bg-pink-600 transition duration-300"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
