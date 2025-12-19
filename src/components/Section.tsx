import React from 'react';
import clsx from 'clsx';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className, id, dark = false }) => {
  return (
    <section 
      id={id}
      className={clsx(
        "py-20 md:py-28 px-4 sm:px-6 lg:px-8",
        dark ? "bg-slate-900 text-white" : "bg-transparent",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;