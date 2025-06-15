import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const Dropdown = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full mx-auto my-4 cursor-pointer rounded shadow-lg relative">
      <button
        className="w-full flex justify-between items-center p-3 bg-gray-100 hover:bg-gray-200 rounded-md"
        onClick={() => setOpen((prev) => !prev)}
      >
        {question}
        <span className="absolute right-5">
          {open ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </button>
      {open && <div className="p-4 bg-white text-gray-700">{answer}</div>}
    </div>
  );
};

export default Dropdown;
