import { Link } from "react-router-dom";
import img from "../../assets/lamp.jpg";
import rating from "../../assets/rating.png";

const WhishlistProduct = ({ product }) => {
  console.log(product);
  return (
    <>
      <div className="w-[100%] bg-gray-200 py-3 px-10 flex justify-between rounded-md h-full">
        <Link to="/shop/product/1">
          <img
            src={product.img}
            alt="image"
            className="h-40 w-50 rounded-md mb-3"
          />
        </Link>
        <div className="flex flex-col gap-4">
          <Link to="/shop/product/1" className="mt-5 font-semibold">
            {product.title}
          </Link>
          <p className="flex justify-between items-center">
            <span>₹{product.price}/-</span>
            <span>
              <img src={rating} alt="ratings" className="h-10" />
            </span>
          </p>
          <span className="flex justify-start w-full items-start p-2 gap-4 h-fit">
            <button className="bg-red-500 p-2 px-8 text-sm text-white rounded-md cursor-pointer">
              Remove
            </button>
            <button className="bg-blue-500 p-2 px-6 text-sm text-white rounded-md cursor-pointer">
              Add to cart
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default WhishlistProduct;
