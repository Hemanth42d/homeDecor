import { Outlet, Link, useLocation } from "react-router";

const SignUpRegisterPage = () => {
  const location = useLocation();
  const isLogin =
    location.pathname === "/account" || location.pathname.includes("login");

  return (
    <div className="flex h-screen w-full border-2 border-black justify-center items-center">
      <div className="h-[70%] w-[50%] flex justify-center items-center">
        <img src="/loginImage.png" alt="image" className="h-[70%]" />
      </div>
      <div className=" h-[65%] w-[45%] flex justify-center items-center">
        <div className=" h-[95%] w-[70%] flex flex-col">
          <div className="h-15 w-[80%] m-auto rounded-md bg-[#F2E8BB] flex justify-around items-center">
            <Link
              to="/account/login"
              className={`text-xl w-1/2 rounded-md cursor-pointer flex justify-center items-center h-full ${
                isLogin ? "bg-[#007CBE] text-white" : ""
              }`}
            >
              Login
            </Link>
            <Link
              to="/account/signup"
              className={`text-xl w-1/2 rounded-md cursor-pointer flex justify-center items-center h-full ${
                !isLogin ? "bg-[#007CBE] text-white" : ""
              }`}
            >
              SignUp
            </Link>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SignUpRegisterPage;
