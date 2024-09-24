import Header from "../components/Header/Header";
import {Outlet} from "react-router-dom";


const MainLayout = () => {
    return (
        <div style={{background: "gray", height: "100vh"}}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {
    MainLayout
};