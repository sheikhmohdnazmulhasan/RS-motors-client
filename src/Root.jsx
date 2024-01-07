import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <div className=""><Outlet /></div>
        </div>
    );
};

export default Root;