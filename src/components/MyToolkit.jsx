import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import react_native from '../assets/react-native.svg'
import react from '../assets/react.svg'
import accessibility from '../assets/accessibility.svg'
import html from '../assets/html.svg'

const MyToolkit = () => {
  const tools = [
    { name: "CSS", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "React", icon: react },
    { name: "React Native", icon: react_native },
    { name: "Accessibility", icon: accessibility },
    { name: "HTML", icon: html },
  ]

  return (
    <section
      id="toolkit"
      className="py-10 overflow-hidden bg-gray-50 shadow-xl rounded-xl m-10 animate-bg"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-8 drop-shadow-lg">
          My Toolkit 💻
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-6 transition-transform transform hover:scale-110"
            >
              {/* Floating Icon */}
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-16 h-16 mb-4 animate-floating"
                style={{ animationDelay: `${index * 0.5}s` }} // staggered float
              />
              <p className="text-lg font-medium text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyToolkit
