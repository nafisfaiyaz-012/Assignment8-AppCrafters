import React from "react";
import bannerImg from "../assets/hero.png";
import GooglePlayImg from "../assets/GooglePlay.png";
import AppleStoreImg from '../assets/AppleStore.png'
import { Link } from "react-router";
const Banner = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center  space-y-8 w-fit mx-auto">
        <div className="space-y-7 mt-5">
          <div>
            <h1 className="text-center text-5xl font-semibold">
              We Build <br /> Productive Apps
            </h1>
            <p>
              At AppCrafters , we craft innovative apps designed to make
              everyday life simpler, smarter, and more exciting. <br />
              Our goal is to turn your ideas into digital experiences that truly
              make an impact.
            </p>
          </div>
          <div className="flex justify-center items-center gap-20">
            <Link
              to="https://play.google.com/store/games?device=windows"
              className="btn p-2"
            >
              <img className="h-[25px]" src={GooglePlayImg} alt="" /> Google Play
            </Link>
            <Link
              to="https://www.apple.com/app-store/"
              className="btn p-2"
            >
              <img className="h-[25px]" src={AppleStoreImg} alt="" /> Apple Store
            </Link>
          </div>
        </div>
        <div>
          <img src={bannerImg} alt="" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white">
        <div>
          <h1 className="text-6xl pt-8 font-semibold">
            Trusted by Millions, Built for You
          </h1>
        </div>
        <div className="  flex gap-10 mt-8">
          <div className="  text-center space-y-3 p-8">
            <h1 className="text-lg">Total Downloads</h1>
            <p className="text-5xl font-semibold">29.6M</p>
            <p className="text-lg">21% more than last month</p>
          </div>

          <div className="  text-center space-y-3 p-8">
            <h1 className="text-lg">Total Reviews</h1>
            <p className="text-5xl font-semibold">906K</p>
            <p className="text-lg">46% more than last month</p>
          </div>

          <div className="  text-center space-y-3 p-8">
            <h1 className="text-lg">Active Apps</h1>
            <p className="text-5xl font-semibold">132+</p>
            <p className="text-lg">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
