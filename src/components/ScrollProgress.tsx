import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress: React.FC = () => {
    const { scrollYProgress } = useScroll();

    // Smooth out the progress value for a fluid feel
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <React.Fragment>
            {/* Background Track - Only visible on desktop/larger screens */}
            <div className="fixed left-0 top-0 bottom-0 w-1 md:w-1.5 z-[100] bg-slate-200 dark:bg-white/5 hidden md:block">
                {/* Neon Progress Bar */}
                <motion.div
                    className="absolute top-0 left-0 w-full bg-blue-600 dark:bg-blue-500 origin-top shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:shadow-[0_0_20px_rgba(96,165,250,0.8)]"
                    style={{ scaleY, height: "100%" }}
                />
            </div>

            {/* Mobile: Top horizontal bar (optional, can be removed if strictly vertical requested) */}
            {/* The user requested vertical specifically ("vertikal"), so I will keep it vertical and hidden on very small screens to avoid overlaying content */}
        </React.Fragment>
    );
};

export default ScrollProgress;
