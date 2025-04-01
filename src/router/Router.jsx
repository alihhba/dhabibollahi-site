import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import MainNavigationLayout from "@/layouts/MainNavigationLayout.jsx";
import ProfilePage from "@/pages/profile/ProfilePage.jsx";
import ProjectsPage from "@/pages/projects/ProjectsPage.jsx";
import TestPage from "@/pages/TestPage.jsx";
import ProjectPage from "@/pages/projects/ProjectPage.jsx";
import {AnimatePresence} from "framer-motion";
import ProjectDetailsPage from "@/pages/projects/ProjectDetailsPage.jsx";

const Router = () => {
    return (
        <AnimatePresence mode={'wait'}>
            <Routes>
                <Route path={'/'} element={<MainNavigationLayout/>}>
                    <Route path={'/'} element={<ProfilePage/>}/>
                    <Route path={'/projects'} element={<ProjectsPage/>}/>
                    <Route path={'/projects/:id'} element={<ProjectPage/>}/>
                    <Route path={'/projects/:id/:projectId'} element={<ProjectDetailsPage/>}/>


                    <Route path={'/test'} element={<TestPage/>}/>
                    <Route path={'*'} element={<Navigate to={'/profile'}/>}/>

                </Route>
            </Routes>
        </AnimatePresence>

    );
};

export default Router
