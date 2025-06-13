import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";

const LinksBar = () => {
  return (
    <>
      <div className="h-15 flex flex-col justify-start items-center border-b-1 bg-zinc-100">
        <div className="h-full w-full flex justify-around items-center">
          <p className="w-full flex justify-center items-center ">
            <a href="" className="flex justify-center items-center gap-2">
              <span>
                <FaBars />
              </span>
              <span>Shop By Categories</span>
            </a>
          </p>
          <p className="w-full flex justify-around items-center">
            <Link to="/shop">Shop</Link>
            <a href="">Categories</a>
            <a href="">Products</a>
            <a href="">Top Deals</a>
          </p>
          <p className="w-full flex justify-center items-center">
            <a href="" className="flex justify-center items-center gap-1">
              <span className="h-full">
                <RiDiscountPercentFill />
              </span>
              <span> Today Deals</span>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LinksBar;
