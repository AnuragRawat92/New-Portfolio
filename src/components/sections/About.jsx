import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Bootstrap",
  ];

  const backendSkills = ["Node.js", "Express.js", "Python", "MongoDB", "Prisma"];

  const languages = ["JavaScript", "Python", "Java", "TypeScript"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Full-stack developer with a strong foundation in computer science and 2+ years of hands-on experience building web applications. 
              Passionate about creating efficient, scalable solutions with clean code and intuitive user interfaces. 
              Specialized in MERN stack development with additional expertise in problem-solving (DSA) demonstrated through 
              competitive programming achievements (Codeforces Specialist, LeetCode 1774).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Languages Section */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                    hover:shadow-[0_2px_8px_rgba(74,222,128,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend Section */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Section */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 
                                    hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.TECH in Computer Science </strong> - Institute of Engineering and Technology, Lucknow
                  (2022-2026) <br />
                  <span className="text-cyan-400">CGPA: 8.82/10</span>
                </li>
                
                <li>
                  Relevant Coursework: Data Structures & Algorithms, Operating Systems, 
                  Web Development, DBMS, Computer Networks, System Design
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-blue-400">
                    Freelance Developer
                  </h4>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                      Built customer management web apps with React, Node.js, and MongoDB featuring dynamic card layouts and Excel export
                    </li>
                    <li>
                      Contributed to cloud migration systems by reviewing database schemas and managing GitHub PRs
                    </li>
                    <li>
                      Delivered full-stack solutions including authentication, payment gateways, and third-party API integrations
                    </li>
                  </ul>
                </div>

              
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};