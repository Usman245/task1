import React from "react";
import NewsLetter from "./NewsLetter";
import star from "../assets/logoGreen.png";
import visa from "../assets/visa.png";
import jazzcash from "../assets/jazzcash.png";
import paypak from "../assets/paypak.png";
import mastercard from "../assets/mastercard.png";

const Footer = () => {
  const links2 = ["Hep", "Privacy", "Login"];
  const link3 = [
    "Cookie Policy",
    "Privacy Policy",
    "Term of Services",
    "Company",
  ];
  const link4 = ["Explore", "Company", "Patrner", "Trip"];
  return (
    <div className="bg-[#12B76A]  py-5 mt-16">
      <NewsLetter />
      <div className="px-16 flex top-[-30px] realtive justify-between items-center text-white">
        <ul>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-white rounded-full flex justify-center items-center">
              <img src={star} alt="logo" />
            </div>
            <div className="font-bold">
              Link<span className="">Fare</span>
            </div>
          </div>
        </ul>
        <ul className="gap-4 flex flex-col font-medium">
          {links2.map((e) => (
            <a href="#">{e}</a>
          ))}
        </ul>

        <ul className="gap-4 flex flex-col font-medium">
          {link3.map((e) => (
            <a href="#">{e}</a>
          ))}
        </ul>

        <ul className="gap-4 flex flex-col font-medium">
          {link4.map((e) => (
            <a href="#">{e}</a>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center py-2 bg-white gap-4 mt-10 ">
        <a href="#">
          <img src={visa} alt="visa" />
        </a>
        <a href="#">
          <img src={jazzcash} alt="jazzcash" />
        </a>
        <a href="#">
          <img src={paypak} alt="paypak" />
        </a>
        <a href="#">
          <img src={mastercard} alt="paypak" />
        </a>
      </div>
      <div className="text-center text-white mt-10">
        <p className="text-lg font-normal">Copyright © 2024 LinkFares</p>
      </div>
    </div>
  );
};

export default Footer;
