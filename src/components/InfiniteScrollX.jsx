import {useEffect, useRef, useState} from "react";
import images from "@/lib/utils/images.js";

const InfiniteScrollX = ({tags}) => {
    const scrollContainerRef = useRef(null);
    const [contentWidth, setContentWidth] = useState(0);

    useEffect(() => {
        if (scrollContainerRef.current) {
            setContentWidth(scrollContainerRef.current.scrollWidth / 2);
        }
    }, [tags]);

    return (
        <div className="relative w-full overflow-hidden">
            <div className={'absolute top-0  w-12 rotate-180 h-full  z-10 '}>
                <img src={images.infinite_x_mask} className={'w-full h-full'} alt="mask"/>

            </div>
            <div
                ref={scrollContainerRef}
                className="flex gap-x-2 whitespace-nowrap animate-scroll-x"
                style={{
                    width: "max-content",
                    animation: `scrollX ${contentWidth / 40}s linear infinite`
                }}
            >
                {[...tags, ...tags].map((tag, index) => (
                    <div key={index} className="flex items-center gap-1">
                        <p className="text-gray-900">{tag}</p>
                        {
                            <div className="h-fit w-fit mt-0.5 flex ms-1 items-center justify-center">
                                <div className="w-[4px] h-[4px] rounded-full bg-gray-900"></div>
                            </div>
                        }
                    </div>
                ))}
            </div>
            <div className={'absolute top-0 end-0   w-12  w- h-full  z-10 '}>
                <img src={images.infinite_x_mask} className={'w-full h-full'} alt="mask"/>

            </div>
        </div>
    );
};

export default InfiniteScrollX;
