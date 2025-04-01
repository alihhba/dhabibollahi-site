import React from 'react';
import {cn} from "@/lib/utils/index.jsx";


const PageContent = ({children , className , ...props}) => {
    return (
        <div className={cn('flex flex-col h-full grow  md:max-w-5xl 2xl:max-w-7xl w-full self-center   p-6 max-sm:p-4 '  , className)} {...props}>
            {children}
        </div>
    );
};




export default PageContent
