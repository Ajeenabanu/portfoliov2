import { motion } from 'framer-motion';
import { Award, BadgeCheck } from 'lucide-react';
import Navbar from '../../components/Navbar';
import certificateImage from '../../assets/IMG_4222.jpeg';
import mentorImage from '../../assets/IMG_4223.jpg';
import certifigate from '../../assets/certificateget.jpg';
import mentorImage2 from '../../assets/mentor.png';
const achievementsList = [
  {
    title: 'Certificate of Appreciation',
    issuer: 'Srishti Innovative',
    year: '2025',
    description: 'Awarded for best performance in learning and development with outstanding dedication and exemplary results.',
    image: certificateImage
  },
  {
    title: 'Best Mentor of the Year',
    issuer: 'Srishti Innovative',
    year: '2025',
    description: 'Recognized for exceptional mentorship, leadership, and contribution to team growth throughout the year.',
    image: mentorImage2
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
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
           Achievements & Certifications
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
A collection of professional achievements, certifications, and milestones that reflect my continuous growth as a MERN Stack Developer, technical mentor, and lifelong learner.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-[0_10px_60px_rgba(15,23,42,0.55)]">
              <img
                src={certifigate}
                alt="Certificate of Appreciation"
                className="h-84 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-[0_10px_60px_rgba(15,23,42,0.55)]">
              <img
                src={mentorImage}
                alt="Best Mentor of the Year"
                className="h-84 w-full object-cover"
              />
            </div>
          </div>
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
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-800/70">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
              </div>

              <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-200">
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
