import { SOCIALS } from '../constants';

export const Footer = () => (
  <footer className="py-20 px-6 border-t border-neutral-100">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
        <div className="text-2xl font-serif font-black tracking-tighter">MO.</div>
        <div className="flex flex-wrap justify-center gap-10">
          {SOCIALS.map(social => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-neutral-50">
        <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest">© 2026 Micah Ondiwa. All Rights Reserved.</p>
        <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest">Built with React + Tailwind + Express</p>
      </div>
    </div>
  </footer>
);
