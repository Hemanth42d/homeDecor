import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";

const LinksBar = () => {
  return (
    <>
      <div className="h-15 flex flex-col justify-start items-center border-b-1 bg-zinc-100">
        <div className="h-full w-full flex justify-around items-center">
          <p className="w-full flex justify-center items-center ">
            <Link to="" className="flex justify-center items-center gap-2">
              <span>
                <FaBars />
              </span>
              <span>Shop By Categories</span>
            </Link>
          </p>
          <p className="w-full flex justify-around items-center">
            <Link to="/shop">Shop</Link>
            <Link to="">Categories</Link>
          </p>
          <p className="w-full flex justify-center items-center">
            <Link
              to="/shop/topdeals"
              className="flex justify-center items-center gap-1"
            >
              <span className="h-full">
                <RiDiscountPercentFill />
              </span>
              <span> Today Deals</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LinksBar;
