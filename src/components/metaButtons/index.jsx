import { useState } from 'react';
import Icon from "@/icon/Icon.jsx";
import icons from "@/lib/utils/icons.js";
import {projects} from "@/data/index.js";
import {useParams} from "react-router-dom";

const MetaButtons = () => {
    const [isShareOpen, setIsShareOpen] = useState(false);
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const {projectId} = useParams()

    const closeModals = () => {
        setIsShareOpen(false);
        setIsInfoOpen(false);
    };

    const currentPorject = projects.find(item => +item?.id === +projectId?.split('-')[0] )

    return (
        <>
            <div className={'flex flex-col gap-7 items-center justify-center'}>
                <div>
                    <p className={'text-[14px]'}>Designed & built by Danial | © 2025 All rights reserved.</p>
                </div>
                <div className={'flex items-center justify-center gap-6'}>
                    <button
                        onClick={() => setIsShareOpen(true)}
                        className={'w-12 h-12 cursor-pointer flex items-center justify-center rounded-xl border border-black/10 hover:bg-gray-50 transition-colors'}
                    >
                        <Icon
                            className={'w-7 h-7'}
                            icon={icons.share}
                        />
                    </button>
                    <button
                        onClick={() => setIsInfoOpen(true)}
                        className={'w-12 h-12 cursor-pointer flex items-center justify-center rounded-xl border border-black/10 hover:bg-gray-50 transition-colors'}
                    >
                        <Icon
                            className={'w-7 h-7'}
                            icon={icons.info}
                        />
                    </button>
                </div>
            </div>

            {/* Share Modal */}
            {isShareOpen && (
                <div className="fixed backdrop-blur-sm inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/10"
                        onClick={closeModals}
                    />

                    <div className="relative bg-white rounded-2xl p-4 max-w-md w-full mx-4 shadow-xl border border-black/10">
                        <div className={'flex items-center justify-between mb-4'}>
                            <p className={'text-md font-semibold'}>Share</p>
                            <button
                                onClick={closeModals}
                                className={'w-8 h-8 cursor-pointer flex items-center justify-center rounded-lg border border-black/10 hover:bg-gray-50 transition-colors'}
                            >
                                <Icon
                                    className={'w-5 h-5'}
                                    icon={icons.close}
                                />
                            </button>
                        </div>

                        <p className={'text-xs font-light text-[#6F6F6F] mb-3'}>
                            Copy the link to share this page
                        </p>

                        {/* Link display and copy section */}
                        <div className="flex items-center gap-2">
                            <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 overflow-hidden">
                                <p className="text-sm text-gray-700 truncate">
                                    {typeof window !== 'undefined' ? window.location.href : ''}
                                </p>
                            </div>
                            <button
                                onClick={() => {
                                    if (typeof window !== 'undefined') {
                                        navigator.clipboard.writeText(window.location.href)
                                            .then(() => {
                                                // Optional: Show success message
                                                // alert('Link copied to clipboard!');
                                            })
                                            .catch(err => {
                                                console.error('Failed to copy: ', err);
                                            });
                                    }
                                }}
                                className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap"
                            >
                                Copy
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* Info Modal */}
            {isInfoOpen && (
                <div className="fixed backdrop-blur-sm inset-0 z-50 flex items-center justify-center">
                    <div
                        className={'relative bg-white rounded-2xl p-4 max-w-md w-full mx-4 shadow-xl border border-black/10'}>
                        <div className={'flex items-center justify-between'}>
                            <p className={'text-md font-semibold'}>Details</p>
                            <button
                                onClick={() => closeModals()}
                                className={'w-12 h-12 cursor-pointer flex items-center justify-center rounded-xl border border-black/10 hover:bg-gray-50 transition-colors'}
                            >
                                <Icon
                                    className={'w-10 h-10'}
                                    icon={icons.close}
                                />
                            </button>
                        </div>

                        <p className={'text-xs font-light text-[#6F6F6F]'}>
                            Posted {currentPorject?.date}
                        </p>

                        <div className={'mt-4 flex flex-wrap gap-1.5'}>
                            {currentPorject?.tags?.map(item => {
                                return (
                                    <div
                                        key={item}
                                        className={'text-[12px] font-medium rounded-xl p-3 bg-[#F3F3F4] flex items-center justify-center'}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MetaButtons;
