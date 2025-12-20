import React from 'react';
import { Link } from 'react-router-dom';
import FloatingLines from './FloatingLines';
import Reveal from './Reveal';
import ShinyText from './ShinyText';
import { ArrowRight } from 'lucide-react';

import { useTheme } from '../theme/theme';

const Hero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section className="relative w-full h-[700px] md:h-[800px] flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

      {/* Background with WebGL */}
      <div className="absolute inset-0 w-full h-full">
        <FloatingLines
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          linesGradient={['#8b5cf6', '#a855f7', '#6366f1']}
          mixBlendMode={theme === 'dark' ? 'screen' : 'normal'}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-20">
        <Reveal width="100%" delay={0.1}>
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm text-violet-600 dark:text-violet-300 text-xs font-semibold uppercase tracking-wider">
            Premium Digital Agency
          </div>
        </Reveal>

        <Reveal width="100%" delay={0.2}>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight drop-shadow-sm dark:drop-shadow-lg"
            style={{
              '--hero-gradient': 'var(--shiny-gradient-light, linear-gradient(to right, #7c3aed, #4f46e5))', // fallback light (violet-600)
            } as React.CSSProperties}
          >
            {/* CSS Variable injection for mode-aware gradient */}
            <span className="hidden dark:block" style={{ display: 'none' }} aria-hidden="true">
              {/* Hack to inject the dark variable without using style tag which might be blocked by CSP or messy */}
              {/* Actually, best to use a class utility or inline style conditionally, but context is hard to pass style prop.
                    Let's use the parent style prop + standard classes. 
                    Wait, I can just conditionally pass the style prop to ShinyText based on a hook? 
                    No, I can't use hooks inside the return easily without refactoring heavy.
                    CSS Variable strategy:
                */}
            </span>
            <style>{`
                :root { --hero-shine-base: linear-gradient(to right, #7c3aed, #4f46e5); }
                .dark { --hero-shine-base: linear-gradient(to right, #a78bfa, #818cf8); }
            `}</style>

            Websites & Apps <br className="hidden md:block" />
            <ShinyText
              text="That Drive Business."
              disabled={false}
              speed={4}
              shineColor="167, 139, 250"
              className="font-bold pb-2"
              style={{
                '--shiny-base': 'var(--hero-shine-base)'
              } as React.CSSProperties}
            />
          </h1>
        </Reveal>

        <Reveal width="100%" delay={0.3}>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Order systems, business websites, and custom apps designed for growth.
            We transform your requirements into high-performance digital tools.
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-3.5 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] flex items-center justify-center gap-2"
            >
              View Services <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 border border-slate-300 dark:border-slate-600 hover:border-violet-600 dark:hover:border-white text-slate-600 dark:text-slate-300 hover:text-white dark:hover:text-white rounded-full font-semibold transition-all bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:bg-violet-600 dark:hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>


      </div>

      {/* Gradient fade at bottom to merge with next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;