import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { scaleIn } from '../../../constants/animations';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  animate = true,
  delay = 0,
  onClick,
  ...props
}) => {
  const cardStyles = clsx(
    'bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col',
    hoverEffect && 'hover:shadow-md hover:border-accent-gold/30 transition-all duration-300 transform hover:-translate-y-1',
    onClick && 'cursor-pointer',
    className
  );

  if (animate) {
    return (
      <motion.div
        variants={scaleIn(delay)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onClick={onClick}
        className={cardStyles}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div onClick={onClick} className={cardStyles} {...props}>
      {children}
    </div>
  );
};

export default Card;
