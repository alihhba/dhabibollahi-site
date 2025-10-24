import ExperienceItem from "@/pages/profile/components/experiences/Item.jsx";
import ExperiencesList from "@/pages/profile/components/experiences/List.jsx";
import ExperienceItemLoading from "@/pages/profile/components/experiences/Loading.jsx";

const Experiences = () => {
    return (
        <div>
            Experiences
        </div>
    );
};

Experiences.Item = ExperienceItem;
Experiences.List = ExperiencesList;
Experiences.Loading = ExperienceItemLoading;

export default Experiences

