import { RevealOnScroll } from "../RevealOnScroll";

export const Coding = () => {
  return (
    <section
      id="coding"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Coding Profiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Codeforces Card */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://codeforces.org/s/0/images/codeforces-sponsored-by-ton.png" 
                  alt="Codeforces" 
                  className="w-12 h-12 rounded-lg"
                />
                <h3 className="text-xl font-bold">Codeforces</h3>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">
                  Specialist
                </span>
                <span className="text-gray-400 text-sm">Max Rating: 1593</span>
              </div>
              <p className="text-gray-400 mb-4">
                Solved 500+ problems with strong performance in contests. Regularly participate in Div. 2 and Div. 3 competitions.
              </p>
              <a
                href="https://codeforces.com/profile/ThorOfWebDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Profile →
              </a>
            </div>

            {/* LeetCode Card */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" 
                  alt="LeetCode" 
                  className="w-12 h-12 rounded-lg"
                />
                <h3 className="text-xl font-bold">LeetCode</h3>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm">
                  1774 Rating
                </span>
                <span className="text-gray-400 text-sm">Top 8%</span>
              </div>
              <p className="text-gray-400 mb-4">
                Solved 500+ problems across various categories. Strong in Data Structures and Algorithms with 58%+ acceptance rate.
              </p>
              <a
                href="https://leetcode.com/u/anuragrawat92946/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Profile →
              </a>
            </div>

            {/* CodeChef Card */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://cdn.codechef.com/images/cc-logo.svg" 
                  alt="CodeChef" 
                  className="w-12 h-12 rounded-lg"
                />
                <h3 className="text-xl font-bold">CodeChef</h3>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm">
                  4 Star
                </span>
                <span className="text-gray-400 text-sm">Rating: 1886</span>
              </div>
              <p className="text-gray-400 mb-4">
                Active participant in Long Challenges and Cook-Offs. Consistently improving problem-solving skills and contest rankings.
              </p>
              <a
                href="https://www.codechef.com/users/public_hope_67"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Profile →
              </a>
            </div>

            {/* GeeksforGeeks Card */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png" 
                  alt="GeeksforGeeks" 
                  className="w-12 h-12 rounded-lg"
                />
                <h3 className="text-xl font-bold">GeeksforGeeks</h3>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm">
                  4 Star
                </span>
                <span className="text-gray-400 text-sm">Max Rating:1867</span>
              </div>
              <p className="text-gray-400 mb-4">
            Achieved a Coding Score of 500+, placing in the top 7% of users on the platform.
              </p>
              <a
                href="https://www.geeksforgeeks.org/user/anuragrawr74l/?_gl=1*1ufu86g*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwnPS-BhBxEiwAZjMF0r_vgd3SJR61oZvje9jDzVH3XHucwdnWbo3knd2DENfHmQNhExa0CBoCNpoQAvD_BwE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Profile →
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};