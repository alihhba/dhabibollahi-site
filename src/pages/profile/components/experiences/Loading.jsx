import React from "react";

const ExperienceItemLoading = () => {
    return (
        <div className="py-5 px-6 bg-gray-100 rounded-[25px]">
            <div className="flex items-start justify-between w-full flex-row-reverse">
                {/* chevron placeholder */}
                <div className="sm:h-12 h-6 flex items-center justify-center">
                    <div className="sm:w-8 sm:h-8 max-sm:scale-50 rounded-full bg-gray-300 animate-pulse" />
                </div>

                <div className="flex flex-col gap-y-2">
                    <div className="h-7 w-20 bg-gray-300 rounded-md animate-pulse" />

                </div>
            </div>

            {/* content placeholder */}
            <div className="transition-all duration-500 ease-in-out overflow-hidden">
                <div className="">
                    <div className="h-3 w-3/6 bg-gray-200 rounded animate-pulse" />

                </div>
            </div>
        </div>
    );
};

export default ExperienceItemLoading;
