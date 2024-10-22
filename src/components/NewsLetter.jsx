import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col py-10 px-16 relative top-[-125px] rounded-md  justify-center items-center bg-[#DDFBF2] mx-4">
      <h1 className="text-4xl font-bold mb-8">
        Subcribe <span className="text-green-600">Newletter</span>
      </h1>
      <div className="flex flex-col items-start">
        <p className="mb-4 font-medium text-base text-gray-500">
          Subscribe to our newsletter
        </p>
        <div className="flex justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Your Email Address"
            className="px-4 py-2 w-[482px] border border-gray-300 rounded-md outline-none placeholder:font-medium"
          />{" "}
          <button className="bg-green-600 rounded-md px-4 py-2 text-white">
            Subcribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
