import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ShopPageFooter = () => {
  return (
    <>
      <div className="h-100 flex flex-col gap-1 bg-gray-900 mt-10 bottom-0 ">
        <div className="h-80 flex justify-around gap-3 items-center">
          <div className="h-[50%]  flex flex-col w-[30%] justify-start gap-3 items-center">
            <p>
              <a href="" className="text-white text-4xl">
                Home Decor
              </a>
            </p>
            <p className="text-white text-sm w-3/4  h-full p-2 text-center tracking-widest">
              Welcome to our Store, Where we pride ourselves on providing
              execptional products and unparalled customer services our store,
              style and innovation
            </p>
          </div>
          <div className="h-[50%] w-[30%] flex flex-col justify-start gap-3 items-start pl-10">
            <span>
              <p className="text-white text-2xl">Quick links</p>
            </span>
            <p className="text-white flex flex-col gap-1 text-sm">
              <Link to="/shop">New Products</Link>
              <Link to="/shop/topdeals">Best Sales</Link>
              <Link to="/shop/contactus">Contact Us</Link>
              <Link to="/shop">Stores</Link>
            </p>
          </div>
          <div className="h-[50%] w-[30%] flex flex-col justify-start gap-3 items-start pl-10">
            <p className="text-white text-2xl ">About Information</p>
            <p className="text-white text-sm flex flex-col gap-2">
              <span className="flex justify-center items-center gap-1">
                <span className="mr-3">
                  <FaLocationDot />
                </span>
                <span>Near 7-roads, 516002 Kadapa, AndhraPradesh.</span>
              </span>
              <span className="flex">
                <span className="mr-3">
                  <FaPhone />
                </span>
                <span>+91 1234567890</span>
              </span>
              <a href="" className="flex">
                <span className="mr-3">
                  <MdEmail className="text-xl" />
                </span>
                <span>homedecor@gmail.com</span>
              </a>
            </p>
          </div>
        </div>
        <div className="border-t-1 border-gray-700 h-10 flex justify-around items-center">
          <div className="h-full w-[30%] flex justify-around items-center text-white">
            <div className="flex gap-10">
              <Link to="">
                <FaInstagram className="text-xl" />
              </Link>
              <Link to="">
                <FaXTwitter className="text-xl" />
              </Link>
              <Link to="">
                <FaFacebook className="text-xl" />
              </Link>
            </div>
          </div>
          <div className="h-full w-[30%] flex justify-center items-center text-white">
            <p className="flex justify-center items-center">
              <span className="mr-4">
                <FaCopyright />
              </span>
              <span>All rights reserved to M.V.Hemanth</span>
            </p>
          </div>
          <div className="h-full w-[30%] flex justify-center items-center text-white">
            <p className="flex justify-center items-center">
              <span className="mr-2">
                <FaCreditCard />
              </span>
              <span>All cards accepted for payments</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPageFooter;
