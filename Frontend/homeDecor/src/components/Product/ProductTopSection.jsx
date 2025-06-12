import productImage from "../../assets/lamp.jpg";
import { Link } from "react-router-dom";
const ProductTopSection = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-center items-center w-[90%] mx-auto my-10">
          <div className="flex w-1/2 gap-1 justify-between items-center">
            <div>
              <i className="fa-solid fa-angle-up text-center w-full text-sm cursor-pointer font-light"></i>
              <div className="h-full gap-2 flex flex-col w-31 p-2 cursor-pointer">
                <img src={productImage} className="h-18" alt="" />
                <img src={productImage} className="h-18" alt="" />
                <img src={productImage} className="h-18" alt="" />
                <img src={productImage} className="h-18" alt="" />
              </div>
              <i class="fa-solid fa-angle-down text-center w-full text-sm cursor-pointer font-light"></i>
            </div>
            <div className="w-3/4">
              <div>
                <img
                  src={productImage}
                  alt="Product Image"
                  className="h-90 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start ml-10 w-1/2 h-full">
            <p className="mb-2 text-sm">
              <span className="font-bold">Brand</span> : Phillips
            </p>
            <p className="text-4xl mb-2 ">Modern Lamp for the Houses</p>
            <p className="flex justify-between w-full p-2">
              <span className="text-3xl pl-2">₹1500</span>
              <span className="pr-5 flex flex-col">
                <span className="text-right">Ratings</span>
                <span className="text-[13px] p-1 pl-5">
                  nearly 1K+ boughts last month
                </span>
              </span>
            </p>
            <p className="text-sm font-semibold p-1">
              This sleek and modern table lamp is perfect for adding a touch of
              sophistication to your living room or bedroom. Crafted from
              durable metal with a clean glass shade, it provides ample ambient
              lighting without being overbearing
            </p>
            <p className="p-2 h-full gap-1">
              <div className="text-sm font-semibold mb-3">Dimensions :</div>
              <span className="mt-2 flex gap-3">
                <span className="border-1 border-gray-600 p-1 px-2 rounded-md">
                  100 x 130 cm
                </span>
                <span className="border-1 border-gray-600 p-1 px-2 rounded-md">
                  40 x 20 cm
                </span>
              </span>
            </p>
            <p className="w-full p-1 flex gap-5 h-full items-center">
              <span className="font-semibold text-sm pl-2">28 in stock</span>
              <span className="pl-5 text-center p-1 cursor-pointer">
                <i className="fa-regular fa-heart text-xl"></i>
                <span className="text-sm font-light">Add to whishlist</span>
              </span>
            </p>
            <div className="flex justify-around gap-3 w-[65%]">
              <p className="flex border-1 border-gray-600 justify-center items-center gap-4 rounded-md m-1 px-2 cursor-pointer">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </p>
              <p className="bg-black w-full text-white text-center rounded-md text-[18px] p-1 cursor-pointer">
                <Link>Add to card</Link>
              </p>
            </div>
            <p className="w-[65%] bg-black m-2 p-2 rounded-md text-white text-center text-[18px] cursor-pointer">
              Buy Now
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTopSection;
