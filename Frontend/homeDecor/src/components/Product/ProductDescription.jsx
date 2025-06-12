import { useState } from "react";

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
