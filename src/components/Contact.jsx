import message from '../assets/message.jpg'
export default function Contact() {
  return (


    

    

        <section id="contact" className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-600">
          Contact Me
        </h2>
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      
      {/* Left Side - Text */}
      <div className="md:w-1/2 text-center md:text-left mt-27">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">
          Let’s Connect💌 
        </h1>
        <p className="text-gray-600 text-lg">
          Have a project in mind or just want to say hi?  
          Fill out the form and I’ll get back to you as soon as possible.
        </p>

        <div className="flex space-x-4 mt-10 ml-5 space-x-15 ">
            <a href="https://github.com/yourusername" target="_blank" className="hover:text-purple-400 focus:text-purple-400 active:text-purple-400 transition"><i className="fab fa-github text-2xl text-purple-500 hover:text-purple-300 transition"></i></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-purple-400 focus:text-purple-400 active:text-purple-400  transition"><i className="fab fa-linkedin text-2xl text-purple-500 hover:text-purple-300 transition"></i></a>
            <a href="mailto:your@email.com" className="hover:text-purple-400 transition"><i className="fas fa-envelope text-2xl text-purple-500 hover:text-purple-400 focus:text-purple-400 active:text-purple-400 transition"></i></a>
          </div>
      </div>

      
      <form 
      action='https://formspree.io/f/mpwjooyk'
      method="POST"
      className="md:w-96 w-full p-6 rounded-xl bg-purple-50 shadow-md ">

        <div className="w-full h-50 overflow-hidden rounded-lg">
  <img
    src={message}
    alt="Contact Illustration"
    
  />
</div>
        
        <div className="mb-6">
          <input
            type="text"
            id="name"
            placeholder="Name"
            name="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        
        <div className="mb-6">
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        
        <div className="mb-6">
          <textarea
            id="message"
            rows="5"
            placeholder="Message..."
            name="message"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        
        <button
          type="submit"
          className="w-1/2 bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>


        
  )}

  