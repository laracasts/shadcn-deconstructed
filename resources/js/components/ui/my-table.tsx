import { cn } from '@/lib/utils';
import { ComponentProps, ReactNode } from 'react';

export function MyTable({ children }: { children: ReactNode }) {
    return <table className="caption-bottom">{children}</table>;
}

export function MyTableCaption({ children }: { children: ReactNode }) {
    return <caption className="p-2 text-sm text-slate-600">{children}</caption>;
}

export function MyTableHead({ children }: { children: ReactNode }) {
    return <thead>{children}</thead>;
}

export function MyTableBody({ children }: { children: ReactNode }) {
    return <tbody>{children}</tbody>;
}

export function MyTableRow({ children }: { children: ReactNode }) {
    return <tr className="border-t">{children}</tr>;
}

export function MyTableHeading({ children, className = '' }: { children: ReactNode; className?: string }) {
    return <th className={cn('p-2 text-left', className)}>{children}</th>;
}

export function MyTableCell({ className, ...props }: ComponentProps<'td'>) {
    return <td className={cn('p-2', className)} {...props} />;
}
