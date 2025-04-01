import './App.css'
import Router from "@/router/Router.jsx";
import {TooltipProvider} from "@/components/Tooltip.jsx";

const App = () => {
    return (
        <div className={''}>
            <TooltipProvider>
                <Router/>
            </TooltipProvider>
        </div>
    );
};

export default App