import { motion } from 'framer-motion';
import { Code2, Database, Globe, Wrench, Sparkles } from 'lucide-react';
import { skills } from '../../data/skills';
import Navbar from '../../components/Navbar';

const categories = [
  {
    title: 'Frontend',
    icon: Globe,
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Backend',
    icon: Code2,
    items: ['Node.js', 'Express.js', 'REST APIs']
  },
  {
    title: 'Database',
    icon: Database,
    items: ['MongoDB']
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: ['Git', 'GitHub', 'Postman']
  }
];

const proficiencyMap = {
  React: 'Advanced',
  'Node.js': 'Advanced',
  'Express.js': 'Advanced',
  MongoDB: 'Intermediate',
  JavaScript: 'Advanced',
  HTML: 'Advanced',
  CSS: 'Advanced',
  Bootstrap: 'Advanced',
  'Tailwind CSS': 'Intermediate',
  'REST APIs': 'Advanced',
  Git: 'Advanced',
  GitHub: 'Advanced',
  Postman: 'Advanced'
};

const Skills = () => {
  return (
    <section
      id="home"
      className="relative pb-5 isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.22),_transparent_30%),linear-gradient(135deg,_#030712_0%,_#111827_45%,_#18181b_100%)] text-white"
    >       <Navbar/>
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-violet-500/20 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-2 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="text-center"
        >
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200">
            <Sparkles className="h-4 w-4" />
            Skills
          </div> */}
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Tools and technologies
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_0_70px_rgba(167,139,250,0.12)] backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <p className="text-sm text-slate-400">Core capabilities</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {category.items.map((skill) => (
                    <div key={skill} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-medium text-white">{skill}</p>
                        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-300">
                          {proficiencyMap[skill] || 'Working'}
                        </span>
                      </div>
                      <div className="mt-3 h-2 rounded-full bg-slate-800">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400"
                          style={{ width: skill === 'MongoDB' ? '70%' : '90%' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
