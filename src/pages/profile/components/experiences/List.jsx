import React from "react";
import Experiences from "@/pages/profile/components/experiences/index.jsx";
import {useExperiencesList} from "@/features/experiences/hooks.js";
import FetchWrapper from "@/components/FetchWrapper.jsx";
import {experiences} from "@/data/index.js";

const ExperiencesList = () => {
    const {data, isLoading, isError , error}  = useExperiencesList();

    // const experiences = transformExperiences(data?.data);

    return (
        <div className="space-y-4">
            {experiences?.map((item) => (
                <FetchWrapper
                    isLoading={false}
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
