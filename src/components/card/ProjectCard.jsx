import {useLocation, useNavigate} from "react-router-dom";


const ProjectCard = ({data}) => {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const {cover, title, category, id} = data || {};

    return (
        <div
            onClick={() => {
                navigate(`${pathname}/${id}-${title}`)
            }}
            className={'rounded-[25px] w-full p-5 bg-gray-500 cursor-pointer hover:-rotate-3 transition-all duration-500 ease-in-out '}>
            <div>
                <img src={cover} alt={title} className={'w-full h-full rounded-[20px]'}/>
            </div>

            <p className={'mt-5 text-black font-semibold text-2xl  '}>
                {title}
            </p>

            <p className={'mt-1 text-black/50 font-normal text-md  '}>
                {category}
            </p>


        </div>
    );
};

export default ProjectCard
