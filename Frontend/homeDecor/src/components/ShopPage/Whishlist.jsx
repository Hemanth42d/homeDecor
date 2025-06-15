import { Link } from "react-router";
import ProductCard from "./ProductCard";
import WhishlistProduct from "./WhishlistProduct";

const Whishlist = () => {
  return (
    <>
      <div className="w-[80%] m-auto p-4 mt-10 mb-10 flex gap-2 relative">
        <Link
          to="/shop"
          className="bg-blue-500 p-2 text-white rounded-md absolute right-20 top-[-2rem] hover:bg-blue-600 transition-colors"
        >
          Go Back
        </Link>
        <div className="border-r-2 border-gray-500 w-[20%]">
          <p className="text-xl font-semibold">Your Whishlist</p>
        </div>
        <div className="w-[70%] m-auto flex flex-col gap-4">
          <WhishlistProduct />
          <WhishlistProduct />
          <WhishlistProduct />
        </div>
      </div>
    </>
  );
};

export default Whishlist;
