import React from 'react';
import clsx from 'clsx';

export const Badge = ({
  children,
  variant = 'primary', // 'primary', 'gold', 'outline', 'gray'
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider';

  const variants = {
    primary: 'bg-primary/10 text-primary',
    gold: 'bg-accent-gold/10 text-accent-gold',
    outline: 'border border-primary text-primary',
    gray: 'bg-gray-100 text-gray-600',
  };

  return (
    <span className={clsx(baseStyles, variants[variant], className)}>
      {children}
    </span>
  );
};

export default Badge;
