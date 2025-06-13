import MyMap from "./MyMap";

const ContactUs = () => {
  return (
    <>
      <div className="w-[80%] m-auto p-3 flex gap-4">
        <div className="w-1/2 h-full p-4">
          <MyMap />
        </div>
        <div className="bg-gray-200 flex flex-col p-3 rounded-sm w-1/2">
          <div className="my-1">
            <p className="text-2xl mx-2 my-1">Get in touch with us</p>
            <p className="text-sm font-light mx-4 my-1">
              If you wish to directly reach us, Please fill out the form below
            </p>
          </div>
          <form action="" className="flex flex-col gap-2 mx-2">
            <label htmlFor="name" className="my-2">
              <span className="mb-1">Your Name : </span>
              <br />
              <span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  id="name"
                  className=" mt-1 p-1 rounded-md px-3 bg-white w-100 outline-none"
                />
              </span>
            </label>
            <label htmlFor="name" className="my-2">
              <span className="mb-1">Your Email : </span>
              <br />
              <span>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your email"
                  id="email"
                  className=" mt-1 p-1 rounded-md px-3 bg-white w-100 outline-none"
                />
              </span>
            </label>
            <label htmlFor="message" className="my-2">
              <span className="mb-1">Your Message : </span>
              <br />
              <span>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Enter Your message"
                  id="message"
                  className=" mt-1 p-1 rounded-md px-3 bg-white w-100 resize-none outline-none"
                  rows={5}
                />
              </span>
            </label>
            <button
              type="submit"
              className="bg-black rounded-sm p-2 text-white w-[80%] m-auto cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
