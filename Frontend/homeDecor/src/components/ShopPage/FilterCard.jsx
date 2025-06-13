import { Link } from "react-router-dom";
import { FaWindowMinimize } from "react-icons/fa6";

const FilterCard = ({ title, Items }) => {
  return (
    <>
      <div className="border-1 border-gray-400 w-[70%] rounded-md">
        <div className="flex justify-between items-center p-1 border-b-2 border-gray-300">
          <h1 className="text-md font-bold pl-5">{title}</h1>
          <span className=" flex justify-center items-center">
            <a href="" className="pb-2 pr-3">
              <FaWindowMinimize />
            </a>
          </span>
        </div>
        <div className="h-full flex flex-col justify-center items-start p-2 pl-5 gap-2">
          {Items.map((item, idx) => {
            return (
              <Link to="/product/index" key={idx}>
                {item}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FilterCard;
