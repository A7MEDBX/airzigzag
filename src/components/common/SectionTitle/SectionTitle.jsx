import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { fadeUp } from '../../../constants/animations';

export const SectionTitle = ({
  title,
  subtitle,
  alignment = 'center', // 'left', 'center', 'right'
  className = '',
  light = false,
}) => {
  return (
    <motion.div
      variants={fadeUp()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={clsx(
        'mb-12 md:mb-16 max-w-3xl flex flex-col',
        alignment === 'center' && 'mx-auto items-center text-center',
        alignment === 'left' && 'items-start text-left',
        alignment === 'right' && 'ml-auto items-end text-right',
        className
      )}
    >
      {subtitle && (
        <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-accent-gold mb-2 block">
          {subtitle}
        </span>
      )}
      <h2
        className={clsx(
          'text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight relative pb-4',
          light ? 'text-white' : 'text-primary'
        )}
      >
        {title}
        <span
          className={clsx(
            'absolute bottom-0 w-16 h-1 rounded',
            alignment === 'center' && 'left-1/2 -translate-x-1/2',
            alignment === 'left' && 'left-0',
            alignment === 'right' && 'right-0',
            'bg-accent-gold'
          )}
        />
      </h2>
    </motion.div>
  );
};

export default SectionTitle;
