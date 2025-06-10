import { useState } from "react";

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
              <div className="border-1 border-black h-[80%] w-[80%] m-auto rounded-md flex flex-col gap-5 justify-start items-center">
                <div className="w-full">
                  <h1 className="text-2xl text-start p-1 pl-8 pt-3">Login</h1>
                </div>
                <form
                  className="flex flex-col gap-3 justify-center items-center w-full
                "
                >
                  <input
                    type="email"
                    placeholder="Enter Email Adress"
                    className="border-1 w-[80%] p-1 pl-3 rounded-md text-[17px] outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="border-1 w-[80%] p-1 pl-3 rounded-md text-[17px] outline-none"
                  />
                  <div className="w-[80%] text-end pr-2">
                    <a href="#" className="text-blue-500 text-[17px]">
                      Forget Password?
                    </a>
                  </div>
                  <button className="w-[80%] bg-[#007CBE] text-white text-xl p-2 rounded-md cursor-pointer">
                    Login In
                  </button>
                </form>
                <div className="w-[80%] text-center">
                  <p>
                    Not a member ?{" "}
                    <a
                      href="#"
                      onClick={() => setIsLogin(false)}
                      className="text-blue-500"
                    >
                      SignUp
                    </a>
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="border-1 border-black h-[80%] w-[80%] m-auto rounded-md flex flex-col gap-5 justify-start items-center">
                <div className="w-full">
                  <h1 className="text-2xl text-start p-1 pl-8 pt-3">Sign UP</h1>
                </div>
                <form
                  action=""
                  className="flex flex-col gap-3 justify-center items-center w-full"
                >
                  <input
                    type="email"
                    placeholder="Enter Email Adress"
                    className="border-1 w-[80%] p-1 pl-3 rounded-md text-[17px] outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="border-1 w-[80%] p-1 pl-3 rounded-md text-[17px] outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="border-1 w-[80%] p-1 pl-3 rounded-md text-[17px] outline-none"
                  />
                  <button className="w-[80%] bg-[#007CBE] text-white text-xl p-2 rounded-md cursor-pointer">
                    SignUp
                  </button>
                </form>
                <div className="w-[80%] text-center">
                  <p>
                    Already have an ?{" "}
                    <a
                      href="#"
                      onClick={() => setIsLogin(true)}
                      className="text-blue-500"
                    >
                      account
                    </a>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUpRegisterPage;
