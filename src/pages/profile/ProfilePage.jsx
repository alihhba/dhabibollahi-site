import React from 'react';
import Page from "@/layouts/page/Page.jsx";
import MainLayout from "@/layouts/MainLayout.jsx";
import {motion} from "framer-motion";
import Experiences from "@/pages/profile/components/experiences/index.jsx";
import CanAccess from "@/components/auth/CanAccess.jsx";
import Button from "@/components/Button.jsx";
import {useNavigate} from "react-router-dom";
import InfiniteImageLoop from "@/components/InfiniteImageLoop/index.jsx";
import images from "@/lib/utils/images.js";


const pageVariants = {
    initial: {opacity: 0, scale: 1},
    animate: {opacity: 1, scale: 1, transition: {duration: 1}},
    exit: {opacity: 0, scale: 1, transition: {duration: 1}},
};


const ProfilePage = () => {
    const navigate = useNavigate();

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
                            About me
                        </p>
                        <div className={'text-sm font-normal'}>
                            <div className={'flex items-center gap-10 mt-2'}>
                                <p>Born 2001</p>
                                <p>Iran, Tehran</p>
                            </div>
                            <p className={'mt-1'}>Graphic designer with over 4 years of experience in visual identity
                                design, as well as print and digital content. Passionate about creating creative and
                                impactful designs with a strong focus on understanding brand needs and audience
                                expectations.</p>
                        </div>
                    </motion.div>


                    {/*  experience  */}
                    <div className={'pt-10'}>
                        <div className={'flex items-center justify-between'}>
                            <p className={'text-xl sm:text-3xl font-semibold'}>
                                Experience
                            </p>

                            <CanAccess
                                roles={['admin']}
                            >
                                <Button
                                    onClick={() => {
                                        navigate('/experiences/create')
                                    }}
                                >
                                    Add
                                </Button>
                            </CanAccess>
                        </div>

                        <div className={'mt-3 '}>
                            <Experiences.List/>
                        </div>

                        <div className={'pt-10'}>
                            <div className={'py-5 px-6 bg-gray-100 rounded-[25px] cursor-pointer'}>
                                <p className={'text-sm font-semibold'}>
                                    Companies I've collaborated with
                                </p>
                                <div className={'py-5 pt-6'}>
                                    <InfiniteImageLoop
                                        logos={[
                                            { src: images.azki },
                                            { src: images.baman },
                                            { src: images.karizma },
                                            { src: images.ofogh },
                                            { src: images.abidi },

                                        ]}
                                        speed={60}
                                        direction="left"
                                        logoHeight={26}
                                        gap={40}
                                        pauseOnHover
                                        scaleOnHover
                                        fadeOut
                                        fadeOutColor="#F6F6F6"
                                        ariaLabel="Technology partners"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'w-full flex items-center justify-center mt-7'}>
                        <p className={'text-[10px] '}>
                            Designed & built by Danial | © 2025 All rights reserved.
                        </p>
                    </div>
                </MainLayout>
            </Page.Content>
        </Page>
    );
};

export default ProfilePage
