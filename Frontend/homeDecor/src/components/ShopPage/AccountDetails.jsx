import { Link } from "react-router";
import profileImg from "../../assets/meeee.jpg";

const AccountDetails = () => {
  return (
    <>
      <div className="flex w-[80%] m-auto h-full mt-5">
        <div className="w-1/4 h-full flex flex-col justify-center items-center p-3">
          <img
            src={profileImg}
            alt="profile Image"
            className="h-55 rounded-[20%] mb-4"
          />
          <p className="text-2xl">Hemanth</p>
        </div>
        <div className="w-[70%] h-full p-2 m-auto px-10 border-l-1 border-gray-800">
          <div className="w-[80%] grid grid-cols-2 grid-rows-2 gap-4 mt-2 mb-7 border-b-1 border-gray-800 py-3">
            <Link
              to="/shop/cart"
              className="bg-amber-400 p-2 w-40 text-center rounded-md text-[17px] "
            >
              Cart
            </Link>
            <Link
              to="/shop/whishlist"
              className="bg-amber-400 p-2 w-40 text-center rounded-md text-[17px] "
            >
              Whishlist
            </Link>
            <Link
              to="/shop/myorders"
              className="bg-amber-400 p-2 w-40 text-center rounded-md text-[17px] "
            >
              My Oders
            </Link>
          </div>
          <form action="" className="flex flex-col h-full gap-4">
            <label htmlFor="firstName">
              <span className="mr-7">First Name : </span>
              <span>
                <input
                  type="text"
                  placeholder="First Name"
                  id="firstName"
                  className="border-1 border-gray-800 outline-none w-80 p-1 px-2 rounded-md"
                />
              </span>
            </label>
            <label htmlFor="lastName">
              <span className="mr-7">Last Name : </span>
              <span>
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lastName"
                  className="border-1 border-gray-800 outline-none w-80 p-1 px-2 rounded-md"
                />
              </span>
            </label>
            <label htmlFor="number">
              <span className="mr-1">Enter Number : </span>
              <span>
                <input
                  type="Number"
                  placeholder="Number"
                  id="number"
                  className="border-1 border-gray-800 outline-none w-80 p-1 px-2 rounded-md"
                />
              </span>
            </label>
            <label htmlFor="email">
              <span className="mr-7">Enter Email : </span>
              <span>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  className="border-1 border-gray-800 outline-none w-80 p-1 px-2 rounded-md"
                />
              </span>
            </label>
            <label htmlFor="address" className="flex gap-10">
              <span className="mr-4">Address : </span>
              <span className="">
                <textarea
                  type="text"
                  placeholder="Address"
                  id="address"
                  className="border-1 border-gray-800 outline-none w-80 p-1 px-2 rounded-md resize-none"
                  cols={50}
                  rows={4}
                />
              </span>
            </label>
            <label htmlFor="image" className="flex flex-col mb-2">
              <span className="mb-2">Change Profile picture : </span>
              <span>
                <input
                  type="file"
                  className="border-1 w-100 p-2 rounded-md cursor-pointer"
                  id="image"
                />
              </span>
            </label>
            <button className="rounded-md w-[50%] border-2 m-auto p-2 text-xl bg-blue-500 text-white cursor-pointer">
              Update Details
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
