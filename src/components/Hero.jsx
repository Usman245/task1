import React, { useState } from "react";
import lines from "../assets/grid lines.png";
import darkGreen from "../assets/grid blocks.png";
import svg1 from "../assets/svg1.png";
import svg2 from "../assets/svg5.png";
import svg3 from "../assets/svg2.png";
import svg4 from "../assets/svg3.png";
import svg5 from "../assets/svg4.png";

const Hero = () => {
  const pkgItem = [
    { name: "Flights", icon: svg1 },
    { name: "Hotels", icon: svg2 },
    { name: "Car Rentals", icon: svg3 },
    { name: "Busses", icon: svg4 },
    { name: "Packegs", icon: svg5 },
  ];

  // State to store the selected item
  const [selectedItem, setSelectedItem] = useState("Packegs");

  return (
    <div className="bg-green-400 w-full px-16 relative flex">
      <img className="" src={lines} alt="lines" />
      <img
        className="absolute top-0 left-0 w-full h-full object-cover opacity-75"
        src={darkGreen}
        alt="dark green"
      />
      <div className="absolute top-0 left-0 gap-5 px-16 w-full h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-3xl font-medium">{selectedItem}</h1>

        <div className="flex justify-center items-center gap-4">
          {pkgItem.map((e) => (
            <div
              key={e.name}
              className={`flex items-center border cursor-pointer border-white rounded-3xl gap-4 py-2 px-4 mx-2 transition-all ${
                selectedItem === e.name
                  ? "bg-green-600 text-white" // Darker background and text color when selected
                  : "bg-transparent text-white"
              }`}
              onClick={() => setSelectedItem(e.name)}
            >
              <img src={e.icon} alt={`${e.name} icon`} />
              <p className="text-base font-medium">{e.name}</p>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center items-center">
          <div className="flex w-4/5 bg-white rounded-md text-black">
            <input
              type="text"
              placeholder="From City Country Place"
              className="bg-transparent px-1 py-2 outline-none w-1/4 placeholder:font-medium"
            />
            <div className="w-1 bg-green-500"></div>
            <input
              type="text"
              placeholder="To City Country Place"
              className="bg-transparent px-1 py-2 outline-none w-1/4 placeholder:font-medium"
            />
            <div className="w-1 bg-green-500"></div>
            <input
              type="text"
              placeholder="From City Country Place"
              className="bg-transparent outline-none w-1/4 px-1 py-2 placeholder:font-medium"
            />
            <div className="w-1 bg-green-500"></div>
            <input
              type="text"
              placeholder="From City Country Place"
              className="bg-transparent outline-none px-1 py-2 w-1/4 placeholder:font-medium"
            />
          </div>
          <button className="bg-green-600 rounded-sm p-2 text-lg ml-4 cursor-pointer">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
