import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const SignUpRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex h-screen w-full border-2 border-black justify-center items-center">
      <div className="h-[70%] w-[50%] flex justify-center items-center">
        <img src="/loginImage.png" alt="image" className="h-[70%]" />
      </div>
      <div className=" h-[65%] w-[45%] flex justify-center items-center">
        <div className=" h-[95%] w-[70%] flex flex-col">
          <div className="h-15 w-[80%] m-auto rounded-md bg-[#F2E8BB] flex justify-around">
            <button
              className={` text-xl w-1/2 rounded-md cursor-pointer ${
                isLogin ? "bg-[#007CBE] text-white" : ""
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`text-xl w-1/2 rounded-md cursor-pointer ${
                !isLogin ? "bg-[#007CBE] text-white" : ""
              }`}
              onClick={() => setIsLogin(false)}
            >
              SignUp
            </button>
          </div>
          {isLogin ? (
            <>
              <Login />
            </>
          ) : (
            <>
              <Signup />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpRegisterPage;
