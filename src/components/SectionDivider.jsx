import React from 'react';

const SectionDivider = ({ variant = 'primary' }) => {
  const colors = {
    primary: 'from-primary/20 via-primary/5 to-transparent',
    accent: 'from-accent/20 via-accent/5 to-transparent',
    dark: 'from-slate-800 via-slate-900 to-slate-900',
  };

  return (
    <div className={`h-px w-full bg-gradient-to-r ${colors[variant]}`}></div>
  );
};

export default SectionDivider;
