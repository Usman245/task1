import { useState } from "react";
import appImg from "../assets/appPhoto.png";
import { FaGooglePlay } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";

const AppDownload = () => {
  const [selectedOption, setSelectedOption] = useState("phone");
  return (
    <div className=" px-16 py-4 flex justify-center items-center">
      <div className=" w-1/2 pr-4">
        <h1 className="text-4xl font-bold">
          Get Link <span className="text-green-600">Fares</span>App
        </h1>
        <p className="my-2 text-xl font-medium">
          we will send you link open it and download it
        </p>
        <di className="flex w-full my-8 justify-start">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="checkbox"
              value="phone"
              checked={selectedOption === "phone"}
              onChange={() => setSelectedOption("phone")}
              className="hidden" // Hide the default radio input
            />
            <div
              className={`w-6 h-6 rounded-full border-2 ${
                selectedOption === "phone" ? "bg-green-500" : "border-gray-400"
              }`}
            ></div>
            <span className="text-gray-700 text-2xl">Phone</span>
          </label>

          {/* Option 2 */}
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="checkbox"
              value="email"
              checked={selectedOption === "email"}
              onChange={() => setSelectedOption("email")}
              className="hidden" // Hide the default radio input
            />
            <div
              className={`w-6 h-6 rounded-full border-2 ${
                selectedOption === "email" ? "bg-green-500" : "border-gray-400"
              }`}
            ></div>
            <span className="text-gray-700 text-2xl">Email</span>
          </label>
        </di>
        <div className="w-full flex ">
          <input
            type="text"
            name=""
            id=""
            placeholder={
              selectedOption === "phone"
                ? "Enter your Phone Number"
                : "Enter your Email"
            }
            className="outline-none border-2 border-gray-300 rounded-md py-2 px-4 font-medium w-2/3"
          />
          <button className="bg-green-500 text-white font-medium px-4 py-2 rounded-md ml-2 mr-3 w-1/3">
            Send Link
          </button>
        </div>
        <div className="flex flex-col py-4">
          <h3 className="text-gray-700 text-2xl font-medium">Dowload App</h3>
          <div className="flex justify-center mt-5">
            <button className="bg-black w-1/2 gap-4 cursor-pointer text-white text-base px-6 py-2 rounded-lg flex justify-center items-center ">
              <FaGooglePlay className="w-10 h-10 font-medium" />
              <div className="flex flex-col items-start ">
                Get On <span className="font-bold">Google Play</span>
              </div>
            </button>
            <button className="bg-black ml-3 w-1/2 gap-4 cursor-pointer text-white text-base px-6 py-2 rounded-lg flex justify-center items-center ">
              <FaApple className="w-10 h-10 font-medium" />
              <div className="flex flex-col items-start ">
                Get On <span className="font-bold">Apple Store</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img src={appImg} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
