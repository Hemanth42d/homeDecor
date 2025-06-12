import { Link } from "react-router-dom";

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
            <a href="" className="text-white text-sm">
              About Us
            </a>
            <a href="" className="text-white text-sm">
              Contact Us
            </a>
            <a href="" className="text-white text-sm">
              FAQs
            </a>
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
            <i className="fa-solid fa-magnifying-glass text-black absolute text-2xl right-23 top-2"></i>
          </div>
          <div className="w-1/4 flex justify-around items-center">
            <p className="text-white text-sm flex justify-center items-center">
              <a href="">
                <i className="fa-solid fa-user text-white text-2xl"></i>
              </a>
              <span className="ml-2 flex flex-col">
                <span className="text-[11px]">Your</span>
                <span className="text-[11px]">Account</span>
              </span>
            </p>
            <p className="text-white text-sm flex justify-center items-center">
              <a href="">
                <i className="fa-regular fa-heart text-2xl"></i>
              </a>
              <span className="ml-2 flex flex-col">
                <span className="text-[11px]">2</span>
              </span>
            </p>
            <p className="text-white text-sm flex justify-center items-center">
              <a href="">
                <i className="fa-solid fa-cart-shopping text-white text-2xl"></i>
              </a>
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
