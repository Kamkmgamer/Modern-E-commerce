// src/components/ui/Button.tsx


import { type ButtonHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    const base = 'px-4 py-2 rounded-2xl font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-transform transform hover:-translate-y-0.5';
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
      outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    };
    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';