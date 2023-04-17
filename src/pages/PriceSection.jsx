import React from "react";
import SinglePrice from "../components/SinglePrice";
import { priceData } from "../data";

const PriceSection = () => {
  return (
    <div className=" flex flex-col items-center justify-center md:h-screen bg-slate-200">
      <div class="my-10">
        <h1 className="text-2xl font-bold text-gray-600">PRICING</h1>
      </div>
      <div className=" flex flex-col md:flex-row">
        {priceData.map((current, index) => (
          <div className="sm:mx-4">
            <SinglePrice data={current} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceSection;
