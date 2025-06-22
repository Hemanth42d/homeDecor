import { Link } from "react-router";
import ProductCard from "./ProductCard";
import img from "../../assets/lamp.jpg";
import rating from "../../assets/rating.png";
import img2 from "../../assets/garden.jpg";

const TopDeals = () => {
  const topDeals = [
    {
      id: 101,
      img: img,
      title: "Related Lamp",
      price: 1200,
      rating: rating,
    },
    {
      id: 102,
      img: img2,
      title: "Gradening Tool",
      price: 1000,
      rating: rating,
    },
    // Add more related products as needed
  ];

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
          {topDeals.map((product) => (
            <>
              <div className="max-h-[400px] w-[300px] p-2 flex items-center">
                <ProductCard key={product.id} productData={product} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopDeals;
