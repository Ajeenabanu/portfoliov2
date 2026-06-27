import { motion } from 'framer-motion';
import { ArrowUpRight, PlayCircle, Sparkles, Camera, HeartHandshake, MessageCircleMore } from 'lucide-react';
import { social } from '../../data/social';
import Navbar from '../../components/Navbar';

const creators = [
  {
    platform: 'YouTube',
    title: 'YouTube',
    description: 'Sharing daily vlogs, everyday moments, fun memories, and relatable life stories with a warm and personal touch.',
    categories: ['Daily Vlogs', 'Everyday Life', 'Comedy', 'Personal Stories'],
    link: social.find((item) => item.platform === 'YouTube')?.url || '#',
    accent: 'from-violet-500/20 to-fuchsia-500/10'
  },
  {
    platform: 'Instagram',
    title: 'Instagram',
    description: 'Capturing candid everyday moments, lifestyle highlights, and cheerful snippets that reflect real life and connection.',
    categories: ['Daily Life', 'Lifestyle', 'Everyday Moments', 'Comedy'],
    link: social.find((item) => item.platform === 'Instagram')?.url || '#',
    accent: 'from-fuchsia-500/20 to-violet-500/10'
  }
];

const highlights = [
  'Daily vlogs with a real, personal feel',
  'Lighthearted comedy and relatable moments',
  'A cozy space for everyday stories and memories'
];

const ContentCreation = () => {
  return (
    <section
      id="home"
      className="creative-shell relative isolate overflow-hidden pb-16 text-white sm:pb-20"
    >
      <Navbar />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="floating-orb floating-orb-one" />
        <div className="floating-orb floating-orb-two" />
        <div className="floating-orb floating-orb-three" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_28%),linear-gradient(135deg,_#030712_0%,_#111827_45%,_#18181b_100%)]" />
      </div>
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-violet-500/20 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200">
             Content Creator
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              A creative space for everyday stories, laughs, and real moments.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300 sm:text-xl">
              Sharing daily vlogs, lifestyle highlights, and heartfelt memories through two personal platforms that feel warm, playful, and genuinely human.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={social.find((item) => item.platform === 'YouTube')?.url || '#'}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
              >
                <PlayCircle className="h-4 w-4" />
                Watch on YouTube
              </a>
              <a
                href={social.find((item) => item.platform === 'Instagram')?.url || '#'}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-violet-400/40 hover:bg-violet-500/10"
              >
                <Camera className="h-4 w-4" />
                Follow on Instagram
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl">
                <p className="text-2xl font-semibold text-white">Daily</p>
                <p className="mt-1 text-sm text-slate-400">Storytelling</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl">
                <p className="text-2xl font-semibold text-white">Real</p>
                <p className="mt-1 text-sm text-slate-400">Lifestyle</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl">
                <p className="text-2xl font-semibold text-white">Warm</p>
                <p className="mt-1 text-sm text-slate-400">Connection</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
            className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-5 shadow-[0_0_80px_rgba(167,139,250,0.15)] backdrop-blur-xl sm:p-6"
          >
            <div className="rounded-[1.4rem] border border-violet-400/20 bg-gradient-to-br from-violet-500/15 via-slate-900/70 to-slate-950 p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-200">
                  <HeartHandshake className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300">
                  Personal Brand
                </span>
              </div>

              <div className="mt-5 rounded-[1.2rem] border border-white/10 bg-slate-950/60 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">
                  What this space feels like
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-violet-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
                  <MessageCircleMore className="h-4 w-4 text-violet-300" />
                  Built for connection
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Each post is designed to feel approachable, cheerful, and easy to relate to.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {creators.map((creator, index) => {
            const Icon = creator.platform === 'YouTube' ? PlayCircle : Camera;
            return (
              <motion.article
                key={creator.platform}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6 shadow-[0_0_70px_rgba(167,139,250,0.12)] backdrop-blur-xl"
              >
                <div className={`rounded-[1.4rem] border border-white/10 bg-gradient-to-br ${creator.accent} p-5`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 text-violet-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <a
                      href={creator.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-sm font-medium text-slate-200 transition hover:border-violet-400/40 hover:text-violet-200"
                    >
                      Visit
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-white">{creator.title}</h3>
                  <p className="mt-3 text-lg leading-8 text-slate-300">{creator.description}</p>
                </div>

                <div className="mt-6 rounded-[1.2rem] border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">
                    Content Categories
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {creator.categories.map((category) => (
                      <span key={category} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                    Creator Journey
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Building a personal creative voice through relatable daily stories, lighthearted comedy, and genuine connection with the audience.
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContentCreation;
