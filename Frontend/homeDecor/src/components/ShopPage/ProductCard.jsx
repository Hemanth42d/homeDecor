import { Link } from "react-router-dom";

const ProductCard = ({ productData }) => {
  console.log(productData.id);
  return (
    <>
      <div className="w-full p-3">
        <div>
          <Link to={`/shop/product/${productData.id}`}>
            <img
              src={productData.img}
              alt={productData.title}
              className="h-full w-full rounded-md mb-3"
            />
          </Link>
          <Link
            to={`/shop/product/${productData.id}`}
            className="mt-5 font-semibold"
          >
            {productData.title}
          </Link>
          <p className="flex justify-between items-center">
            <span>₹{productData.price}/-</span>
            <span>
              <img src={productData.rating} alt="ratings" className="h-15" />
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
