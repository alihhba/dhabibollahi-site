import React from 'react';
import {cn} from "@/lib/utils/index.jsx";

const FetchWrapper = ({
                          children,
                          isLoading,
                          loadingRender,
                          isError,
                          errorRender,
                          notFound,
                          notFoundRender,
                          className,
                          ...props
                      }) => {

    if (isLoading) return loadingRender?.() ?? <div className={cn("")}>loading...</div>;
    if (isError)   return errorRender?.()   ?? <div className={cn("")}>error...</div>;
    if (notFound)  return notFoundRender?.() ?? <div className={cn("")}>notFound...</div>;

    return (
        <div
            className={cn("", className)}
            {...props}
        >
            {children}
        </div>
    );
};

export default FetchWrapper;
