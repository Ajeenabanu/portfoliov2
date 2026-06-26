import { motion } from 'framer-motion';
import { Award, BadgeCheck, Sparkles } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const achievementsList = [
  {
    title: 'MERN Stack Development',
    issuer: 'Certified Learning Track',
    year: '2024',
    description: 'Focused on building full-stack applications with React, Node.js, Express.js, and MongoDB.'
  },
  {
    title: 'React & Modern Frontend',
    issuer: 'Frontend Certification',
    year: '2023',
    description: 'Strengthened core UI development skills with reusable components, responsive design, and state management.'
  },
  {
    title: 'JavaScript & API Development',
    issuer: 'Developer Certification',
    year: '2023',
    description: 'Covered advanced JavaScript, async workflows, and modern REST API integration practices.'
  }
];

const Achievements = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.22),_transparent_30%),linear-gradient(135deg,_#030712_0%,_#111827_45%,_#18181b_100%)] text-white pb-5"
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
            Achievements
          </div> */}
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
           Achievements & Certifications
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
A collection of professional achievements, certifications, and milestones that reflect my continuous growth as a MERN Stack Developer, technical mentor, and lifelong learner.          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {achievementsList.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_0_70px_rgba(167,139,250,0.12)] backdrop-blur-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-200">
                <Award className="h-6 w-6" />
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">
                  {item.issuer}
                </p>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                  {item.year}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-violet-200">
                <BadgeCheck className="h-4 w-4" />
                Verified Achievement
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
