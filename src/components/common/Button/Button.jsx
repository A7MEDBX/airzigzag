import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // 'primary' (navy), 'gold' (gold theme), 'outline', 'white'
  size = 'md', // 'sm', 'md', 'lg'
  className = '',
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'right',
  as,
  to,
  href,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-primary text-white hover:bg-[#0c244b] focus:ring-primary',
    gold: 'bg-accent-gold text-primary hover:bg-[#c29e2f] focus:ring-accent-gold',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
    white: 'bg-white text-primary hover:bg-light-gray focus:ring-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonContent = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!loading && Icon && iconPosition === 'left' && <Icon className="mr-2 h-5 w-5" />}
      {children}
      {!loading && Icon && iconPosition === 'right' && <Icon className="ml-2 h-5 w-5" />}
    </>
  );

  const classes = clsx(baseStyles, variants[variant], sizes[size], className);

  // If a router link is desired
  if (to || as === Link) {
    const MotionLink = motion(Link);
    return (
      <MotionLink
        whileTap={{ scale: 0.98 }}
        to={to}
        className={classes}
        {...props}
      >
        {buttonContent}
      </MotionLink>
    );
  }

  // If an external link/anchor is desired
  if (href || as === 'a') {
    return (
      <motion.a
        whileTap={{ scale: 0.98 }}
        href={href}
        className={classes}
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;
