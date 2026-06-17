import { Users, Target, Zap } from 'lucide-react';

export default function ClubInfo() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            More than just a coding club.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            Android VIT Chennai is a hub for Tech developers on campus. We bridge the gap between academic learning and industry requirements through collaborative development.
          </p>
        </div>

        <div className="space-y-6">
          {/* Community First */}
          <div className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 transition-colors group hover:border-gray-200 dark:hover:border-gray-700">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center shrink-0">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Community First</h3>
              <p className="text-gray-600 dark:text-gray-400">Join over 100 active members passionate about technology and design.</p>
            </div>
          </div>

          {/* Hands-on Projects */}
          <div className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 transition-colors group hover:border-gray-200 dark:hover:border-gray-700">
            <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center shrink-0">
              <Target className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Hands-on Projects</h3>
              <p className="text-gray-600 dark:text-gray-400">Build real-world applications and add impactful work to your portfolio.</p>
            </div>
          </div>

          {/* Skill Workshops */}
          <div className="flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 transition-colors group hover:border-gray-200 dark:hover:border-gray-700">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center shrink-0">
              <Zap className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Skill Workshops</h3>
              <p className="text-gray-600 dark:text-gray-400">Learn from industry experts and master the latest tools, frameworks, and workflows.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}