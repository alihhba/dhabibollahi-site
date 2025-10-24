import React from "react";
import Experiences from "@/pages/profile/components/experiences/index.jsx";
import {useExperiencesList} from "@/features/experiences/hooks.js";
import {transformExperiences} from "@/features/experiences/transform.js";
import FetchWrapper from "@/components/FetchWrapper.jsx";

const ExperiencesList = () => {
    const {data, isLoading, isError , error}  = useExperiencesList();

    const items = transformExperiences(data?.data);

    return (
        <div className="space-y-4">
            {items?.map((item) => (
                <FetchWrapper
                    isLoading={isLoading}
                    isError={isError}
                    loadingRender={() => {
                        return (
                            <Experiences.Loading/>
                        )
                    }}
                >
                    <div key={item.id}>
                        <Experiences.Item data={item}/>
                    </div>
                </FetchWrapper>
            ))}
        </div>
    );
};

export default ExperiencesList;
