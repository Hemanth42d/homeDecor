import { useState } from "react";
import ReviewCard from "./ReviewCard";

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState("Description");

  let tabContent;
  switch (activeTab) {
    case "Description":
      tabContent = (
        <>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold">About this item</p>
            <p className="text-sm tracking-wide">
              This stunning table lamp features a sleek, modern design, crafted
              from polished brass and a textured glass shade. It provides a
              warm, inviting glow perfect for creating a cozy reading corner or
              a stylish accent piece for your desk. With its adjustable LED bulb
              (included) and dimmer switch, you can easily customize the
              lighting to your needs. The Stellar Table Lamp measures 20"H x
              10"W, making it the ideal size for a variety of spaces. It
              provides a robust, cost-effective foundation for building a
              scalable and successful e-commerce store. Thanks to its
              open-source nature, adaptability, and strong community backing,
              businesses big and small may reap the benefits. However,
              navigating the technical aspects of e-commerce development can
              take time and effort. Experience the perfect blend of style and
              functionality. Shop Now!
            </p>
          </div>
        </>
      );
      break;
    case "Additional Information":
      tabContent = (
        <>
          <div className="flex flex-col gap-2">
            <p className="font-light">
              Transform your home into a warm and inviting haven with our
              exclusive range of designer lamps. At GlowLuxe, we believe
              lighting is more than just functionality — it's an expression of
              style, comfort, and ambiance. Our carefully curated collection
              features everything from sleek modern floor lamps to charming
              vintage-inspired table lamps, designed to elevate every corner of
              your space.
            </p>
            <p className="mt-5 h-full">
              <span className="text-xl font-bold my-3">
                Why Choose GlowLuxe Lamps?
              </span>
              <span>
                <li className="mt-5">
                  <span className="font-semibold my-2">Stylish Designs:</span>
                  <br />
                  <span className="ml-20">
                    Each lamp is crafted with aesthetics in mind, blending
                    effortlessly with various interior themes like modern, boho,
                    rustic, or classic.
                  </span>
                </li>
                <li>
                  <span className="font-semibold my-2">Energy Efficient:</span>
                  <br />
                  <span className="ml-20">
                    Equipped with the latest LED technology, our lamps consume
                    less power and last longer — helping you save on electricity
                    bills.
                  </span>
                </li>
                <li>
                  <span className="font-semibold my-2">Premium Quality:</span>
                  <br />
                  <span className="ml-20">
                    We use high-grade, durable materials ensuring long-lasting
                    performance and safety.
                  </span>
                </li>
              </span>
            </p>
            <p className="my-5 font-light">
              Whether you're upgrading your home office or adding a cozy glow to
              your bedroom, our lamps offer the perfect balance between
              functionality and flair. Customers across India trust GlowLuxe for
              quality, elegance, and exceptional value. Let your space shine —
              beautifully, efficiently, and sustainably.
            </p>
          </div>
        </>
      );
      break;
    case "Reviews":
      tabContent = (
        <>
          <div className="grid grid-cols-2 gap-2 w-full p-2 pl-5">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </>
      );
      break;
    case "Shipping and return":
      tabContent = (
        <>
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-bold">Shipping and Return Policy</p>
            <p>
              We offer free shipping on all orders over ₹999. Orders are
              typically processed within 2-3 business days and delivered within
              5-7 business days, depending on your location. If you are not
              completely satisfied with your purchase, you can return it within
              30 days of receipt for a full refund or exchange. Please ensure
              that the item is in its original condition and packaging.
            </p>
          </div>
        </>
      );
  }

  return (
    <>
      <div className="flex justify-around w-[85%] m-auto border-b-1 border-gray-700 p-2">
        <button
          href="#"
          onClick={() => setActiveTab("Description")}
          className={` cursor-pointer
            ${
              activeTab === "Description"
                ? "font-bold border-b-2 border-gray-700 cursor-pointer"
                : ""
            }`}
        >
          Description
        </button>
        <button
          href="#"
          onClick={() => setActiveTab("Additional Information")}
          className={` cursor-pointer ${
            activeTab === "Additional Information"
              ? "font-bold border-b-2 border-gray-700 cursor-pointer"
              : ""
          }`}
        >
          Additional Information
        </button>
        <button
          href="#"
          onClick={() => setActiveTab("Reviews")}
          className={` cursor-pointer ${
            activeTab === "Reviews"
              ? "font-bold border-b-2 border-gray-700 cursor-pointer"
              : ""
          }`}
        >
          Reviews
        </button>
        <button
          href="#"
          onClick={() => setActiveTab("Shipping and return")}
          className={` cursor-pointer ${
            activeTab === "Shipping and return"
              ? "font-bold border-b-2 border-gray-700 cursor-pointer"
              : ""
          }`}
        >
          Shipping and return
        </button>
      </div>
      <div className="w-[80%] m-auto p-3">{tabContent}</div>
    </>
  );
};

export default ProductDescription;
