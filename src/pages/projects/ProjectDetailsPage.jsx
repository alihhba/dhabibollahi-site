import {useLocation, useParams} from "react-router-dom";
import {projects} from "@/data/index.js";
import {useRef} from "react";
import GoScrollButton from "@/components/GoScrollButton.jsx";
import Breadcrumb from "@/components/BreadCrumb.jsx";


const pageVariants = {
    initial: {opacity: 0, scale: 1},
    animate: {opacity: 1, scale: 1, transition: {duration: 1}},
    exit: {opacity: 0, scale: 1, transition: {duration: 1}},
};


const ProjectDetailsPage = () => {
    const {projectId, id} = useParams();
    const mainRef = useRef(null);
    const projectData = projects.find(p => +p?.id === +projectId.toString().split('-')[0]);
    const {title, description, images, client, date} = projectData || {};
    const {pathname} = useLocation();


    const breadcrumbItems = [
        {title: pathname?.split('/')[1], href: '/projects'},
        {
            title: pathname?.split('/')[2]?.split('-').slice(1).join('-')?.replaceAll('-', ' '),
            href: `/projects/${pathname?.split('/')[2]}`
        },
        {title: pathname?.split('/')[3]?.split('-').slice(1).join('-')?.replaceAll('%20', ' ')},
    ];


    const handleScroll = (evt) => {
        // evt.preventDefault();
        const scrollContainer = mainRef.current;

        if (scrollContainer) {
            scrollContainer.scrollLeft += evt.deltaY;
        }
    };


    return (
        <div
            // onWheel={handleScroll}
            ref={mainRef}
            className={'md:p-10 flex-col p-4 w-full flex max-md:flex-col h-full grow '}>

            <div className={'flex md:ps-20 md:pe-20 flex-col gap-4 w-full '}>
                <p className={'font-bold text-4xl'}>{title}</p>
                <Breadcrumb
                    items={breadcrumbItems}
                    separator="/"
                    className=""
                />
                <p className={'text-md font-medium '}>{description}</p>
                <div className={'flex items-center mt-4 max-md:gap-10 md:gap-20 md:mt-6'}>
                    <div className={'flex flex-col justify-start items-start'}>
                        <p className={'text-sm font-extralight '}>Client</p>
                        <p className={'text-sm font-extralight '}>{client}</p>
                    </div>
                    <div className={'flex flex-col justify-start items-start'}>
                        <p className={'text-sm font-extralight '}>Date</p>
                        <p className={'text-sm font-extralight '}>{date}</p>
                    </div>

                </div>
            </div>

            <div
                className={'flex md:mt-16 flex-col  h-full  max-md:flex-col pb-28  max-md:mt-4  w-full gap-4 grow md:ps-20 md:pe-20'}>
                {images?.map(image => {
                    return (
                        <div key={image}
                             className={'h-full bg-gray-400  rounded-[25px] overflow-hidden'}>
                            <img src={image} className={'w-full h-full object-fill '} alt=""/>
                        </div>
                    )
                })}
            </div>

            <div
                onClick={() => {
                    if (mainRef.current) {
                        mainRef.current.scrollTo({
                            left: 0,
                            behavior: 'smooth'
                        });
                    }
                }}
                className={'fixed right-5 bottom-4 max-md:hidden'}>
                <GoScrollButton
                    type={'up'}
                />
            </div>

            <div className={'fixed bottom-20 max-md:end-4 end-12 md:hidden'}>
                <GoScrollButton/>
            </div>


        </div>
    );
};

export default ProjectDetailsPage
