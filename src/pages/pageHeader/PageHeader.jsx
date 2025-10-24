import {cn} from '@/lib/utils/index.jsx';
import Icon from "@/icon/Icon.jsx";
import icons from "@/lib/utils/icons.js";
import {useNavigate} from "react-router-dom";

const PageHeader = ({children, title, className, ...props}) => {
const navigate = useNavigate();

    // default
    if (!children) {
        return (
            <div
                className={cn('flex gap-x-7  z-20  sticky top-0  bg-white-500 sm:py-6 py-4 px-4  sm:px-6 self-center w-full   md:max-w-7xl', className)} {...props}>
                <button
                    onClick={()=>{
                        navigate(-1)
                    }}
                    className={'w-19.5 max-sm:hidden min-w-19.5 card-shadow-2 card-shadow-1 h-19.5 flex cursor-pointer items-center justify-center rounded-[25px]  border-2 border-black/10 bg-white z-20 hover:bg-primary-100 transition-all duration-400 group'}>
                    <Icon icon={icons.chevron_left} className={'group-hover:text-white transition-all duration-400'}/>
                </button>

                <div
                    className={'flex bg-white  z-20  w-full sm:h-19.5 h-12  items-center justify-start border-2 border-black/10 rounded-[14px] sm:rounded-[25px] sm:px-6 px-3 '}>
                    <p className={'sm:text-4xl/10 text-4.5 -mt-0.5 font-normal align-baseline'}>{title}</p>
                </div>
            </div>
        );
    }

    // custom
    return (
        <div
            className={cn('sticky top-0 w-full py-6 px-6  z-50 bg-white-500 max-w-7xl self-center ', className)} {...props}>
            {children}
        </div>
    );
};


export default PageHeader;
