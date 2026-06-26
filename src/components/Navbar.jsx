import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { social } from '../data/social';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Content Creation', href: '/content-creation' },
  { label: 'Achievements', href: '/Achievements' },
  { label: 'Contact', href: '/contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const socialLinks = social.filter((item) => ['GitHub', 'LinkedIn'].includes(item.platform));

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 lg:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-slate-950/80 px-3 py-2.5 shadow-[0_0_70px_rgba(248,1,83,0.16)] backdrop-blur-2xl sm:px-5 sm:py-3">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F80153]/30 bg-gradient-to-br from-[#F80153]/20 to-[#ff4d86]/10 text-sm font-semibold text-[#ff4d86]">
            {profile.name
              .split(' ')
              .map((word) => word[0])
              .join('')
              .slice(0, 2)}
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-100">
              {profile.name}
            </p>
            <p className="text-xs text-slate-400">{profile.role}</p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-slate-300 transition duration-200 hover:text-[#F80153]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {socialLinks.map((item) => {
            const icon = item.platform === 'GitHub' ? <FaGithub className="h-4 w-4" /> : <FaLinkedin className="h-4 w-4" />;

            return (
              <a
                key={item.platform}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-[#F80153]/40 hover:bg-[#F80153]/10 hover:text-[#ff4d86]"
                aria-label={item.platform}
              >
                {icon}
              </a>
            );
          })}
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-white/10 bg-slate-950/90 p-4 shadow-[0_0_50px_rgba(248,1,83,0.12)] backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2">
              {socialLinks.map((item) => {
                const icon = item.platform === 'GitHub' ? <FaGithub className="h-4 w-4" /> : <FaLinkedin className="h-4 w-4" />;

                return (
                  <a
                    key={item.platform}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200"
                    aria-label={item.platform}
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
