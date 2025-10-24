import React from 'react';
import Page from "@/layouts/page/Page.jsx";
import MainLayout from "@/layouts/MainLayout.jsx";
import ProjectsCard from "@/components/card/ProjectsCard.jsx";
import {motion} from "framer-motion";
import {projectsCategory} from "@/data/index.js";
import {useProjectCategories} from "@/features/projectCategory/hooks.js";


const ProjectsPage = () => {
    const {data} = useProjectCategories()



    return (
        <Page>
            <Page.Content>
                <MainLayout>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className={''}>
                        <div className={'font-semibold text-3xl sm:mb-9 mb-4'}>
                            Projects
                        </div>
                        <div className={'grid grid-cols-1 sm:grid-cols-2 gap-6'}>
                            {projectsCategory.map((project) => {
                                return (
                                    <ProjectsCard key={project.id} data={project}/>
                                )
                            })}
                        </div>
                    </motion.div>
                </MainLayout>
            </Page.Content>
        </Page>
    );
};

export default ProjectsPage
