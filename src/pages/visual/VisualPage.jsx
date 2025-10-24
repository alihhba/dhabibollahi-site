import React from 'react';
import Page from "@/layouts/page/Page.jsx";
import MainLayout from "@/layouts/MainLayout.jsx";
import {motion} from "framer-motion";
import {experiences} from "@/data/index.js";
import VisualCard from "@/components/card/VisualCard.jsx";


const pageVariants = {
    initial: {opacity: 0, scale: 1},
    animate: {opacity: 1, scale: 1, transition: {duration: 1}},
    exit: {opacity: 0, scale: 1, transition: {duration: 1}},
};



const VisualPage = () => {
    return (
        <Page>
            <Page.Content className={''}>
                <MainLayout>
                    {/*about me*/}
                    <motion.div
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <p className={'text-xl sm:text-3xl font-semibold'}>
                            Visual Thoughts
                        </p>
                    </motion.div>


                    {/*  experience  */}
                    <div className={'pt-2'}>
                        <div className={'mt-3 space-y-4'}>
                            {experiences.map((item) => {
                                return (
                                    <div key={item?.id}>
                                        <VisualCard data={item}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/*<div className={'w-full flex items-center justify-center mt-7'}>*/}
                    {/*    <p className={'text-[10px] '}>*/}
                    {/*        Designed & built by Danial | © 2025 All rights reserved.*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                </MainLayout>
            </Page.Content>
        </Page>
    );
};

export default VisualPage
