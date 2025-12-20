import React from 'react';
import { motion } from 'framer-motion';

const phrasesLine1 = [
    "Gastro Apps", "Bestell Webseiten", "Influencer One Pager", "Company Apps",
    "Kunst Webseiten", "Onlinestore", "E-Commerce", "Online Store",
    "Digitale Speisekarten", "Buchungssysteme", "Handwerker Portfolio",
    "Start-up Landing Page", "Immobilien Exposés", "Vereins-Apps",
    "Event Ticketing", "Fitness Coach App"
];

const phrasesLine2 = [
    "Mein Laden braucht eine Webseite", "Mein Cafe braucht eine süße Webseite",
    "Unsere Fabrikmitarbeiter brauchen eine App", "Wir brauchen mehr Kunden",
    "Kundenportal für Kanzleien", "Lieferservice App", "Mitarbeiter Dashboard",
    "Interne Tools", "B2B Plattform", "Digitale Visitenkarte",
    "Podcast Webseite", "Fotografen Galerie", "Hochzeitswebseite",
    "Schichtplaner App", "Inventur Hilfe", "Newsletter Tool", "..."
];

const TextLoop: React.FC = () => {
    return (
        <div className="w-full py-12 bg-slate-50 dark:bg-slate-950 overflow-hidden flex flex-col gap-4 relative">

            {/* Abstract Background Blur - Reduced width/intensity */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-16 md:w-24 h-full bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 opacity-80"></div>
                <div className="absolute top-0 right-0 w-16 md:w-24 h-full bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 opacity-80"></div>
            </div>

            {/* Row 1 - Keywords (Movement Left) */}
            <div className="flex relative items-center">
                <motion.div
                    className="flex whitespace-nowrap gap-2 md:gap-8"
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear"
                    }}
                >
                    {[...phrasesLine1, ...phrasesLine1, ...phrasesLine1].map((text, i) => (
                        <span key={i} className="py-2 text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 cursor-default select-none transition-colors">
                            {text}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Row 2 - User Intents (Movement Right) */}
            <div className="flex relative items-center">
                <motion.div
                    className="flex whitespace-nowrap gap-4 md:gap-12"
                    animate={{ x: [-1000, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 55,
                        ease: "linear"
                    }}
                >
                    {[...phrasesLine2, ...phrasesLine2, ...phrasesLine2].map((text, i) => (
                        <span key={i} className="py-2 text-2xl md:text-3xl font-medium text-slate-400 dark:text-slate-600 italic hover:text-violet-500 dark:hover:text-violet-400 transition-colors cursor-default select-none">
                            "{text}"
                        </span>
                    ))}
                </motion.div>
            </div>

        </div>
    );
};

export default TextLoop;
