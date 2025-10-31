import {useParams} from "react-router-dom";
import {projects} from "@/data/index.js";
import {useRef} from "react";
import GoScrollButton from "@/components/GoScrollButton.jsx";


const pageVariants = {
    initial: {opacity: 0, scale: 1},
    animate: {opacity: 1, scale: 1, transition: {duration: 1}},
    exit: {opacity: 0, scale: 1, transition: {duration: 1}},
};


const ProjectDetailsPage = () => {
    const {projectId, id} = useParams();
    const mainRef = useRef(null);
    const projectData = projects.find(p => +p?.id === +projectId.toString().split('-')[0]);
    const {title, description, images} = projectData || {};

    const handleScroll = (evt) => {
        // evt.preventDefault();
        const scrollContainer = mainRef.current;

        if (scrollContainer) {
            scrollContainer.scrollLeft += evt.deltaY;
        }
    };


    return (
        <div
            onWheel={handleScroll}
            ref={mainRef}
            className={'md:p-10 p-4 w-full flex max-md:flex-col h-[100dvh] grow md:overflow-y-hidden'}>

            <div className={'flex flex-col gap-4 max-w-96 md:min-w-96 '}>
                <p className={'font-bold text-4xl'}>{title}</p>
                <p className={'text-md font-medium '}>{description}</p>
            </div>

            <div className={'flex max-md:flex-col max-md:pb-28 max-md:mt-4  w-full gap-4 grow md:ps-20 md:pe-20'}>
                {images?.map(image => {
                    return (
                        <div key={image}
                             className={'h-full bg-gray-400 max-md:min-h-64 md:min-w-[100dvh] rounded-[25px] overflow-hidden'}>
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
                className={'fixed right-5 top-1/2 max-md:hidden'}>
                <GoScrollButton
                    type={'left'}
                />
            </div>

            <div className={'fixed bottom-20 max-md:end-4 end-12 md:hidden'}>
                <GoScrollButton/>
            </div>


        </div>
    );
};

export default ProjectDetailsPage
