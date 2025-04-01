import Page from "@/layouts/page/Page.jsx";
import {useParams} from "react-router-dom";
import ProjectCard from "@/components/card/ProjectCard.jsx";
import {motion} from "framer-motion";
import {projects} from "@/data.jsx";

const pageVariants = {
    initial: {opacity: 0, scale: 1},
    animate: {opacity: 1, scale: 1, transition: {duration: 1}},
    exit: {opacity: 0, scale: 1, transition: {duration: 1}},
};

const ProjectPage = () => {
    const {id} = useParams();
    return (
        <Page>
            <Page.Header title={id.toString().replaceAll('-', ' ')}/>

            <Page.Content className={'pb-32 pt-0  max-sm:pt-0'}>
                <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-7 3xl:grid-cols-4 '}>

                    {projects.map((project) => {
                        return (
                            <ProjectCard key={project.id} data={project}/>
                        )
                    })}
                </motion.div>
            </Page.Content>
        </Page>
    );
};

export default ProjectPage
