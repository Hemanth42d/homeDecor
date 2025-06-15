import { Link } from "react-router";
import ProductCard from "./ProductCard";

const TopDeals = () => {
  return (
    <>
      <div className="w-[80%] m-auto h-full p-4">
        <div className="flex w-full justify-between border-b-1 border-gray-800 items-center">
          <p className="text-xl p-2 pb-4">Top Deals Product</p>
          <p>
            <Link
              to="/shop"
              className="bg-blue-500 p-2 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Go Back
            </Link>
          </p>
        </div>
        <div className="grid grid-cols-4 mt-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default TopDeals;
