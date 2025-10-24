import {useEffect, useRef, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import icons from "@/lib/utils/icons.js";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/Tooltip.jsx";
import {cn} from "@/lib/utils/index.jsx";
import Icon from "@/icon/Icon.jsx";

const menuItems = [
    {id: 1, title: "About Me", icon: icons.profile, path: ""},
    {id: 2, title: "Projects", icon: icons.file, path: "projects"},
    // {id: 3, title: "Test A", icon: icons.pen, path: "testA"},
    {id: 4, title: "Visual Thoughts", icon: icons.doc, path: "visual-thoughts"},
    {
        id: 5, title: "Email to", icon: icons.letter,
        onclick: () => {
            window.open("https://mail.google.com/mail/?view=cm&fs=1&to=dnihabibollahi@gmail.com", '_blank')
        }


    },
    {id: 6, title: "Test", icon: icons.hash, path: "test"},
];

const FixedMenu = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const activeIndex = menuItems.findIndex(
        (item) => pathname.split("/")[1] === item.path
    );

    const currentIndex = activeIndex === -1 ? 0 : activeIndex;

    const refs = useRef([]);

    const [underlineProps, setUnderlineProps] = useState({left: 0, width: 0});

    useEffect(() => {
        if (refs.current[currentIndex]) {
            const buttonEl = refs.current[currentIndex];
            const {offsetLeft, offsetWidth} = buttonEl;
            setUnderlineProps({left: offsetLeft, width: offsetWidth});
        }
    }, [currentIndex, pathname]);

    return (
        <div
            className="relative sm:w-fit bg-white rounded-[23px]  max-sm:w-full max-sm:justify-between z-50 p-3 flex items-center gap-x-4 card-shadow-1 blur_1 card-shadow-2">
            {menuItems.map((item, index) => {
                const isActive = pathname.split("/")[1] === item.path

                return (
                    <Tooltip delayDuration={1}>
                        <TooltipTrigger>
                            <button
                                key={item.id}
                                ref={(el) => (refs.current[index] = el)}
                                onClick={() => {
                                    if (item.onclick) {
                                        item.onclick();
                                    } else {
                                        navigate(`/${item.path}`)
                                    }
                                }}
                                className="relative flex  items-center justify-center transition-all "
                            >
                                <div
                                    className={cn(
                                        "size-12 flex    items-center justify-center border border-black/10 rounded-xl cursor-pointer transition-all duration-300 card-shadow-1 card-shadow-2",
                                        isActive ? "bg-primary-100" : "bg-white"
                                    )}
                                >
                                    <Icon
                                        icon={item.icon}
                                        className={cn(
                                            "w-7 h-7 transition-all duration-300",
                                            isActive ? "text-white" : "text-black"
                                        )}
                                    />
                                </div>

                                {item.borderRight && (
                                    <div className="h-5 w-[1px] bg-gray-200 ms-4 rounded-full"/>
                                )}
                            </button>
                        </TooltipTrigger>
                        <TooltipContent sideOffset={6} className={'bg-white'}>
                            <p className={'text-xs  '}>{item?.title}</p>
                        </TooltipContent>
                    </Tooltip>

                )
                    ;
            })}

            <span
                className="absolute bottom-1.5  h-[3px]  flex items-center justify-center rounded-full transition-all duration-300"
                style={{
                    left: underlineProps.left,
                    width: underlineProps.width,
                }}
            >
                <div className={'w-4 rounded-full bg-blue-600 h-full'}></div>
            </span>
        </div>
    );
};

export default FixedMenu;
