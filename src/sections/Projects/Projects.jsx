import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, ShieldCheck, Sparkles, Workflow } from 'lucide-react';
import Navbar from '../../components/Navbar';

const enterpriseProjects = [
  {
    title: 'HRMS',
    badge: 'Enterprise Solution',
    teamBadge: 'Team Project',
    shortCaption:
      'A collaborative HR platform for managing workforce operations, attendance, payroll, leave, and organization-wide reporting.',
    description:
      'The Human Resource Management System is a scalable enterprise application built to streamline and digitize daily HR operations. Developed collaboratively, it centralizes employee records, attendance, payroll, leave workflows, and reporting to improve operational efficiency across teams.',
    features: [
      'Employee Management',
      'Attendance Management',
      'Payroll',
      'Leave Management',
      'Departments',
      'Designations',
      'Shift Management',
      'Employee Self Service',
      'Reports',
      'Dashboard',
      'Role-Based Access Control',
      'Authentication',
      'Notifications'
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'JWT', 'REST APIs', 'Git', 'Postman'],
    contributions: [
      'Developed responsive React components for core HR modules.',
      'Built REST APIs with Node.js and Express.js.',
      'Worked on attendance, payroll, and leave workflows.',
      'Implemented secure authentication and authorization.',
      'Integrated MongoDB collections and improved overall performance.',
      'Collaborated with QA, designers, and developers to deliver production-ready features.'
    ],
    impact: 'Improved HR workflow visibility and reduced manual administrative effort through a centralized digital platform.'
  },
  {
    title: 'Clinical Vista',
    badge: 'Healthcare Platform',
    teamBadge: 'Team Project',
    shortCaption:
      'A healthcare management platform designed to simplify clinical workflows, patient coordination, and operational oversight.',
    description:
      'Clinical Vista is an enterprise healthcare management platform created to digitize hospital operations across appointments, consultations, pharmacy, laboratory services, billing, and patient records. It enables efficient coordination for healthcare teams and supports a better service experience for patients.',
    features: [
      'Patient Management',
      'Appointment Scheduling',
      'Doctor Consultation',
      'Medical Records',
      'Laboratory Management',
      'Pharmacy',
      'Billing',
      'Prescription Management',
      'Reports',
      'Dashboard',
      'Authentication',
      'Role-Based Access'
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'JWT', 'REST APIs', 'Git'],
    impact: 'Helped streamline clinical operations and improve access to critical healthcare information across departments.'
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative pb-5 isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.22),_transparent_30%),linear-gradient(135deg,_#030712_0%,_#111827_45%,_#18181b_100%)] px-4 text-white sm:px-6 lg:px-8"
    >
      <Navbar />
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-violet-500/20 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="text-center"
        >
          {/* <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200">
            <Sparkles className="h-4 w-4" />
            Enterprise Projects
          </div> */}
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Enterprise Projects
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
           my professional experience contributing to collaborative development teams, where I helped build scalable, secure, and business-focused solutions using the MERN stack. My role involved developing features, solving technical challenges, collaborating with cross-functional teams, and delivering production-ready software.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 xl:grid-cols-2">
          {enterpriseProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70 shadow-[0_0_70px_rgba(167,139,250,0.12)] backdrop-blur-xl"
            >
              <div className="border-b border-white/10 bg-[linear-gradient(135deg,_rgba(167,139,250,0.2),_rgba(15,23,42,0.95))] p-6 sm:p-8">
                <div className="rounded-[1.3rem] border border-white/10 bg-slate-950/60 p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-violet-200">
                      {project.badge}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                      {project.teamBadge}
                    </span>
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{project.shortCaption}</p>
                    </div>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-200 transition group-hover:rotate-45 group-hover:bg-violet-500/20">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4">
                    <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-violet-200">
                      <Workflow className="h-4 w-4" />
                      Project Overview
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 p-6 sm:p-8">
                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-violet-200">
                    <ShieldCheck className="h-4 w-4" />
                    Key Features
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span key={feature} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-violet-200">
                    <Briefcase className="h-4 w-4" />
                    Technology Stack
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-sm text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* <div>
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-violet-200">
                    <Sparkles className="h-4 w-4" />
                    My Contributions
                  </div>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                    {project.contributions.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-violet-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}

                <div className="rounded-[1.1rem] border border-violet-400/20 bg-violet-500/10 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-200">Business Impact</p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">{project.impact}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
