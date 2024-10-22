import React from "react";
import img1 from "../assets/more1.jpeg";
import img2 from "../assets/more2.jpg";
import img3 from "../assets/more3.jpeg";

const Explore = () => {
  const data = [
    { text: "International Tour", img: img1 },
    { text: "Domestic Tour", img: img2 },
    { text: "others", img: img3 },
    { text: "International Tour", img: img1 },
    { text: "Domestic Tour", img: img2 },
    { text: "others", img: img3 },
    { text: "International Tour", img: img1 },
    { text: "Domestic Tour", img: img2 },
    { text: "others", img: img3 },
  ];
  return (
    <div className="px-16 py-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">
        Explore <span className="text-green-600">More</span>
      </h1>
      <h4>Every Momement Every place Everything you need/</h4>
      <div className="grid grid-cols-3 gap-8 w-full py-4 cursor-pointer">
        {data.map((e) => (
          <div className="flex relative h-72 items-end justify-end">
            <img
              className="w-full h-full object-cover rounded-md"
              src={e.img}
              alt=""
            />
            <h1 className="absolute text-2xl mr-2 mb-2 font-bold text-white">
              {e.text}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
