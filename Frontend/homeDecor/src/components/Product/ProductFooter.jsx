const ProductFooter = () => {
  return (
    <>
      <div className="w-[85%] m-auto p-5 flex justify-between items-center ">
        <div className="border-1 border-gray-500 p-4 px-5 rounded-md">
          <p className="text-xl font-semibold">Join our newletters at ₹50</p>
          <p className="mt-2 text-sm">
            Subscribe to our latest newsletters to get news about special
            discounts
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <p>
            <input
              type="email"
              placeholder="Enter your Email"
              className="border-2 border-gray-800 p-2 px-6 rounded-md outline-none"
            />
          </p>
          <p className="bg-black text-white cursor-pointer p-1.5 px-4 rounded-md">
            <a href="#" className="text-xl">
              Subscribe
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductFooter;
