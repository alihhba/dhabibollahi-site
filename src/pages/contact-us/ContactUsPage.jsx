import Page from "@/layouts/page/Page.jsx";
import MainLayout from "@/layouts/MainLayout.jsx";
import {motion} from "framer-motion";
import React from "react";
import ContactSection from "@/pages/contact-us/components/ContactsUsContent.jsx";

const ContactUsPage = () => {
    return (
        <Page>
            <Page.Content className={''}>
                <MainLayout>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <p className={'text-xl sm:text-3xl font-semibold'}>
                            Contact me
                        </p>
                    </motion.div>

                    <div className={'mt-5'}>
                        <ContactSection/>
                    </div>
                </MainLayout>
            </Page.Content>
        </Page>
    );
};

export default ContactUsPage
