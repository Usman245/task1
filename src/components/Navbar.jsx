import React from "react";
import Vector from "../assets/Vector.png";
import star from "../assets/Vector (1).png";

const Navbar = () => {
  const navLink = ["Our Service", "Flights", "About"];
  return (
    <div className="bg-white flex justify-between items-center py-4 px-16 text-xl font-normal">
      <div className="flex items-center gap-4 cursor-pointer">
        <div className="w-11 h-11 bg-green-700 rounded-full flex justify-center items-center">
          <img src={star} alt="logo" />
        </div>
        <div className="font-bold">
          Link<span className="text-green-400">Fare</span>
        </div>
      </div>
      <div className="flex gap-5 justify-center items-center">
        {navLink.map((e) => (
          <a href="#" className="hover:text-green-600 cursor-pointer">
            {e}
          </a>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center">
          <img src={Vector} alt="logo" />
          <div className="font-thin"> | </div>
          <div>USD</div>
        </div>
        <button className="bg-[#12B76A] text-white px-4 py-2 rounded-md cursor-pointer hover:text-green-600 hover:bg-white hover:border hover:border-green-600">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
