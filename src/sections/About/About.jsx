import { motion } from 'framer-motion';
import { BadgeCheck, Briefcase, Sparkles } from 'lucide-react';
import { profile } from '../../data/profile';
import { experience } from '../../data/experience';
import profilePhoto from '../../assets/aboutimg.png';
import Navbar from '../../components/Navbar';

const stats = [
  { value: '2.8+', label: 'Years Experience' },
  { value: '2', label: 'Enterprise Products' },
  { value: 'MERN', label: 'Stack' },
  { value: 'Creator', label: 'Content' }
];

const About = () => {
  const [currentExperience] = experience;

  return (
   <section
      id="home"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.22),_transparent_30%),linear-gradient(135deg,_#030712_0%,_#111827_45%,_#18181b_100%)] text-white pb-9"
    >       <Navbar/>
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-violet-500/20 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-2 sm:px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="mx-auto w-full max-w-md"
          >
            <div className="rounded-[2rem] mt-7 border border-white/10 bg-slate-900/70 p-5 shadow-[0_0_70px_rgba(167,139,250,0.16)] backdrop-blur-xl sm:p-7">
              <div className="overflow-hidden rounded-[1.4rem] border border-violet-400/20 bg-slate-950/70 p-2">
                <img
                  src={profilePhoto}
                  alt={profile.name}
                  className="h-[430px] w-full rounded-[1.1rem] object-cover object-center"
                />
              </div>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200">
                <Briefcase className="h-4 w-4" />
                {profile.experience.label}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            {/* <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200">
              About Me
            </div> */}

            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Building products and guiding the next wave of developers.
            </h2>

            {/* <p className="mt-5 text-lg leading-8 text-slate-300">
              {profile.summary}
            </p> */}

            <p className="mt-4 text-lg leading-8 text-slate-300">
              I work as a developer who creates scalable web solutions and also supports interns by mentoring them, reviewing their work, and helping them turn ideas into successful projects.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
                Key Highlights
              </p>
              <div className="mt-4 space-y-3">
                {currentExperience?.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
                    <p className="text-sm leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
