import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa";

// <FaAngleDown />
// <FaAngleUp />

const LinksBar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <Link
              to=""
              className="flex justify-center items-center gap-1 relative"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <span>Categories</span>
              {!isOpen ? <FaAngleDown /> : <FaAngleUp />}
              {isOpen && (
                <span className="absolute top-8 w-[12vw] bg-white shadow-lg rounded-md">
                  <li className="list-none w-full">
                    <Link to="" className="text-[16px] w-full block p-2">
                      Home Decoration
                    </Link>
                    <Link to="" className="text-[16px] w-full block p-2">
                      Light Decor
                    </Link>
                    <Link to="" className="text-[16px] w-full block p-2">
                      Kitchen and Dining
                    </Link>
                    <Link to="" className="text-[16px] w-full block p-2">
                      Home Furniture
                    </Link>
                    <Link to="" className="text-[16px] w-full block p-2">
                      Game and Outdoor
                    </Link>
                  </li>
                </span>
              )}
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
