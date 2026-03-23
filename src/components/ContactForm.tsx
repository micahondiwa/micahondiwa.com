import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { SOCIALS } from '../constants';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-6xl font-serif font-bold mb-10 tracking-tighter">Let's build the <br /><span className="italic text-neutral-400">next big thing.</span></h2>
            <p className="text-xl text-neutral-500 mb-12 leading-relaxed">
              Whether you have a question about my work or want to discuss a potential project, 
              I'm always happy to chat.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              {SOCIALS.map(social => (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-colors group"
                >
                  <div className="p-2 bg-white rounded-lg border border-neutral-100 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                    {social.icon}
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-12 rounded-[2.5rem] shadow-2xl shadow-neutral-200/50 border border-neutral-100">
            <div className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-neutral-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-neutral-900/5 transition-all outline-none font-medium" 
                  placeholder="Micah Ondiwa"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-neutral-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-neutral-900/5 transition-all outline-none font-medium" 
                  placeholder="micah@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Project Details</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-neutral-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-neutral-900/5 transition-all outline-none resize-none font-medium" 
                  placeholder="Tell me about your vision..."
                />
              </div>
              <button 
                disabled={status === 'loading'}
                className="w-full py-5 bg-neutral-900 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 hover:bg-neutral-800 transition-all disabled:opacity-50 shadow-xl shadow-neutral-900/20"
              >
                {status === 'loading' ? 'Processing...' : 'Send Inquiry'}
                <Send className="w-4 h-4" />
              </button>
              
              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-emerald-50 text-emerald-700 rounded-xl text-sm font-bold text-center">
                  Message sent! I'll be in touch shortly.
                </motion.div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
