import { useState } from "react";

const OwnerAddProduct = () => {
  const [subHeadings, setSubHeadings] = useState([{ heading: "", info: "" }]);

  const handleSubHeadingChange = (index, field, value) => {
    const updated = [...subHeadings];
    updated[index][field] = value;
    setSubHeadings(updated);
  };

  const addSubHeading = () => {
    setSubHeadings([...subHeadings, { heading: "", info: "" }]);
  };

  const removeSubHeading = (index) => {
    const updated = subHeadings.filter((_, i) => i !== index);
    setSubHeadings(updated);
  };

  return (
    <>
      <div className="flex flex-col items-start">
        <p className="text-xl tracking-wide w-full border-b-1 border-black pb-2 pl-2">
          Add New Product
        </p>
        <div className="m-2 p-3 felx flex-col items-start justify-start w-full h-full">
          <p className="text-lg pb-2 border-b-1 border-black">
            Details Of the Product
          </p>
          <form action="" className="mt-2 p-2">
            <div className="flex flex-col w-full">
              <label className="text-sm m-1">Product Name</label>
              <input
                type="text"
                required
                className="border-2 border-gray-300 rounded-md p-2 mb-3 w-full outline-none"
                placeholder="Enter product name"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm m-1">Brand Name</label>
              <input
                type="text"
                required
                className="border-2 border-gray-300 rounded-md p-2 mb-3 w-full outline-none"
                placeholder="Enter brand name"
              />
            </div>
            <div className="flex flex-col w-full m-1">
              <label className="text-sm">Product Description</label>
              <textarea
                className="border-2 border-gray-300 rounded-md p-2 mb-3 w-full resize-none outline-none"
                placeholder="Enter product description"
                required
                rows-4
                cols-10
                style={{ height: "100px" }}
              ></textarea>
            </div>
            <div className="flex flex-col w-full m-1">
              <label className="text-sm">Price</label>
              <input
                type="number"
                required
                className="border-2 border-gray-300 rounded-md p-2 mb-3 w-full outline-none"
                placeholder="Enter product price"
              />
            </div>
            <div className="flex flex-col w-full m-1 cursor-pointer outline-none">
              <label className="text-sm">Category</label>
              <select className="border-2 border-gray-300 rounded-md p-2 mb-3 w-full">
                <option value="">Select category</option>
                <option value="furniture">Furniture</option>
                <option value="decor">Decor</option>
                <option value="lighting">Lighting</option>
                <option value="kitchen">Kitchen</option>
              </select>
            </div>
            <div className="flex flex-col w-full m-1">
              <label className="text-sm">Image</label>
              <input
                type="file"
                multiple
                accept="image/*"
                required
                className="border-2 border-gray-300 rounded-md p-2 mb-3 w-full outline-none cursor-pointer"
                placeholder="Enter product price"
              />
            </div>
            <div className="flex flex-col w-full m-1">
              <label className="text-sm">Dimensions</label>
              <input
                type="text"
                required
                className="border-2 border-gray-300 rounded-md p-2 mb-3 w-full outline-none"
                placeholder="Enter product dimensions"
              />
            </div>

            <div className="flex flex-col w-full m-1">
              <label className="text-sm">Subheadings & Info</label>
              {subHeadings.map((item, idx) => (
                <div key={idx} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    placeholder="Subheading"
                    value={item.heading}
                    onChange={(e) =>
                      handleSubHeadingChange(idx, "heading", e.target.value)
                    }
                    className="border-2 border-gray-300 rounded-md p-2 w-1/3"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Related Info"
                    value={item.info}
                    onChange={(e) =>
                      handleSubHeadingChange(idx, "info", e.target.value)
                    }
                    className="border-2 border-gray-300 rounded-md p-2 w-2/3"
                    required
                  />
                  {subHeadings.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSubHeading(idx)}
                      className="text-red-500 px-2"
                    >
                      X
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addSubHeading}
                className="bg-green-400 w-1/2 my-2 m-auto text-white px-3 py-1 rounded text-lg p-2 cursor-pointer hover:bg-green-500 transition duration-200 mb-3"
              >
                Add Subheading
              </button>
            </div>

            <div>
              <label htmlFor="instock" className="w-full flex flex-col m-1">
                In stock
              </label>
              <input
                type="text"
                name="instock"
                id="instock"
                placeholder="Enter stock quantity"
                className="border-2 border-gray-300 rounded-md p-2 mb-3 w-full outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 w-full text-white p-2 rounded-md hover:bg-blue-600 transition duration-200 cursor-pointer"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default OwnerAddProduct;
