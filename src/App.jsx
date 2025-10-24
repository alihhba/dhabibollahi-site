import './App.css'
import Router from "@/router/Router.jsx";
import {TooltipProvider} from "@/components/Tooltip.jsx";
import {AppProviders} from "@/provider/AppProvider.jsx";

const App = () => {
    return (
        <div className={''}>
            <AppProviders>
                <TooltipProvider>
                    <Router/>
                </TooltipProvider>
            </AppProviders>
        </div>
    );
};

export default App
