import React, { useEffect } from 'react';
import Section from '../components/Section';
import Reveal from '../components/Reveal';
import CostEstimator from '../components/CostEstimator';
import { Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = "Contact | Byond Studios";
    window.scrollTo(0, 0);
  }, []);



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
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-lg">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email Us</p>
                      <a href="mailto:hello@byond-studios.com" className="text-slate-900 dark:text-white font-medium hover:text-blue-500 transition-colors">
                        hello@byond-studios.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-lg">
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
              <div className="bg-gradient-to-br from-blue-600 to-sky-600 p-6 rounded-2xl text-white shadow-lg">
                <h3 className="font-bold mb-2">What happens next?</h3>
                <ul className="space-y-3 text-sm text-blue-100">
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

          {/* Booking Button Side */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center p-8 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm shadow-sm min-h-[400px]">
            <Reveal width="100%" delay={0.3}>
              <div className="flex flex-col items-center gap-8 text-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Ready to Start?</h3>
                  <p className="text-slate-600 dark:text-slate-400 max-w-md">
                    Schedule a free discovery call with us to discuss your project and how we can help you achieve your goals.
                  </p>
                </div>

                <a
                  href="https://outlook.office.com/book/ByondStudios@byondx.app/s/bGqbn9OoP0qkzfEy06_t6A2?ismsaljsauthenabled"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 py-4 bg-transparent rounded-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Neon Border Effect - Adaptive for Light Mode */}
                  <div className="absolute inset-0 rounded-xl border-2 border-cyan-500 dark:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)] dark:shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] dark:group-hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] transition-all duration-300"></div>
                  <div className="absolute inset-0 rounded-xl bg-cyan-500/0 group-hover:bg-cyan-500/5 dark:group-hover:bg-cyan-400/10 transition-all duration-300"></div>

                  {/* Button Content */}
                  <div className="relative flex items-center gap-3 text-cyan-600 dark:text-cyan-400 font-bold tracking-wider uppercase">
                    <span>Book a Call</span>
                    <Clock className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </a>

                <p className="text-sm text-slate-500 dark:text-slate-500">
                  Powered by Microsoft Bookings
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-20">
          <CostEstimator />
        </div>
      </Section >
    </div >
  );
};

export default Contact;