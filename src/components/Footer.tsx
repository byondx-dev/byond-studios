import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';
import ShinyText from './ShinyText';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
            <ShinyText
              text="Byond Studios"
              disabled={false}
              speed={3}
              className="font-bold text-lg tracking-tighter"
            />
          </div>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
        </div>

        <div className="flex gap-4">
          {[Twitter, Linkedin, Github].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Social Link"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;