import { motion } from 'motion/react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer 
} from 'recharts';
import { SKILLS, DOMAIN_EXPERTISE } from '../constants';

export const SkillsSection = () => (
  <section id="skills" className="py-32 px-6 border-t border-neutral-100 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="mb-20 text-center max-w-2xl mx-auto">
        <h2 className="text-6xl font-serif font-bold mb-8 tracking-tighter">Core Capabilities.</h2>
        <p className="text-neutral-500 leading-relaxed text-lg">
          Bridging the gap between financial engineering, data science, and scalable backend architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[250px]">
        {/* Radar Chart Card - Large */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 lg:col-span-3 row-span-2 p-8 bg-neutral-900 rounded-[2.5rem] text-white flex flex-col"
        >
          <h3 className="text-2xl font-serif font-bold mb-2">Domain Expertise</h3>
          <p className="text-neutral-400 text-sm mb-8">Quantitative & Technical Balance</p>
          <div className="flex-grow min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={DOMAIN_EXPERTISE}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#888', fontSize: 10 }} />
                <Radar
                  name="Micah"
                  dataKey="A"
                  stroke="#fff"
                  fill="#fff"
                  fillOpacity={0.2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Skill Cards */}
        {SKILLS.map((skill, idx) => {
          const sizeClasses = {
            small: 'md:col-span-1 lg:col-span-1 row-span-1',
            medium: 'md:col-span-2 lg:col-span-2 row-span-1',
            large: 'md:col-span-2 lg:col-span-3 row-span-1',
          };

          return (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 bg-neutral-50 rounded-[2.5rem] border border-neutral-100 flex flex-col justify-between ${sizeClasses[skill.size || 'small']}`}
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-neutral-900 shadow-sm border border-neutral-100">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold">{skill.name}</h3>
                </div>
                {skill.description && (
                  <p className="text-neutral-500 text-xs mb-4 line-clamp-2">{skill.description}</p>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.slice(0, 5).map(item => (
                  <span key={item} className="px-3 py-1 bg-white text-neutral-600 text-[9px] font-bold uppercase tracking-widest rounded-full border border-neutral-100 shadow-sm">
                    {item}
                  </span>
                ))}
                {skill.items.length > 5 && (
                  <span className="px-3 py-1 bg-neutral-200 text-neutral-500 text-[9px] font-bold uppercase tracking-widest rounded-full">
                    +{skill.items.length - 5}
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);
