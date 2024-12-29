import { cx } from '@/src/utils';
import Link from 'next/link';
import React from 'react';

const Tag = ({ link = '#', name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        'group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-4 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20',
        props.className
      )}
    >
      <span className="text-sm">{name}</span>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-8 bg-accent/25 dark:bg-accentDark/25"></div>
      </div>
    </Link>
  );
};

export default Tag;
