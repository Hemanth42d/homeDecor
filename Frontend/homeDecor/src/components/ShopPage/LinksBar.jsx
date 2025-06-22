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
              <select className="rounded-md w-full cursor-pointer outline-none p-5 border-none">
                <option value="">Shop By Categories</option>
                <option value="furniture">Home Furniture</option>
                <option value="decor">Home Decor</option>
                <option value="lighting">Lighting</option>
                <option value="kitchen">Kitchen</option>
              </select>
            </Link>
          </p>
          <p className="w-full flex justify-around items-center">
            <Link to="/shop">Shop</Link>
            <Link
              to=""
              className="flex justify-center items-center gap-1 relative"
            >
              <select className="rounded-md w-full cursor-pointer outline-none p-2">
                <option value="">category</option>
                <option value="furniture">Home Furniture</option>
                <option value="decor">Home Decor</option>
                <option value="lighting">Lighting</option>
                <option value="kitchen">Kitchen</option>
              </select>
            </Link>
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
