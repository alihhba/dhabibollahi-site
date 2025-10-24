import { Outlet } from "react-router-dom";

export default function ProjectCategoryLayout() {
    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Experiences</h1>
            <Outlet />
        </div>
    );
}
