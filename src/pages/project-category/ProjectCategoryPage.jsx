// src/pages/profile/experiences/ProjectCategoryPage.jsx
import React from "react";
import ExperienceForm from "@/pages/profile/components/experiences/CraeteForm.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useExperienceDetail } from "@/features/experiences/hooks";
import FetchWrapper from "@/components/FetchWrapper.jsx";
import ProjectCategoryForm from "@/pages/projects/components/CreateProjectCategoryForm.jsx";


const ProjectCategoryPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = Boolean(id);

    const { data, isLoading, error } = useExperienceDetail(id, isEdit);

    return (
        <div className="p-6">
            <FetchWrapper
                isLoading={isEdit ? isLoading : false}
                isError={isEdit ? Boolean(error) : false}
                errorData={error}
                onRetry={isEdit ? undefined : undefined}
            >
                <ProjectCategoryForm
                    isEdit={isEdit}
                    initialData={isEdit ? data?.data : undefined}
                    onSuccess={() => navigate("/")}
                />
            </FetchWrapper>
        </div>
    );
};

export default ProjectCategoryPage;
