import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default MainLayout;