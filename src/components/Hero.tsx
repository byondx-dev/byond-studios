import React from 'react';
import { Link } from 'react-router-dom';
import FloatingLines from './FloatingLines';
import Reveal from './Reveal';
import ShinyText from './ShinyText';
import { ArrowRight } from 'lucide-react';

import { useTheme } from '../theme/theme';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black transition-colors duration-300">

      {/* Background with WebGL */}
      <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out">
        <FloatingLines
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
          linesGradient={['#8b5cf6', '#a855f7', '#6366f1']}
          mixBlendMode={'screen'}
          globalScale={isMobile ? 1.5 : 1.0}
          backgroundColor={'#000000'}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-20">

        <Reveal width="100%" delay={0.2}>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-lg"
            style={{
              '--hero-gradient': 'var(--shiny-gradient-light, linear-gradient(to right, #7c3aed, #4f46e5))', // fallback light (violet-600)
            } as React.CSSProperties}
          >
            {/* CSS Variable injection for mode-aware gradient */}
            <span className="hidden dark:block" style={{ display: 'none' }} aria-hidden="true">
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
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Order systems, business websites, and custom apps designed for growth.
            We transform your requirements into high-performance digital tools.
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3.5 bg-violet-600 hover:bg-violet-700 text-white rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              View Services <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3.5 border border-slate-600 hover:border-white text-slate-300 hover:text-white rounded-full font-semibold transition-all bg-white/5 backdrop-blur-sm hover:bg-white/10 text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>


      </div>

      {/* Gradient fade at bottom to merge with next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;