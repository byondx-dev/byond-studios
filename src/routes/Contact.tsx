import React, { useEffect, useState } from 'react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import { Mail, MessageSquare, Clock, Send, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contact | Byond Studios";
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website',
    budget: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', service: 'Website', budget: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-slate-950">
      <Section>
        <Reveal>
           <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900 dark:text-white mb-6">
            Let's Work Together
          </h1>
          <p className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-16">
            Fill out the form below to get a free quote. We usually respond within 24 hours.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info Side */}
          <div className="lg:col-span-2 space-y-8">
            <Reveal width="100%" delay={0.1}>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Info</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-violet-100 dark:bg-violet-900/20 text-violet-600 rounded-lg">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email Us</p>
                      <a href="mailto:hello@byond-studios.com" className="text-slate-900 dark:text-white font-medium hover:text-violet-500 transition-colors">
                        hello@byond-studios.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-violet-100 dark:bg-violet-900/20 text-violet-600 rounded-lg">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Response Time</p>
                      <p className="text-slate-900 dark:text-white font-medium">Within 24 Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal width="100%" delay={0.2}>
              <div className="bg-gradient-to-br from-violet-600 to-indigo-600 p-6 rounded-2xl text-white shadow-lg">
                <h3 className="font-bold mb-2">What happens next?</h3>
                <ul className="space-y-3 text-sm text-violet-100">
                  <li className="flex items-center gap-2">
                    <span className="bg-white/20 w-5 h-5 flex items-center justify-center rounded-full text-xs">1</span>
                    We review your requirements.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-white/20 w-5 h-5 flex items-center justify-center rounded-full text-xs">2</span>
                    We schedule a short discovery call.
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="bg-white/20 w-5 h-5 flex items-center justify-center rounded-full text-xs">3</span>
                    You get a proposal & timeline.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3">
             <Reveal width="100%" delay={0.3}>
               <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                 {status === 'success' ? (
                   <div className="h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in">
                     <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-full flex items-center justify-center mb-6">
                       <CheckCircle2 size={32} />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                     <p className="text-slate-600 dark:text-slate-400">
                       Thanks for reaching out, {formData.name.split(' ')[0]}. <br/> We'll get back to you shortly.
                     </p>
                     <button 
                       type="button" 
                       onClick={() => setStatus('idle')}
                       className="mt-8 text-violet-600 font-medium hover:underline"
                     >
                       Send another message
                     </button>
                   </div>
                 ) : (
                   <div className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                         <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                         <input
                           type="text"
                           id="name"
                           name="name"
                           required
                           value={formData.name}
                           onChange={handleChange}
                           className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                           placeholder="John Doe"
                         />
                       </div>
                       <div className="space-y-2">
                         <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                         <input
                           type="email"
                           id="email"
                           name="email"
                           required
                           value={formData.email}
                           onChange={handleChange}
                           className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                           placeholder="john@company.com"
                         />
                       </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                         <label htmlFor="service" className="text-sm font-medium text-slate-700 dark:text-slate-300">Service Needed</label>
                         <select
                           id="service"
                           name="service"
                           value={formData.service}
                           onChange={handleChange}
                           className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all appearance-none"
                         >
                           <option>Business Website</option>
                           <option>E-Commerce / Shop</option>
                           <option>Web App / SaaS</option>
                           <option>Mobile App</option>
                           <option>Other</option>
                         </select>
                       </div>
                       <div className="space-y-2">
                         <label htmlFor="budget" className="text-sm font-medium text-slate-700 dark:text-slate-300">Budget (Optional)</label>
                         <select
                           id="budget"
                           name="budget"
                           value={formData.budget}
                           onChange={handleChange}
                           className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all appearance-none"
                         >
                           <option value="">Select a range</option>
                           <option value="low">€1k - €3k</option>
                           <option value="medium">€3k - €10k</option>
                           <option value="high">€10k+</option>
                         </select>
                       </div>
                     </div>

                     <div className="space-y-2">
                       <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Project Details</label>
                       <textarea
                         id="message"
                         name="message"
                         required
                         rows={4}
                         value={formData.message}
                         onChange={handleChange}
                         className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all resize-none"
                         placeholder="Tell us about your project goals..."
                       ></textarea>
                     </div>

                     <button
                       type="submit"
                       disabled={status === 'submitting'}
                       className="w-full py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-violet-500/25"
                     >
                       {status === 'submitting' ? (
                         <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                       ) : (
                         <>
                           Send Message <Send size={18} />
                         </>
                       )}
                     </button>
                   </div>
                 )}
               </form>
             </Reveal>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;