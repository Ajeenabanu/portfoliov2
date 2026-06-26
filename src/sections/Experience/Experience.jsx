import { motion } from 'framer-motion';
import { BriefcaseBusiness, Sparkles } from 'lucide-react';
import { experience } from '../../data/experience';
import Navbar from '../../components/Navbar';

const Experience = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.22),_transparent_30%),linear-gradient(135deg,_#030712_0%,_#111827_45%,_#18181b_100%)] text-white pb-9"
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
            Experience
          </div> */}
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Professional journey in building scalable products.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            A focused timeline of my work at Srishti Innovative, where I contributed across frontend and backend layers to deliver modern web solutions.
          </p>
        </motion.div>

        <div className="mt-16 space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={item.company + item.duration}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className="relative pl-8 sm:pl-12"
            >
              <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-slate-950 bg-violet-400 shadow-[0_0_0_6px_rgba(167,139,250,0.2)]" />
              <div className="absolute left-[7px] top-6 h-full w-px bg-gradient-to-b from-violet-400/80 to-transparent" />

              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_0_70px_rgba(167,139,250,0.12)] backdrop-blur-xl">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-200">
                      <BriefcaseBusiness className="h-4 w-4" />
                      {item.company}
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-300">
                    {item.duration}
                  </div>
                </div>

                <p className="mt-5 text-lg leading-8 text-slate-300">{item.description}</p>

                <div className="mt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">
                    Responsibilities & Achievements
                  </p>
                  <ul className="mt-4 space-y-3">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm leading-7 text-slate-300">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-violet-400" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
