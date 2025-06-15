import { Link } from "react-router-dom";
import Dropdown from "./DropDown";

const Faqs = () => {
  return (
    <>
      <div className="w-[80%] m-auto relative">
        <Link
          to="/shop"
          className="bg-blue-500 p-2 text-white rounded-md absolute right-4 top-0  hover:bg-blue-600 transition-colors"
        >
          Go Back
        </Link>
        <div className="border-b-1 border-gray-800 mt-2 p-2">
          <p className="text-lg font-semibold text-center">
            🛋️ Product & Quality
          </p>
          <p>
            <Dropdown
              question="What types of products do you sell?"
              answer="We offer a wide range of home furniture, lighting, wall art, décor accents, rugs, and storage solutions to suit every style."
            />
            <Dropdown
              question="Are your products made from real wood?"
              answer="Yes, many of our furniture items are made from solid wood or engineered wood with high-quality finishes. Product pages mention the exact materials."
            />
            <Dropdown
              question="Are the colors and finishes exactly as shown in pictures?"
              answer="We strive for accuracy, but slight variations may occur due to lighting and screen settings."
            />
            <Dropdown
              question="Do you offer furniture customization?"
              answer="Yes, select items are customizable in size, color, or fabric. Look for the “Customizable” tag on the product page."
            />
          </p>
        </div>
        <div className="border-b-1 border-gray-800 mt-2 p-2">
          <p className="text-lg font-semibold text-center">
            📦 Shipping & Delivery
          </p>
          <p>
            <Dropdown
              question="Do you offer free shipping?"
              answer="We offer free shipping on all orders above ₹999. Bulky furniture may include an additional handling fee, which will be shown at checkout."
            />
            <Dropdown
              question="How long will it take to receive my order?"
              answer="Delivery typically takes 5–10 business days for ready-to-ship items. Custom or made-to-order products may take longer (10–20 days)."
            />
            <Dropdown
              question="Can I schedule a delivery date?"
              answer="Yes, for large furniture items, you can schedule delivery at your convenience during checkout."
            />
            <Dropdown
              question="Do you offer furniture customization?"
              answer="Yes, select items are customizable in size, color, or fabric. Look for the “Customizable” tag on the product page."
            />
          </p>
        </div>
        <div className="mt-2 p-2">
          <p className="text-lg font-semibold text-center">
            🔄 Returns, Cancellations & Warranty
          </p>
          <p>
            <Dropdown
              question="Can I return a product if I don’t like it?"
              answer="Yes! We offer a 7-day easy return policy on most products, provided they are unused and in original packaging."
            />
            <Dropdown
              question="What if I receive a damaged item?"
              answer="Please report any damages within 48 hours of delivery with photos. We’ll arrange a free replacement or refund."
            />
            <Dropdown
              question="How can I cancel my order?"
              answer="Orders can be canceled before shipping. Once shipped, returns are subject to our return policy."
            />
            <Dropdown
              question="Is there a warranty on products?"
              answer="Yes, most furniture items come with a 1-year warranty against manufacturing defects. Specific details are on the product page."
            />
          </p>
        </div>
      </div>
      <div className="w-[80%] m-auto mt-4 p-4 flex items-center gap-2 border border-gray-300 rounded-md bg-gray-50">
        <p className="text-xl font-semibold w-[20%]">Any Question ?</p>
        <p>
          <form action="" className="flex w-[50vw] gap-2">
            <input
              type="text"
              placeholder="Enter Your Question?"
              className="bg-white border-1 p-2 rounded-md w-[80%] outline-none "
            />
            <button
              type="submit"
              className="text-white bg-blue-500 p-2 rounded-md w-[20%] hover:bg-blue-600 transition-colors cursor-pointer"
            >
              Submit
            </button>
          </form>
        </p>
      </div>
    </>
  );
};

export default Faqs;
