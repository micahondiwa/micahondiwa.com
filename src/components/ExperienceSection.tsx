import { motion } from 'motion/react';
import { EXPERIENCE } from '../constants';

export const ExperienceSection = () => (
  <section id="experience" className="py-32 px-6 bg-neutral-50">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-6xl font-serif font-bold mb-6 tracking-tighter">Professional <br />Journey.</h2>
          <p className="text-xl text-neutral-500 leading-relaxed">
            Building scalable systems and leading technical teams in production environments.
          </p>
        </div>
      </div>
      
      <div className="space-y-12">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-12 gap-8 p-10 bg-white rounded-[2.5rem] border border-neutral-100 hover:shadow-xl transition-all group"
          >
            <div className="md:col-span-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-2 block">{exp.period}</span>
              <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-neutral-600 transition-colors">{exp.role}</h3>
              <div className="space-y-1">
                <p className="text-sm font-bold text-neutral-900 uppercase tracking-widest">{exp.company}</p>
                {exp.contractor && (
                  <p className="text-[10px] font-medium text-neutral-400 italic tracking-wide">{exp.contractor}</p>
                )}
              </div>
            </div>
            <div className="md:col-span-8">
              <ul className="space-y-4 mb-8">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex gap-3 text-neutral-500 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 bg-neutral-900 rounded-full shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-neutral-50 text-neutral-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-neutral-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
