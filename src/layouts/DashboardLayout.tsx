import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/DashboardComponents/DashboardHeader";
import DashboardSidebar from "../components/DashboardComponents/DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div>
      <div className="flex gap-10">
        <DashboardSidebar />
        <div className="flex flex-col gap-10 w-full max-w-[1030px]">
          <DashboardHeader />
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
