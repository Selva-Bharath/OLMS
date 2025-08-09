import React from "react";

const Checkout = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl mt-18 ml-20 text-[#00214D]">
        Checkout
      </h2>
      <div className="flex flex-row">
        <div>
          <h2 className="text-[#00214D] ml-20 mt-3 font-bold text-[15px]">
            Personal Details:
          </h2>
          <form action="" className="ml-20 text-[#00214D]">
            <label className="font-bold text-[13px]">Name</label>
            <br />
            <input
              type="text"
              placeholder="Johm Doe"
              className="w-45 h-6 border-1 p-1 rounded-[5px] border-gray-500 text-[13px]"
            />
            <br />
            <label className="font-bold text-[13px]">Email</label>
            <br />
            <input
              type="text"
              placeholder="someone123@gmail.com"
              className="w-45 p-1 h-6 border-1 rounded-[5px] border-gray-500 text-[13px]"
            />
            <br />
            <label className="font-bold text-[13px]">Country</label>
            <br />
            <input
              type="text"
              placeholder="Enter your Country"
              className="w-45 p-1 h-6 border-1 rounded-[5px] border-gray-500 text-[13px]"
            />
            <br />
            <br />
            <h2 className="font-bold">Payment Methods</h2>
            <br />
            <div className="w-45 h-6 border-1 border-gray-500 rounded-[5px] ">
              <div className="flex flex-row">
                <input type="checkbox" className="ml-1" />
                <p className="ml-1">UPI</p>
              </div>
            </div>
            <div className="w-45 h-6 border-1 border-gray-500 rounded-[5px] mt-2">
              <div className="flex flex-row">
                <input type="checkbox" className="ml-1" />
                <p className="ml-1">Cards</p>
              </div>
            </div>
          </form>
        </div>
        <div className="w-0 h-95 border-1 border-gray-500 ml-18"></div>
        <div className="ml-10">
          <h2 className="text-[#00214D] ml-20 mt-3 font-bold text-[15px]">
            Payment Information:
          </h2>
          <form action="" className="ml-20 text-[#00214D]">
            <label className="font-bold text-[13px]">Name</label>
            <br />
            <input
              type="text"
              placeholder="Johm Doe"
              className="w-45 h-6 border-1 p-1 rounded-[5px] border-gray-500 text-[13px]"
            />{" "}
            <br />
            <label className="font-bold text-[13px]">Card Number</label>
            <br />
            <input
              type="text"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              className="w-45 h-6 border-1 p-1 rounded-[5px] border-gray-500 text-[13px]"
            />{" "}
            <br />
            <div className="flex flex-row">
              <div>
                <label className="font-bold text-[13px]">Expiry Date</label>
                <br />
                <input
                  type="text"
                  placeholder="MM/YYYY"
                  className="w-20 h-6 border-1 p-1 rounded-[5px] border-gray-500 text-[13px]"
                />{" "}
                <br />
              </div>
              <div className="ml-12">
                <label className="font-bold text-[13px] ">CVV</label>
                <br />
                <input
                  type="text"
                  placeholder="XXXX"
                  className="w-11 h-6 border-1 p-1 rounded-[5px] border-gray-500 text-[13px]"
                />{" "}
              </div>
            </div>
          </form>
          <br />
          <h2 className="text-[#00214D] ml-20 mt-3 font-bold text-[15px]">
            Order Details
          </h2>
          <div className="border-gray-500 border-1 w-80 h-13 rounded-[5px] ml-20 mt-3">
            <div className="flex flex-row ">
              <img src="src/image/image 16.png" className="ml-2 mt-1" alt="" />
              <p className="mt-3 ml-2 font-bold">React.js for Beginners</p>
              <p className="ml-8 mt-3 font-bold">$1,999</p>
            </div>
          </div>
          <div className="border-gray-500 border-1 w-80 h-13 rounded-[5px] ml-20 mt-3">
            <div className="flex flex-row ">
              <img src="src/image/image 19.png" className="ml-2 mt-1" alt="" />
              <p className="mt-3 ml-2 font-bold">Prompt Enginnering</p>
              <p className="ml-8 mt-3 font-bold">$1,090</p>
            </div>
          </div>
        </div>
        <div className="w-0 h-95 border-1 border-gray-500 ml-18"></div>
        <div className="ml-18">
          <div className="w-75 h-85 border-1 border-gray-500 rounded-[5px] mt-2 ml-15">
            <h2 className="text-[#00214D] font-bold mt-4 ml-6">
              Order Summary
            </h2>
            <div className="flex flex-row ml-9 mt-5">
              <p>Courses Enrolled:</p>
              <p className="ml-20">2</p>
            </div>
            <div className="flex flex-row ml-9 mt-3">
              <p>Total Price:</p>
              <p className="ml-31">$3,089</p>
            </div>
            <div className="flex flex-row ml-9 mt-3">
              <p>Discount:</p>
              <p className="ml-33">-$1089</p>
            </div>
            <p className="w-65 h-0 border-1 border-gray-500 ml-8 mt-5"></p>
            <p className="text-[10px] mt-19 ml-3">
              By completing your purchase, you agree to these{" "}
              <a href="">Terms of Use</a>.
            </p>
            <div className="flex flex-row mt-6">
              <p className="text-[#00214D] font-bold ml-5">Total:$2,000</p>
              <button className="bg-[#00214D] w-20 rounded-[5px] ml-22 text-white ">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
