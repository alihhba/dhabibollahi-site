import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {cn} from "@/lib/utils/index.jsx";
import Icon from "@/icon/Icon.jsx";
import icons from "@/lib/utils/icons.js";

const VisualCard
    = ({data}) => {
    const [isOpen, setOpen] = useState(true);
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);

    const {tag, title, content , date , minRead} = data || {}


    useLayoutEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpen]);

    return (
        <div
            // onClick={() => setOpen(!isOpen)}
            className="py-5 px-6 bg-gray-100 rounded-[25px] cursor-pointer">
            <div

                className="flex items-center justify-start md:justify-between w-full flex-row-reverse cursor-pointer"
            >
                <div className="md:flex items-center justify-center hidden">
                    <Icon
                        icon={icons.arrow_up_right}
                        className={cn(
                            'sm:w-8 sm:h-8 text-gray-700 max-sm:scale-50 transition-transform duration-500 ease-in-out',
                            isOpen ? '' : ''
                        )}
                    />
                </div>

                <div className="w-full">
                    <p className="text-lg  font-semibold text-dark-100">
                        {title}
                    </p>
                </div>
            </div>

            <div
                // style={{maxHeight: `${height}px`}}
                ref={contentRef}
                className={cn(
                    'transition-all duration-500 ease-in-out overflow-hidden'
                )}
            >
                <p className="text-gray-300 mt-1 text-[12px]/6">
                    {content}
                </p>
            </div>

            <div className={'flex justify-between items-center w-full mt-4'}>
                <p className={'text-xs text-black/50'}>
                    {date}
                </p>

                <p className={'text-xs text-black/50'}>
                    {minRead}
                </p>
            </div>
        </div>
    );
};

export default VisualCard
;
