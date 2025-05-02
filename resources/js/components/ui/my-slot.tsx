import { Children, cloneElement } from 'react';

export function MySlot({ children, ...props }: any) {
    // Ensure there is only one, valid child element
    const child = Children.only(children);

    // Clone the child
    return cloneElement(child, {
        ...props,
        ...child.props,
    });
}
