import React from 'react';
import Page from "@/layouts/page/Page.jsx";
import MainLayout from "@/layouts/MainLayout.jsx";
import ExperienceCard from "@/components/card/ExperienceCard.jsx";
import {motion} from "framer-motion";


const pageVariants = {
    initial: {opacity: 0, scale: 1},
    animate: {opacity: 1, scale: 1, transition: {duration: 1}},
    exit: {opacity: 0, scale: 1, transition: {duration: 1}},
};

const experiences = [
    {
        id: 1,
        tag: 'Prima Luxury',
        title: 'Freelance graphic designer  •  2024 - Current',
        content: 'At Mirror Group, I was responsible for designing social media content for its subsidiaries like Mirrority, Mirrorix, and Mirrorim. Alongside graphic design, I also handled filming and video editing for various projects.\n' +
            'During this time, I focused on creating creative and engaging content tailored to each brand’s audience. This experience allowed me to grow my skills in both graphic design and video production while delivering impactful visuals for the brands.'
    },
    {
        id: 2,
        tag: 'DrDr',
        title: 'Graphic designer  •  2020 - Current',
        content: 'I joined DrDr in 2020 and took on the responsibility for all the company’s graphic design work. This included everything from creating content for social media to designing printed materials like flyers, catalogs, stationery sets, and campaign assets. I also worked on advertising banners and helped with branding doctors\' clinics. In addition to graphic design, I handled parts of the video production and motion graphics work—editing videos about services and doctors, as well as creating short, engaging motion graphics for campaigns and promotions.\n' +
            'I’ve always aimed to deliver designs that are professional, creative, and aligned with the DrDr brand identity, ensuring a consistent and impactful visual experience for the audience. This journey has been incredibly valuable for me, helping me grow my skills in graphic design and video content creation while contributing to the brand’s growth and visibility.'
    },
    {
        id: 3,
        tag: 'Lian Hamrah',
        title: 'Part time graphic designer  •  Apr 2022 - Apr 2023',
        content: 'At Lian Hamrah, I started by designing the brand’s visual identity guide to set a clear and consistent foundation for all design work. This included defining the color palette, typography, logo usage, and visual elements to ensure everything stayed cohesive.\n' +
            'Once the guidelines were in place, I got to work on designing various assets—social media content, website banners, and print materials like product packaging labels and business cards. My focus was to create designs that were both creative and aligned with the brand identity, delivering a professional and engaging image to the audience.\n' +
            'This project was a great experience for me. I got to build the brand’s visual identity from scratch and bring it to life across different platforms, which challenged my creativity and helped me grow my skills in branding and graphic design.'
    },
    {
        id: 4,
        tag: 'Index Market',
        title: 'Freelance graphic designer  •  Jan 2022 - Sep 2022',
        content: 'At Index, I was responsible for designing various visual assets. My work included creating static and motion posts and stories for social media, website banners, a custom icon set, and print materials like brochures, business cards, and other promotional items.\n' +
            'During this time, I focused on delivering creative and cohesive designs to strengthen the brand\'s visual identity. My goal was to create work that could effectively engage audiences both in the digital space and in print. This experience was a great opportunity for me to enhance my multi-dimensional design skills and contribute to making Index\'s visual presence more appealing and impactful.'
    },
    {
        id: 5,
        tag: 'Miror Group',
        title: 'Freelance graphic designer  •  Dec 2021 - Apr 2022',
        content: 'At Mirror Group, I was responsible for designing social media content for its subsidiaries like Mirrority, Mirrorix, and Mirrorim. Alongside graphic design, I also handled filming and video editing for various projects.\n' +
            'During this time, I focused on creating creative and engaging content tailored to each brand’s audience. This experience allowed me to grow my skills in both graphic design and video production while delivering impactful visuals for the brands.'
    }
]

const ProfilePage = () => {
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
                        <p className={'text-xl sm:text-3xl font-semibold'}>
                            Experience
                        </p>

                        <div className={'mt-3 space-y-4'}>
                            {experiences.map((item) => {
                                return (
                                    <div key={item?.id}>
                                        <ExperienceCard data={item}/>
                                    </div>
                                )
                            })}
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
