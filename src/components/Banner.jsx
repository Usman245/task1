import React from "react";
import { FaPlane } from "react-icons/fa";
import { FaBus } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { IoIosSpeedometer } from "react-icons/io";

const Banner = () => {
  const data = [
    { value: "100k+", icon: FaPlane, text: "Plane booked" },
    { value: "500k+", icon: FaBus, text: "Bus booked" },
    { value: "50k+", icon: IoBedOutline, text: "Hotel booked" },
    { value: "20M+", icon: IoIosSpeedometer, text: "Meter traveld" },
  ];
  return (
    <div className="px-16 py-10 flex justify-between items-center">
      {data.map((e) => (
        <div className="flex gap-2 items-center">
          <div className="text-green-600">{<e.icon />}</div>
          <div>
            <h4 className="font-medium text-xl">{e.value}</h4>
            <p className="text-lg font-normal">{e.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
