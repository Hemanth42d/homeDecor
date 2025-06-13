import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const ShopNavBar = () => {
  return (
    <>
      <div className="h-27 flex flex-col gap-[0.2px]">
        <div className="bg-black h-[30%] w-full flex justify-around items-center">
          <p className="text-white text-sm w-1/2 flex justify-center items-center">
            Free delivery & 30% discount for next 3 orders! Place your First
            Order
          </p>
          <p className="flex gap-4 w-1/2 justify-around items-center">
            <Link to="/shop/aboutus" className="text-white text-sm">
              About Us
            </Link>
            <Link to="/shop/contactus" className="text-white text-sm">
              Contact Us
            </Link>
            <Link to="/shop/faqs" className="text-white text-sm">
              FAQs
            </Link>
          </p>
        </div>
        <div className="bg-black h-[70%] flex justify-around items-center w-full">
          <div className="w-1/4 flex justify-center items-center">
            <p>
              <Link to="/shop" className="text-white text-xl">
                Home Decor
              </Link>
            </p>
          </div>
          <div className="w-2/4 flex justify-center items-center relative">
            <input
              type="text"
              placeholder="All categories"
              className="border-2 border-white pl-5 text-black bg-white w-[80%] p-1 rounded-md relative"
            />
            <IoSearch className="text-black absolute text-2xl right-23 top-2" />
          </div>
          <div className="w-1/4 flex justify-around items-center">
            <p className="text-white text-sm flex justify-center items-center">
              <Link to="/shop/account">
                <FaUser className="text-white text-2xl" />
              </Link>
              <span className="ml-2 flex flex-col">
                <span className="text-[11px]">Your</span>
                <span className="text-[11px]">Account</span>
              </span>
            </p>
            <p className="text-white text-sm flex justify-center items-center">
              <Link to="/shop/whishlist">
                <FaRegHeart className="text-2xl" />
              </Link>
              <span className="ml-2 flex flex-col">
                <span className="text-[11px]">2</span>
              </span>
            </p>
            <p className="text-white text-sm flex justify-center items-center">
              <Link to="/shop/cart">
                <FaCartShopping className="text-white text-2xl" />
              </Link>
              <span className="ml-2 flex flex-col">
                <span className="text-[11px]">My</span>
                <span className="text-[11px]">Cart</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopNavBar;
