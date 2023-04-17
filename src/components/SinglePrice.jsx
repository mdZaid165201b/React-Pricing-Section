import React from "react";

const SinglePrice = ({ data }) => {
  console.log(data);
  return (
    <div className="w-screen h-full sm:w-[400px] sm:h-[500px] bg-gray-50 drop-shadow-lg shadow-black/50 rounded-lg">
      <div className=" flex flex-col justify-center my-5 md:my-4">
        <h1 className="font-bold text-lg text-gray-600 uppercase">
          {data.name}
        </h1>
        <h1 className="font-bold text-2xl text-gray-600 my-3">
          $ {data.price} <span className="text-sm text-gray-400">/year</span>
        </h1>
      </div>
      <div className="bg-gray-200/70 mx-5 p-1 rounded text-blue-600 font-semibold hover:bg-blue-600 hover:text-gray-100 cursor-pointer">
        <button className="tracking-wide">BUY</button>
      </div>
      <hr className="my-5 border border-gray-200" />
      <div className="flex flex-col">
        {data.features.map((current, index) => (
          <div className="flex my-2" key={Math.random(index)}>
            <span className="text-green-700 ml-5 mr-4 font-extrabold">✓</span>
            <h1 className="text-gray-700  text-md tracking-wide">
              {current}
            </h1>
          </div>
        ))}
        {/* <div className="flex my-2">
          <span className="text-green-700 ml-5 mr-4 font-extrabold">✓</span>
          <h1 className="text-gray-700  text-md tracking-wide">
            Unlimted Update
          </h1>
        </div>
        <div className="flex my-2">
          <span className="text-green-700 ml-5 mr-4 font-extrabold">✓</span>
          <h1 className="text-gray-700  text-md tracking-wide">
            Unlimted Update
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default SinglePrice;
