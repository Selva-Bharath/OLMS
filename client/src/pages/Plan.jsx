import React, { useState } from "react";
import PlanCard from "../components/PlanCard";
import Contact from "../sections/Contact";
import LData from "../LData";

const Plan = () => {
  const [plan, setPlan] = useState("Monthly");
  return (
    <div className="w-full mx-auto space-y-5 my-16">
      <h1 className="text-center">Choose Your Right Plan!</h1>
      <h3 className="text-center">
        Select your best plans, ensuring a perfect match. Need more or Less?
        Customize your subscription
      </h3>
      <div>
        <div className="w-6/12 bg-white mx-auto p-1 flex flex-row justify-evenly items-center rounded-lg border border-[#00214d]">
          {["Monthly", "Yearly"].map((item, index) => (
            <h2
              key={index}
              className={`text-lg w-1/2 p-2 text-center rounded-lg cursor-pointer ${
                plan === item ? "text-white bg-[#00214d]" : ""
              }`}
              onClick={() => setPlan(item)}
            >
              {item}
            </h2>
          ))}
        </div>
      </div>
      <div className="w-9/12 mx-auto">
          <PlanCard Data={LData.Plans} type={plan} />
      </div>
      <Contact />
    </div>
  );
};

export default Plan;
