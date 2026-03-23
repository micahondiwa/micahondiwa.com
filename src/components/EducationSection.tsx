import { motion } from 'motion/react';
import { EDUCATION } from '../constants';

export const EducationSection = () => (
  <section id="education" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-serif font-bold mb-16 tracking-tighter text-center">Academic <br />Foundation.</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {EDUCATION.map((edu, idx) => (
          <motion.div 
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-10 bg-neutral-50 rounded-[2rem] border border-neutral-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 text-neutral-100 font-serif text-8xl font-black -z-0 select-none group-hover:text-neutral-200 transition-colors">
              0{idx + 1}
            </div>
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400 mb-4 block">{edu.period}</span>
              <h3 className="text-xl font-serif font-bold mb-2">{edu.degree}</h3>
              <p className="text-sm text-neutral-500 font-medium">{edu.school}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
