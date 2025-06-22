import { Outlet } from "react-router-dom";
import OwnerSideBar from "../components/OwnerComponents/OwnerSideBar";
import OwnerTopBar from "../components/OwnerComponents/OwnerTopBar";

const OwnerPage = () => {
  return (
    <div className="flex bg-gray-300 h-full">
      <OwnerSideBar />
      <div className="flex-1 flex flex-col h-full sticky">
        <OwnerTopBar />
        <div className="p-5 w-[90%] ml-10 h-full m-auto mt-5 mb-2 rounded-md bg-gray-200 shadow-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default OwnerPage;
