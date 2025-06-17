import { RevealOnScroll } from "../RevealOnScroll";
import profli from './profile.jpg';
import defaultProfile from './default-profile.jpg'; // Import your fallback image

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-12"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 -right-20 w-64 h-64 md:w-96 md:h-96 bg-cyan-400/10 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-70 animation-delay-2000 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-70 animation-delay-4000 animate-blob"></div>
      </div>

      {/* ... rest of your component remains the same ... */}

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
                e.target.src = defaultProfile; // Use imported fallback
              }}
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
