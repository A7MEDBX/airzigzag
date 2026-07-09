import React from 'react';
import clsx from 'clsx';

export const Loading = ({ fullPage = false, className = '' }) => {
  return (
    <div
      className={clsx(
        'flex items-center justify-center',
        fullPage ? 'fixed inset-0 bg-white/80 z-50 h-screen w-screen' : 'py-12',
        className
      )}
    >
      <div className="relative flex items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-light-gray border-t-primary"></div>
        <div className="absolute h-8 w-8 animate-ping rounded-full border-2 border-solid border-accent-gold/40"></div>
      </div>
    </div>
  );
};

export default Loading;
