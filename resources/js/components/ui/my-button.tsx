import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps, ReactNode } from 'react';
import { MySlot } from './my-slot';

type MyButtonProps = {
    children: ReactNode;
    className?: string;
    asChild?: boolean;
} & VariantProps<typeof myButtonVariants> &
    ComponentProps<'button'>;

const myButtonVariants = cva('rounded-sm border border-transparent text-sm font-medium disabled:bg-slate-300 disabled:text-slate-500', {
    variants: {
        size: {
            xl: 'px-7 py-4',
            large: 'px-6 py-3',
            medium: 'px-5 py-2',
            small: 'px-4 py-1',
        },
        look: {
            primary: 'bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-700',
            secondary: 'bg-slate-200 text-slate-900 hover:bg-slate-300 active:bg-slate-400',
            outline: 'border border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100 active:bg-slate-200',
        },
    },
    defaultVariants: {
        size: 'medium',
        look: 'primary',
    },
    compoundVariants: [
        {
            size: ['large', 'medium'],
            look: ['outline', 'primary'],
            className: 'uppercase',
        },
    ],
});

export function MyButton({ children, className = '', size, look, asChild = false, ...props }: MyButtonProps) {
    const Component = asChild ? MySlot : 'button';

    return (
        <Component className={cn(myButtonVariants({ size, look, className }))} {...props}>
            {children}
        </Component>
    );
}
