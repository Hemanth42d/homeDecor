const LandingPageFooter = () => {
  return (
    <>
      <div className="mb-3">
        <div className="flex justify-between bg-[#F2E8BB] mt-10 px-25 pt-10 h-[35vh] ">
          <div className=" w-1/2">
            <div className="px-60">
              <a href="#" className="text-3xl font-bold text-decoration-none">
                Home Decor
              </a>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-4 pl-25 w-[100%]">
              <a href="">Home Decoration</a>
              <a href="">Light Store</a>
              <a href="">Kitchen and Dinning</a>
              <a href="">Home Furniture</a>
              <a href="">Garden and outdoor</a>
            </div>
          </div>
          <div className=" w-1/2">
            <div className="px-60">
              <a href="#" className="text-3xl font-bold text-decoration-none">
                Contact Us
              </a>
            </div>
            <div className="flex flex-col justify-between items-start px-40 text-start mt-4 gap-3">
              <a href="#">Email : venkatahemanth42d@gmail.com</a>
              <a href="#">Phone : 1234567890</a>
              <a href="#">address : developer@ap.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2">
        <p className="text-center text-xl">Developed by M V Hemanth</p>
      </div>
    </>
  );
};

export default LandingPageFooter;
