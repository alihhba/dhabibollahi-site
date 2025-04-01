import InfiniteScrollX from "@/components/InfiniteScrollX.jsx";
import {useNavigate} from "react-router-dom";


const ProjectsCard = ({data}) => {
    const navigate = useNavigate();
    const {cover, title, tags , category} = data || {}
    return (
        <div
            onClick={()=>{
                navigate(`/projects/${category}`)
            }}
            className={'rounded-[25px] w-full p-5 bg-gray-500 cursor-pointer hover:-rotate-3  transition-all duration-500 ease-in-out'}>
            <div>
                <img src={cover} alt={title} className={'w-full h-full rounded-[20px] '}/>
            </div>

            <p className={'mt-5 text-black font-semibold text-2xl  '}>
                {title}
            </p>

            <div className={'mt-2'}>
                <InfiniteScrollX tags={tags}/>
            </div>
        </div>
    );
};

export default ProjectsCard
