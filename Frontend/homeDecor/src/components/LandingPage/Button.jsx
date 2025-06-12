import { Link } from "react-router";

const Button = () => {
  return (
    <div>
      <Link
        to="/account"
        className="text-decoration-none bg-[#007CBE] rounded-md p-2 text-white text-[17px]"
      >
        Shop
        <i className="fa-solid fa-arrow-right text-[18px] px-2 py-1 ml-2 bg-white rounded-full text-black"></i>
      </Link>
    </div>
  );
};

export default Button;
