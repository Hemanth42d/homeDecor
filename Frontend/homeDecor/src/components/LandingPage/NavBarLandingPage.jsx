import "../../App.css";
import { Link } from "react-router-dom";

const NavBarLandingPage = () => {
  return (
    <div>
      <div className="flex h-16 w-[95vw] m-auto absolute justify-between items-center top-6 right-0 left-0">
        <li className="list-none">
          <a className="text-3xl pl-4" href="#">
            Home Decor
          </a>
        </li>
        <li className="list-none pr-20">
          <Link to="/account" className="text-2xl bg-amber-300 p-3 rounded-md">
            <i className="fa-solid fa-user"></i>
          </Link>
        </li>
      </div>
      <div className="absolute top-[50%] left-[38%]  w-[22%] text-center animate-slide-in-right flex flex-col justify-center items-center ">
        <p className="text-3xl font-semibold leading-[3rem]">
          A Place where you can find all your Home Decorations
        </p>
        <Link
          to="/account"
          className="bg-amber-300 rounded-md px-2 py-2 text-[18px] mt-3 text-decoration-none cursor-pointer"
        >
          Shop Now
          <i className="fa-solid fa-arrow-right text-[18px] px-2 py-1 ml-2 bg-white rounded-full"></i>
        </Link>
      </div>
    </div>
  );
};

export default NavBarLandingPage;
