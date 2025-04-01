import {Outlet} from "react-router-dom";
import FixedMenu from "@/layouts/FixedMenu.jsx";


const MainNavigationLayout = () => {
    return (
        <div className={'w-full'}>
            <div className={''}>
            <Outlet/>
            </div>

            <div className={'fixed bottom-4 sm:bottom-6  mx-auto w-full max-sm:px-4 sm:w-fit left-0 right-0 z-50 '}>
                <FixedMenu/>
            </div>

        </div>
    );
};

export default MainNavigationLayout
