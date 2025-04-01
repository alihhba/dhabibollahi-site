import Page from "@/layouts/page/Page.jsx";
import {useParams} from "react-router-dom";
import {motion} from "framer-motion";
import {projects} from "@/data.jsx";

const pageVariants = {
    initial: {opacity: 0, scale: 1},
    animate: {opacity: 1, scale: 1, transition: {duration: 1}},
    exit: {opacity: 0, scale: 1, transition: {duration: 1}},
};


const ProjectDetailsPage = () => {
    const {projectId ,id} = useParams();
    const projectData  = projects.find(p=> +p?.id === +projectId.toString().split('-')[0]);
    const {title} = projectData || {};

    return (
        <Page>
            <Page.Header title={id.toString().replaceAll('-', ' ')}/>

            <Page.Content className={'pb-32 pt-0'}>
                <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={''}>
                    <div>
                        <p className={'text-3xl font-semibold'}>{title}</p>
                    </div>
                </motion.div>
            </Page.Content>
        </Page>
    );
};

export default ProjectDetailsPage
