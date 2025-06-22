import { Link } from "react-router";
import CartProduct from "./CartProduct";
import img from "../../assets/lamp.jpg";
import rating from "../../assets/rating.png";
import img2 from "../../assets/garden.jpg";

const Cart = () => {
  const CartProd = [
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
      <div className="w-[80%] m-auto h-full flex flex-col p-4 relative">
        <Link
          to="/shop"
          className="bg-blue-500 p-2 text-white rounded-md absolute right-5 top-3  hover:bg-blue-600 transition-colors"
        >
          Go Back
        </Link>
        <div className="mb-5">
          <p className="text-2xl font-bold">Cart</p>
        </div>
        <div className="flex flex-col gap-4">
          {CartProd.map((product) => {
            return (
              <>
                <CartProduct product={product} />
              </>
            );
          })}
        </div>
        <div className="m-2 text-right p-2">
          <button className="bg-blue-500 text-white p-3 rounded-md cursor-pointer">
            Buy Cart Items
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
