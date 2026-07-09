import React from 'react';
import clsx from 'clsx';

export const Container = ({ children, className, clean = false }) => {
  return (
    <div
      className={clsx(
        !clean && 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
