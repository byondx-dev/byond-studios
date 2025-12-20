import React from 'react';
import { motion } from 'framer-motion';
import { Check, Search, Palette, Code2, Rocket } from 'lucide-react';

interface Step {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const steps: Step[] = [
    {
        title: "Discovery",
        description: "We dive deep into your goals, analyzing requirements and defining the project scope.",
        icon: <Search size={24} />,
    },
    {
        title: "Design",
        description: "We craft modern, user-centric interfaces. You get high-fidelity mockups before we write a single line of code.",
        icon: <Palette size={24} />,
    },
    {
        title: "Development",
        description: "Our experts build your solution using a scalable, performance-first tech stack (React, Node, Cloud).",
        icon: <Code2 size={24} />,
    },
    {
        title: "Launch & Growth",
        description: "We handle the deployment, testing, and provide ongoing support to ensure your product scales.",
        icon: <Rocket size={24} />,
    },
];

const ProcessTimeline: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 relative">
            <div className="space-y-12">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative flex gap-6 md:gap-10"
                    >
                        {/* Connector Line */}
                        {index !== steps.length - 1 && (
                            <div className="absolute left-[23px] md:left-[29px] top-16 bottom-[-48px] w-0.5 bg-gradient-to-b from-violet-200 to-slate-200 dark:from-violet-900 dark:to-slate-800" />
                        )}

                        {/* Icon Bubble */}
                        <div className="relative shrink-0">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-xl shadow-violet-500/5 group-hover:border-violet-500/50 group-hover:shadow-violet-500/20 transition-all duration-300 flex items-center justify-center text-slate-400 group-hover:text-violet-600 dark:text-slate-500 dark:group-hover:text-violet-400 z-10">
                                {step.icon}
                            </div>
                        </div>

                        {/* Content Card */}
                        <div className="flex-1 pt-1 md:pt-3">
                            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 md:p-8 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg dark:hover:shadow-violet-900/10 border border-transparent hover:border-slate-100 dark:hover:border-slate-700 transition-all duration-300">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                                        {step.title}
                                    </h3>
                                    <span className="text-4xl md:text-5xl font-black text-slate-200 dark:text-slate-800 opacity-50 select-none">
                                        0{index + 1}
                                    </span>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProcessTimeline;
