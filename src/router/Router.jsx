import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import MainNavigationLayout from "@/layouts/MainNavigationLayout.jsx";
import ProfilePage from "@/pages/profile/ProfilePage.jsx";
import ProjectsPage from "@/pages/projects/ProjectsPage.jsx";
import TestPage from "@/pages/TestPage.jsx";
import ProjectPage from "@/pages/projects/ProjectPage.jsx";
import {AnimatePresence} from "framer-motion";
import ProjectDetailsPage from "@/pages/projects/ProjectDetailsPage.jsx";
import VisualPage from "@/pages/visual/VisualPage.jsx";
import LoginPage from "@/pages/login/LoginPage.jsx";
import ExperienceCreatePage from "@/pages/experiences/ExperienceCreatePage.jsx";
import ExperiencesLayout from "@/pages/experiences/ExperiencesLayout.jsx";
import ProtectedRoute from "@/components/auth/ProtectedRoutes.jsx";
import ProjectCategoryLayout from "@/pages/project-category/ProjectCategoryLayout.jsx";
import ProjectCategoryPage from "@/pages/project-category/ProjectCategoryPage.jsx";

const Router = () => {
    return (
        <AnimatePresence mode={'wait'}>
            <Routes>
                <Route path={'/'} element={<MainNavigationLayout/>}>
                    <Route path={'/'} element={<ProfilePage/>}/>
                    <Route path={'/projects'} element={<ProjectsPage/>}/>
                    <Route path={'/visual-thoughts'} element={<VisualPage/>}/>
                    <Route path={'/projects/:id'} element={<ProjectPage/>}/>
                    <Route path={'/projects/:id/:projectId'} element={<ProjectDetailsPage/>}/>

                    <Route element={<ProtectedRoute roles={['admin']}/>}>
                        <Route path="/experiences" element={<ExperiencesLayout/>}>
                            <Route path="create" element={<ExperienceCreatePage/>}/>
                            <Route path="edit/:id" element={<ExperienceCreatePage/>}/>
                        </Route>
                    </Route>

                    <Route element={<ProtectedRoute roles={['admin']}/>}>
                        <Route path="/project-category" element={<ProjectCategoryLayout/>}>
                            <Route path="create" element={<ProjectCategoryPage/>}/>
                            <Route path="edit/:id" element={<ProjectCategoryPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'/test'} element={<TestPage/>}/>
                    <Route path={'/auth/login'} element={<LoginPage/>}/>
                    <Route path={'*'} element={<Navigate to={'/'}/>}/>


                </Route>
            </Routes>
        </AnimatePresence>

    );
};

export default Router
