import { Outlet } from "react-router-dom";
import OwnerSideBar from "../components/OwnerComponents/OwnerSideBar";
import OwnerTopBar from "../components/OwnerComponents/OwnerTopBar";

const OwnerPage = () => {
  return (
    <div className="flex">
      <OwnerSideBar />
      <div className="flex-1 flex flex-col">
        <OwnerTopBar />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default OwnerPage;
