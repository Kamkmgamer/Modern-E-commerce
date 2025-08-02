// src/components/ui/Input.tsx


import { type InputHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, ...props }, ref) => (
    <div className={clsx('flex flex-col space-y-1', className)}>
      {label && <label className='text-sm font-medium text-gray-700 dark:text-gray-300'>{label}</label>}
      <input
        ref={ref}
        className='px-3 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
        {...props}
      />
    </div>
  )
);
Input.displayName = 'Input';