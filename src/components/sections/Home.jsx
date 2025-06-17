import { RevealOnScroll } from "../RevealOnScroll";
import profli from './profile.jpg';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-12"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 -right-20 w-64 h-64 md:w-96 md:h-96 bg-cyan-400/10 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 z-10">
        {/* Text Content - Centered */}
        <RevealOnScroll>
          <div className="text-center max-w-2xl lg:text-left px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm <span className="text-white">Anurag Rawat</span>
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-3 md:mb-4 font-medium">
              Full-Stack Developer & Competitive Programmer
            </h2>

            <p className="text-base sm:text-lg text-gray-400 mb-6 md:mb-8 mx-auto lg:mx-0 max-w-lg">
              I build scalable web applications with cutting-edge technologies.
              Passionate about creating solutions that blend{" "}
              <span className="text-blue-400">performance</span> with{" "}
              <span className="text-cyan-400">elegant design</span>.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
              <a
                href="#projects"
                className="relative inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-lg shadow-lg group bg-gradient-to-br from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-sm md:text-base"
              >
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-out"></span>
              </a>

              <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-4 py-2 md:px-6 md:py-3 overflow-hidden font-medium text-blue-500 transition duration-300 ease-out border-2 border-blue-500 rounded-lg hover:text-white group text-sm md:text-base"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Contact Me
                </span>
                <span className="relative invisible">Contact Me</span>
              </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* Image Card - Centered */}
        <RevealOnScroll>
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mt-8 md:mt-12 lg:mt-0">
            <div className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto rounded-2xl overflow-hidden border-4 border-white/10 shadow-xl md:shadow-2xl group hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] md:hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300">
              <img
                src={profli}
                alt="Anurag Rawat"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500 ease-in-out"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = `${process.env.PUBLIC_URL}/images/default-profile.jpg`;
                }}
              />
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Animation keyframes (add to your global CSS) */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};