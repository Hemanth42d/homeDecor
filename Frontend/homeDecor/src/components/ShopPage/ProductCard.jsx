import { Link } from "react-router-dom";
import img from "../../assets/lamp.jpg";
import rating from "../../assets/rating.png";

const ProductCard = () => {
  return (
    <>
      <div className="w-fit p-3">
        <Link to="/shop/product/1">
          <img src={img} alt="image" className="h-50 w-60 rounded-md mb-3" />
        </Link>
        <Link to="/shop/product/1" className="mt-5 font-semibold">
          Lamp for the ceiling of the house
        </Link>
        <p className="flex justify-between items-center">
          <span>₹1500/-</span>
          <span>
            <img src={rating} alt="ratings" className="h-15" />
          </span>
        </p>
      </div>
    </>
  );
};

export default ProductCard;
