import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t   border-white/10 bg-slate-950/90 px-6 py-6 text-sm text-slate-400 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Ajeena Banu S N. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
