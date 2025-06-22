import { useState } from "react";
import ProductImage from "../../assets/lamp.jpg";
import Ratings from "../../assets/rating.png";

const PaymentsPage = () => {
  const [paymentOption, setPaymentOption] = useState("card");

  return (
    <>
      <div className="w-[88%] m-auto h-full flex justify-center items-start">
        <div className="w-[40%] h-full p-5 flex flex-col gap-3 justify-start items-start">
          <p className="text-2xl">Modern Lamp for the Houses</p>
          <p>
            <img
              src={ProductImage}
              alt="ProductImage"
              className="h-65 w-[80%] rounded-md"
            />
          </p>
          <span className="flex justify-between items-center w-1/2">
            <p className="text-2xl font-semibold">₹1500</p>
            <p>
              <img src={Ratings} alt="Ratings" className="h-15" />
            </p>
          </span>
        </div>
        <div className="w-[60%] h-full flex flex-col gap-2 p-3 justify-center items-center border-l-1 border-gray-300 pl-10">
          <p className="text-xl text-center">Payment Details</p>
          <form action="">
            <label htmlFor="nameOfCustomer">Name Of the Customer</label>
            <input
              type="text"
              id="nameOfCustomer"
              placeholder="Enter your name"
              className="border-1 w-full p-1 px-2 rounded-md mb-3 mt-1 outline-none"
            />
            <label htmlFor="emailOfCustomer">Email Of the Customer</label>
            <input
              type="email"
              id="emailOfCustomer"
              placeholder="Enter your email"
              className="border-1 w-full p-1 px-2 rounded-md mb-3 mt-1 outline-none"
            />
            <label htmlFor="phoneNumber">Phone Number</label>
            <span className="flex gap-2 items-center mb-2 mt-1 w-full">
              <p className="border-1 border-gray-200 w-12 h-9 font-semibold text-center p-1 px-1 rounded-md">
                +91
              </p>
              <span>
                <input
                  type="number"
                  id="phoneNumber"
                  placeholder="Enter your Phone Number"
                  className="border-1 w-100 p-1 px-2 rounded-md outline-none"
                />
              </span>
            </span>
            <p className="text-lg my-3 font-semibold">Payment Options</p>
            <div className="my-2 border-1 bg-gray-200 p-2 px-3 rounded-md w-60">
              <select
                name="paymentOptions"
                id="paymentOptions"
                className="outline-none w-full p-1 px-2 rounded-md cursor-pointer"
                onChange={(e) => setPaymentOption(e.target.value)}
              >
                <option value="card">Credit/Debit Card</option>
                <option value="upi">UPI</option>
                <option value="netbanking">Net Banking</option>
                <option value="netbanking">COD(Cash on Delivey)</option>
              </select>
            </div>
            {paymentOption === "card" && (
              <>
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="number"
                  id="cardNumber"
                  placeholder="Enter your Card Number"
                  className="border-1 w-full p-1 px-2 rounded-md mb-3 mt-1 outline-none"
                />
                <div className="flex ">
                  <span className="flex flex-col w-1/2 mr-2">
                    <label htmlFor="expireDate">Expire Date</label>
                    <input
                      type="text"
                      id="expireDate"
                      placeholder="MM/YY"
                      className="border-1 w-full p-1 px-2 rounded-md mb-3 mt-1 outline-none"
                    />
                  </span>
                  <span className="flex flex-col w-1/2 mr-2">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      placeholder="Enter your CVV"
                      className="border-1 w-full p-1 px-2 rounded-md mb-3 mt-1 outline-none"
                    />
                  </span>
                </div>{" "}
              </>
            )}
            <label htmlFor="address" className="text-lg font-semibold">
              Address
            </label>
            <span className="my-2 flex flex-col gap-1">
              <label htmlFor="street">Street No</label>
              <input
                type="text"
                id="street"
                placeholder="Enter your street no && landmark near your home"
                className="border-1 w-full p-1 px-2 rounded-md mb-3 mt-1 outline-none"
              />
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                placeholder="Enter your city"
                className="border-1 w-full p-1 px-2 rounded-md mb-3 mt-1 outline-none"
              />
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                placeholder="Enter your state"
                className="border-1 w-full p-1 px-2 rounded-md mb-3 mt-1 outline-none"
              />
              <label htmlFor="zip">Zip Code</label>
              <input
                type="text"
                id="zip"
                placeholder="Enter your zip code"
                className="border-1 w-full p-1 px-2 rounded-md mb-3 mt-1 outline-none"
              />
            </span>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 transition-colors cursor-pointer p-2 text-lg rounded-md text-white"
            >
              Proceed for Payment
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentsPage;
