import React from 'react';
import Page from "@/layouts/page/Page.jsx";
import MainLayout from "@/layouts/MainLayout.jsx";
import images from "@/lib/utils/images.js";
import ProjectsCard from "@/components/card/ProjectsCard.jsx";
import {motion} from "framer-motion";

const pageVariants = {
    initial: {opacity: 0, scale: 1},
    animate: {opacity: 1, scale: 1, transition: {duration: 1}},
    exit: {opacity: 0, scale: 1, transition: {duration: 1}},
};


const dummyProjects = [
    {
        id: 1,
        cover: images.brand_identity,
        title: 'Brand Identity',
        category: 'brand-identity',
        tags: ['Logo Design', 'Stationary Design', 'Brand Guideline']
    },
    {
        id: 2,
        cover: images.print_design,
        title: 'Print Design',
        category: 'print-design',
        tags: ['Poster Design', 'Brochure & Catalog Design', 'Book']
    },
    {
        id: 3,
        cover: images.advertising,
        title: 'Advertising',
        category: 'advertising',
        tags: ['Banner ads', 'Print Ads', 'Billboard Design', 'Social']
    },
    {
        id: 4,
        cover: images.motion_video,
        title: 'Motion & Video',
        category: 'motion-video',
        tags: ['Video Ads', 'Intro Teasers', 'Explainer Videos']
    }
]

const ProjectsPage = () => {
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
                        <div  className={'grid grid-cols-1 sm:grid-cols-2 gap-6'}>
                            {dummyProjects.map((project) => {
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
