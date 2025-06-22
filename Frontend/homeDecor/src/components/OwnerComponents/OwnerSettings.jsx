import { useState } from "react";
import image from "../../assets/meeee.jpg";

const OwnerSettings = () => {
  const [owner, setOwner] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    about: "",
  });

  const handleChange = (e) => {
    setOwner({ ...owner, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add API call or logic to update owner details
    alert("Owner details updated!");
  };

  return (
    <div className="flex flex-row justify-between items-start h-full w-full relative">
      <div className="flex flex-col flex-1">
        <p className="text-xl tracking-wide w-full border-b-1 border-black pb-2 pl-2">
          Owner Settings
        </p>
        <form
          className="m-2 p-3 flex flex-col items-start justify-start w-full max-w-lg h-full gap-3"
          onSubmit={handleSubmit}
        >
          <label className="w-full">
            <span className="text-sm">Name</span>
            <input
              type="text"
              name="name"
              value={owner.name}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-md p-2 mb-2 w-full outline-none"
              placeholder="Enter owner name"
              required
            />
          </label>
          <label className="w-full">
            <span className="text-sm">Email</span>
            <input
              type="email"
              name="email"
              value={owner.email}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-md p-2 mb-2 w-full outline-none"
              placeholder="Enter email"
              required
            />
          </label>
          <label className="w-full">
            <span className="text-sm">Phone</span>
            <input
              type="tel"
              name="phone"
              value={owner.phone}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-md p-2 mb-2 w-full outline-none"
              placeholder="Enter phone number"
            />
          </label>
          <label className="w-full">
            <span className="text-sm">Address</span>
            <input
              type="text"
              name="address"
              value={owner.address}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-md p-2 mb-2 w-full outline-none"
              placeholder="Enter address"
            />
          </label>
          <label className="w-full">
            <span className="text-sm">About</span>
            <textarea
              name="about"
              value={owner.about}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-md p-2 mb-2 w-full outline-none resize-none"
              placeholder="About the owner"
              rows={3}
            />
          </label>
          <label htmlFor="ownerImage">Image</label>
          <input
            type="file"
            id="ownerImage"
            name="ownerImage"
            accept="image/*"
            className="border-2 border-gray-300 rounded-md p-2 mb-2 w-full outline-none cursor-pointer"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition cursor-pointer"
          >
            Update Details
          </button>
        </form>
      </div>
      <div className="flex-shrink-0 flex items-start justify-end w-[30%] p-5 mt-20 mr-10">
        <img
          src={image}
          alt="OwnerImage"
          className="h-auto w-full max-w-xs rounded-3xl shadow"
        />
      </div>
    </div>
  );
};

export default OwnerSettings;
