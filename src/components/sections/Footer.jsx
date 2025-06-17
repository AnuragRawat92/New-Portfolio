export const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/AnuragRawat92/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anurag-rawat-5a7341258/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      color: "from-blue-500 to-cyan-400"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/imanuragrawat/profilecard/?igsh=MWloYWt6cmx4Z2R1ag==",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      color: "from-amber-500 to-pink-500"
    }
  ];

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            {"Let's Connect"}
          </h3>
          
          <div className="flex justify-center space-x-8 md:space-x-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <div className={`
                  w-16 h-16 rounded-full flex items-center justify-center
                  bg-gradient-to-br ${link.color}
                  shadow-lg group-hover:shadow-xl
                  transition-all duration-300 ease-in-out
                  group-hover:rotate-[360deg]
                `}>
                  <span className="text-white">{link.icon}</span>
                </div>
                <div className={`
                  absolute -inset-2 rounded-full
                  bg-gradient-to-br ${link.color}
                  opacity-0 group-hover:opacity-100
                  blur-md group-hover:blur-lg
                  transition-all duration-300 ease-in-out
                  -z-10
                `}></div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Anurag Rawat. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with React, Next.js and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
