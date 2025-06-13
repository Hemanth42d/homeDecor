import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Button = () => {
  return (
    <div>
      <Link
        to="/account"
        className="text-decoration-none bg-[#007CBE] rounded-md p-2 text-white text-[17px] flex justify-center items-center gap-2"
      >
        Shop
        <FaArrowRight className="" />
      </Link>
    </div>
  );
};

export default Button;
