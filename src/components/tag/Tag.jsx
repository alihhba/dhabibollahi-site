import React from 'react';
import {cn} from "@/lib/utils/index.jsx";

const Tag = ({children, type='primary', className, ...props}) => {
    const styleType = {
        primary: 'bg-gray-200'
    }
    return (
        <div
            className={cn('p-2 text-xs font-semibold text-dark-100 rounded-lg w-fit', styleType[type], className)} {...props}>
            {children}
        </div>
    );
};

export default Tag