import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import { profile } from '../../data/profile';
import { social } from '../../data/social';
import Navbar from '../../components/Navbar';
import resumePdf from '../../assets/AjeenaBanuSNResume.pdf';

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  YouTube: FaYoutube
};

const metrics = [
  { value: '2.8+', label: 'Years Experience' },
  { value: '2', label: 'Enterprise Products' },
  { value: 'MERN', label: 'Stack' },
  { value: 'Creator', label: 'Content' }
];

const Hero = () => {
  const socialLinks = social.filter((item) => ['GitHub', 'LinkedIn', 'Instagram', 'YouTube'].includes(item.platform));

  return (
    <section
      id="home"
      className="hero-shell relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.22),_transparent_30%),linear-gradient(135deg,_#030712_0%,_#111827_45%,_#18181b_100%)] text-white"
    >
      <Navbar/>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="floating-orb floating-orb-one" />
        <div className="floating-orb floating-orb-two" />
        <div className="floating-orb floating-orb-three" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),_transparent_60%)]" />
      </div>
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-violet-500/25 to-transparent blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-12 sm:px-8 lg:px-12 lg:py-12">
        <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="max-w-3xl"
          >
          

            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-6xl lg:leading-[0.95]">
              {profile.name}
            </h1>

            <p className="mt-4 text-lg font-medium text-violet-300 sm:text-xl">
              {profile.role}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-slate-300">
              <span >
 <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200">
             {profile.company}
            </div>             
             </span>
              <span className="">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200">
             {profile.experience.label}
            </div>       
               
              </span>
            </div>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {/* <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a> */}
              <a
                href={resumePdf}
                download
                className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-5 py-3 text-sm font-semibold text-violet-100 transition hover:bg-violet-500/20"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
              >
                <Send className="h-4 w-4" />
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = socialIcons[item.platform] || FaGithub;
                return (
                  <a
                    key={item.platform}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
                    aria-label={item.platform}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="mx-auto w-full max-w-lg"
          >
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_0_70px_rgba(167,139,250,0.16)] backdrop-blur-xl sm:p-7">
              <div className="rounded-[1.35rem] border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-slate-900/70 to-slate-950 p-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-2xl font-semibold text-white">{metric.value}</p>
                      <p className="mt-1 text-sm text-slate-400">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Featured Products
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">HRMS & CV</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Building reliable digital products for modern teams with the MERN stack.
                  </p>
                </div>

                {/* <div className="mt-5 rounded-[1rem] border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">
                    Professional Snapshot
                  </p>
                </div> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
