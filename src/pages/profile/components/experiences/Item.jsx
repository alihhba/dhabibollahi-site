import React, {useEffect, useRef, useState} from 'react';
import {cn} from "@/lib/utils/index.jsx";
import Tag from "@/components/tag/Tag.jsx";
import Icon from "@/icon/Icon.jsx";
import icons from "@/lib/utils/icons.js";
import {useNavigate} from "react-router-dom";
import CanAccess from "@/components/auth/CanAccess.jsx";
import Button from "@/components/Button.jsx";

const ExperienceItem = ({ data }) => {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);
    const contentRef = useRef(null);
    const [height, setHeight] = useState(0);


    const { tag, title, content, path, id, listContent } = data || {}




    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? contentRef.current.scrollHeight : 0);
        }
    }, [isOpen]);

    return (
        <div
            onClick={() => setOpen(!isOpen)}
            className="py-5 px-5 bg-gray-100 rounded-[25px] cursor-pointer">
            <div

                className="flex items-start justify-between w-full flex-row-reverse cursor-pointer"
            >
                <div className="sm:h-12 h-6  flex items-center justify-center">
                    <Icon
                        icon={icons.chevron_up}
                        className={cn(
                            'sm:w-8 sm:h-8 max-sm:scale-50 transition-transform duration-500 ease-in-out',
                            isOpen ? 'rotate-180' : ''
                        )}
                    />
                </div>

                <div className="flex flex-col gap-y-2">
                    <div className={'flex items-center gap-4'}>
                        <Tag onClick={(e) => {
                            e.stopPropagation()
                            if (path) {
                                window.open(path, '_blank')
                            }
                        }} className={cn(path && 'cursor-pointer')}>
                            <div className="flex items-center gap-2">
                                <p className={'text-xs'}>{tag}</p>
                                {path ?
                                    <Icon icon={icons.arrow_up_right} className="w-2 h-2" />
                                    : null}
                            </div>
                        </Tag>

                        <CanAccess
                            roles={['admin']}
                        >
                            <Button
                                onClick={() => {
                                    navigate(`/experiences/edit/${id}`)
                                }}
                            >
                                Edit
                            </Button>
                        </CanAccess>
                    </div>
                    <p className="text-[10px] md:text-xs font-semibold text-dark-100">
                        {title}
                    </p>
                </div>
            </div>

            <div
                style={{ maxHeight: `${height}px` }}
                ref={contentRef}
                className="transition-all duration-500 ease-in-out overflow-hidden"
            >
                <p className="text-gray-300 leading-[20px] mt-1 text-[12px]/6">{content}</p>

                {listContent?.length > 0 ? (
                    <div className='mt-5'>
                        {listContent?.length > 0 && (
                            listContent?.map((listItem) => (
                                <div className='flex flex-col gap-2 ml-5'>
                                    <p className='text-sm'>{listItem?.title}</p>
                                    <ul className="list-disc ">
                                        {listItem?.data?.map((item) => (
                                            <li key={item?.id} className="text-gray-300 mt-1 text-xs">
                                                {item?.content}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        )}
                    </div>
                ) : null}
            </div>

        </div>
    );
};

export default ExperienceItem;
