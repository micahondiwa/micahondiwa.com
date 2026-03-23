import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { SOCIALS } from '../constants';

export const Hero = () => (
  <section className="relative pt-48 pb-32 px-6 overflow-hidden">
    {/* Decorative background element */}
    <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-neutral-50 skew-x-12 translate-x-1/4" />

    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-600 mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-7xl md:text-9xl font-serif font-bold leading-[0.9] mb-10 tracking-tighter">
            ML/AI <br />
            <span className="text-neutral-300 italic">Engineer.</span>
          </h1>

          <p className="max-w-9xl text-xl text-neutral-600 leading-relaxed mb-12">
            I'm <span className="text-neutral-900 font-bold">Micah Ondiwa</span>, a backend-focused engineer
            specializing in scalable data pipelines, ML-enabled systems, and financial risk modeling.
            Based in Nairobi, Kenya.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-neutral-900 text-white font-bold rounded-2xl hover:shadow-2xl transition-all flex items-center gap-2">
              View Projects <ChevronRight className="w-4 h-4" />
            </a>
            <div className="flex gap-2">
              {SOCIALS.slice(0, 3).map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border border-neutral-200 hover:bg-neutral-50 transition-colors"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-4 hidden lg:block"
        >
        </motion.div>
      </div>
    </div>
  </section>
);
