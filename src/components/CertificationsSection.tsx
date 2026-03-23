import { motion } from 'motion/react';
import { CERTIFICATIONS } from '../constants';

export const CertificationsSection = () => (
  <section className="py-32 px-6 bg-neutral-900 text-white">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
        <div className="lg:w-1/3">
          <h2 className="text-5xl font-serif font-bold tracking-tighter mb-6">Professional <br /><span className="text-neutral-500 italic">Certifications.</span></h2>
          <p className="text-neutral-400 leading-relaxed">
            Continuous learning through specialized labs and industry-recognized certifications 
            from global institutions.
          </p>
        </div>
        <div className="lg:w-2/3 grid gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500 block mb-2">{cert.issuer} · {cert.year}</span>
                  <h3 className="text-xl font-serif font-bold group-hover:text-neutral-300 transition-colors">{cert.title}</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 text-neutral-400 text-[9px] font-bold uppercase tracking-widest rounded-full border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
