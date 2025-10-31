import Icon from "@/icon/Icon.jsx";
import icons from "@/lib/utils/icons.js";
import {cn} from "@/lib/utils/index.jsx";

const GoScrollButton = ({
                            type = 'up'
                        }) => {

    const handleClick = () => {
        if (type === 'up') {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        } else if (type === 'left') {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    return (
        <div
            onClick={() => {
                handleClick()
            }}
            className={'w-[52px] z-50 flex items-center justify-center cursor-pointer h-[52px] rounded-full bg-black/30'}>
            <Icon
                className={cn(
                    'w-8 h-8',
                    type === 'left' && '-rotate-90'
                )}
                icon={icons.arrow_up}
            />
        </div>
    );
};

export default GoScrollButton
