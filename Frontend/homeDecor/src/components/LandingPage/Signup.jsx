import { use, useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="border-1 w-[80%] p-1 pl-3 rounded-md text-[17px] outline-none"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border-1 w-[80%] p-1 pl-3 rounded-md text-[17px] outline-none"
            value={confirmPassword}
            onChange={(e) => {
              setconfirmPassword(e.target.value);
            }}
          />
          <button className="w-[80%] bg-[#007CBE] text-white text-xl p-2 rounded-md cursor-pointer">
            SignUp
          </button>
        </form>
        <div className="w-[80%] text-center">
          <p>
            Already have an ?{" "}
            <Link to="/account/login" className="text-blue-500">
              account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
