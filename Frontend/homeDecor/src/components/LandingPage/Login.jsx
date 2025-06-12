import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="border-1 border-black h-[80%] w-[80%] m-auto rounded-md flex flex-col gap-5 justify-start items-center">
        <div className="w-full">
          <h1 className="text-2xl text-start p-1 pl-8 pt-3">Login</h1>
        </div>
        <form
          className="flex flex-col gap-3 justify-center items-center w-full"
          action=""
        >
          <input
            type="email"
            placeholder="Enter Email Adress"
            value={email}
            className="border-1 w-[80%] p-1 pl-3 rounded-md text-[17px] outline-none"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            className="border-1 w-[80%] p-1 pl-3 rounded-md text-[17px] outline-none"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="w-[80%] text-end pr-2">
            <a href="#" className="text-blue-500 text-[17px]">
              Forget Password?
            </a>
          </div>
          <button
            className="w-[80%] bg-[#007CBE] text-white text-xl p-2 rounded-md cursor-pointer"
            onClick={(e) => handleOnSubmit(e)}
          >
            Login In
          </button>
        </form>
        <div className="w-[80%] text-center">
          <p>
            Not a member ?{" "}
            <Link to="/account/signup" className="text-blue-500">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
