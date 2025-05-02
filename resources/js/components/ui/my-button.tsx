import { cn } from '@/lib/utils';
import { ComponentProps, ReactNode } from 'react';

type MyButtonProps = {
    children: ReactNode;
    className?: string;
    size?: 'large' | 'medium' | 'small';
    look?: 'primary' | 'secondary' | 'outline';
} & ComponentProps<'button'>;

// Base classes
const baseClasses = 'rounded-sm border border-transparent text-sm font-medium disabled:bg-slate-300 disabled:text-slate-500';

// Size classes
const sizeClasses: Record<NonNullable<MyButtonProps['size']>, string> = {
    large: 'px-6 py-3',
    medium: 'px-5 py-2',
    small: 'px-4 py-1',
};
// Look classes
const lookClasses: Record<NonNullable<MyButtonProps['look']>, string> = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-700',
    secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300 active:bg-slate-400',
    outline: 'border border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100 active:bg-slate-200',
};

export function MyButton({ children, className = '', size = 'medium', look = 'primary', ...props }: MyButtonProps) {
    return (
        <button className={cn(baseClasses, sizeClasses[size], lookClasses[look], className)} {...props}>
            {children}
        </button>
    );
}
