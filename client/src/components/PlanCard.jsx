import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

const PlanCard = ({ Data, type="Monthly" }) => {
  return (
    <div className="grid grid-cols-3 gap-10 my-16">
      {Data.map((item, index) => (
        <div key={index} className="flex flex-col rounded-2xl border">
          <div className="bg-[#FDE24FAA] p-5 rounded-t-2xl space-y-2">
            <div className=" flex justify-between items-center">
              <h2 className="font-bold text-[#00214d] text-lg">{item.plan}</h2>
              <h2 className=" text-[#00214d]">
                {item.price && item.yearly ? (
                  <p className="flex justify-evenly items-center ">
                    <FaIndianRupeeSign /> {type === "Monthly" ? item.price : item.yearly} / Month
                  </p>
                ) : (
                  "Contact"
                )}
              </h2>
            </div>
            <h2 className="text-[#00214d] text-sm">For {item.description}</h2>
          </div>
          <div className="space-y-2 p-5 flex-1">
            {item.features.map((features, i) => (
              <div className="flex space-x-3" key={i}>
                <p>
                  <TiTick size={20} />
                </p>{" "}
                <p>{features}</p>
              </div>
            ))}
          </div>
          <div className="flex w-full p-3">
            <button className="b2 mx-auto">
              {item.price ? "Subscribe" : "Contact Sales"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanCard;
