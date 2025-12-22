import React from 'react';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, icon }) => {
  return (
    <div className="h-full p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group">
      <div className="mb-6 w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
        {title}
      </h3>

      <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm leading-relaxed">
        {description}
      </p>

      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
            <Check size={16} className="text-blue-500 mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;