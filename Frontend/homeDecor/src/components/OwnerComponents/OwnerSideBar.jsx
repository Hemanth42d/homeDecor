import { useState } from "react";
import { Link } from "react-router-dom";

const tabs = [
  { label: "Dashboard", value: "dashboard", to: "/owner" },
  { label: "Add Product", value: "addproduct", to: "/owner/addproduct" },
  { label: "Orders", value: "orders", to: "/owner/orders" },
  { label: "Settings", value: "settings", to: "/owner/settings" },
];

const getTabClass = (active, current) =>
  active === current
    ? "bg-white text-black w-full rounded-md text-center p-2"
    : "w-full rounded-md text-center p-2";

const OwnerSideBar = () => {
  const [onClickTab, setOnClickTab] = useState("dashboard");

  return (
    <div className="bg-[#2F3C7E] w-[16%] h-screen p-4 flex items-start justify-start mt-5 ml-5 rounded-md mb-2">
      <div className="pt-15 pb-5 h-[50%] flex flex-col items-center justify-between text-white w-full">
        {tabs.map((tab) => (
          <Link
            key={tab.value}
            to={tab.to}
            className={getTabClass(onClickTab, tab.value)}
            onClick={() => setOnClickTab(tab.value)}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OwnerSideBar;
