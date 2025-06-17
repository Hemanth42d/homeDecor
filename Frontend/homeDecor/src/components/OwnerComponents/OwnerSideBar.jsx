import { Link } from "react-router";

const OwnerSideBar = () => {
  return (
    <>
      <div className="bg-[#2F3C7E] w-[16%] h-screen p-4 relative flex items-start justify-start">
        <div className="pt-15 pb-5 h-[50%] flex flex-col items-center justify-between text-white w-full">
          <Link to="/owner">Dashboard</Link>
          <Link to="/owner/addproduct">Add Product</Link>
          <Link to="/owner/orders">Orders</Link>
          <Link to="/owner/settings">Settings</Link>
        </div>
      </div>
    </>
  );
};

export default OwnerSideBar;
