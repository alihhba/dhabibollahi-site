import {cn} from '@/lib/utils/index.jsx';
import {useLocation} from "react-router-dom";
import Breadcrumb from "@/components/BreadCrumb.jsx";

const PageHeader = ({children, title, className, ...props}) => {
    const {pathname} = useLocation();

    const breadcrumbItems = [
        {title: pathname?.split('/')[1], href: '/projects'},
        {title: pathname?.split('/')[2]?.split('-').slice(1).join('-')?.replaceAll('-', ' ')},
    ];

    // default
    if (!children) {
        return (
            <div
                className={cn('flex max-md:flex-col max-md:items-start max-md:gap-6 gap-x-7  z-20   top-0  bg-white-500 sm:pt-14 sm:pb-10 py-4  px-4  sm:px-6 self-center w-full   md:max-w-7xl', className)} {...props}>
                <p className={'text-4xl font-medium'}>{title}</p>
                <div className={'flex items-center justify-center'}>
                    <Breadcrumb
                        items={breadcrumbItems}
                        separator="/"
                        className=""
                    />
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
