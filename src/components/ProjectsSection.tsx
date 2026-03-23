import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group bg-white rounded-[2rem] overflow-hidden border border-neutral-100 hover:shadow-2xl transition-all duration-500"
  >
    <div className="aspect-[16/10] overflow-hidden relative">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-6 left-6 flex gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="p-10">
      <h3 className="text-3xl font-serif font-bold mb-4 leading-tight">{project.title}</h3>
      <p className="text-neutral-500 mb-8 leading-relaxed line-clamp-3">{project.description}</p>
      <div className="flex items-center gap-6">
        <a 
          href={project.github} 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:text-neutral-400 transition-colors"
        >
          <Github className="w-4 h-4" /> Code
        </a>
        {project.demo && (
          <a 
            href={project.demo} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:text-neutral-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export const ProjectsSection = () => (
  <section id="projects" className="py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-6xl font-serif font-bold mb-6 tracking-tighter">Featured <br />Systems.</h2>
          <p className="text-xl text-neutral-500 leading-relaxed">
            A selection of production-grade systems focusing on machine learning, 
            scalability, and data integrity.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-neutral-400">
          <div className="w-12 h-[1px] bg-neutral-200" />
          Scroll to explore
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        {PROJECTS.map(project => (
          <div key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  </section>
);
