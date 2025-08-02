// src/components/ui/Card.tsx

import { type HTMLAttributes } from 'react';
import clsx from 'clsx';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ className, hoverable = true, children, ...props }) => {
  const base = 'bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all';
  const hover = hoverable ? 'hover:shadow-2xl hover:-translate-y-1' : '';
  return (
    <div className={clsx(base, hover, className)} {...props}>
      {children}
    </div>
  );
};
Card.displayName = 'Card';