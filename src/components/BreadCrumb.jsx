import {useNavigate} from "react-router-dom";

const Breadcrumb = ({ items, separator = "/", className = "" }) => {
    const navigate = useNavigate();

    return (
        <nav className={`flex items-center space-x-2 text-sm ${className}`}>
            {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                    {index > 0 && (
                        <span className="text-gray-400">{separator}</span>
                    )}

                    {index === items.length - 1 ? (
                        // Current page (last item)
                        <span className="text-gray-400 font-medium capitalize">
                            {item.title}
                        </span>
                    ) : (
                        // Link for previous items
                        <div
                           onClick={()=>{
                               navigate(item?.href)
                           }}
                            className=" transition-colors cursor-pointer text-gray-400 duration-200 hover:underline capitalize"
                        >
                            {item.title}
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default Breadcrumb;
