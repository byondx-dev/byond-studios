import React from 'react';
import { Link } from 'react-router-dom';
import FloatingLines from './FloatingLines';
import Reveal from './Reveal';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[700px] md:h-[800px] flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Background with WebGL */}
      <div className="absolute inset-0 w-full h-full opacity-60">
        <FloatingLines
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          linesGradient={['#8b5cf6', '#a855f7', '#6366f1']}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-20">
        <Reveal width="100%" delay={0.1}>
           <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm text-violet-300 text-xs font-semibold uppercase tracking-wider">
             Premium Digital Agency
           </div>
        </Reveal>
        
        <Reveal width="100%" delay={0.2}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
            Websites & Apps <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
              That Drive Business.
            </span>
          </h1>
        </Reveal>

        <Reveal width="100%" delay={0.3}>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Order systems, business websites, and custom apps designed for growth. 
            We transform your requirements into high-performance digital tools.
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-3.5 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] flex items-center justify-center gap-2"
            >
              View Services <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 border border-slate-600 hover:border-white text-slate-300 hover:text-white rounded-full font-semibold transition-all bg-white/5 backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>

        {/* Trust Chips */}
        <Reveal width="100%" delay={0.6}>
           <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-8 opacity-70">
             {['Fast Delivery', 'Modern Tech Stack', 'SEO Optimized', 'Mobile First'].map((item) => (
               <div key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                 <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                 {item}
               </div>
             ))}
           </div>
        </Reveal>
      </div>
      
      {/* Gradient fade at bottom to merge with next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;