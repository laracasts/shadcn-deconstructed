import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import { ComponentProps, ReactNode, useState } from 'react';

export default function Welcome() {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="min-h-screen bg-slate-300 p-4">
            <Button onClick={() => setToggle(!toggle)}>Toggle: {toggle ? 'on' : 'off'}</Button>
            <div className="mt-4 flex items-start gap-4">
                <Box>
                    <p>I am inside a box</p>
                </Box>
                <Box className={clsx(toggle ? 'rounded-full bg-yellow-300' : 'bg-blue-300')}>
                    <p>I am inside a box</p>
                </Box>
            </div>
        </div>
    );
}

type BoxProps = {
    children: ReactNode;
    className?: string;
} & ComponentProps<'div'>;

function Box({ children, className = '', ...restProps }: BoxProps) {
    return (
        <div className={clsx('rounded-lg bg-white p-8 shadow-md', className)} {...restProps}>
            {children}
        </div>
    );
}
