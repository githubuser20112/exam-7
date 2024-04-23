import React from 'react'
import People from "../images/User Plus_S.png"
import PeopleI from "../images/User Blue.png"
import Close from "../images/Close_S.png"
import { LuText } from "react-icons/lu";

const Side2 = () => {
  return (
    <div className="w-[355px] h-100% gap-2 p-5 ">
      <div className="flex justify-between">
        <div>
          <p className="text-[20px] font-semibold">Friend Activity</p>
        </div>
        <div className="flex gap-2">
          <img src={People} alt="" />
          <img src={Close} alt="" />
        </div>
      </div>
      <div className="mt-10">
        <div>
          <p>
            Let friends and followers on Spotify see what you’re listening to.
          </p>
        </div>
        <div className="mt-4">
          <div className="flex items-center">
            <img src={PeopleI} alt="" />
            <LuText className="text-7xl text-[#39383D]" />
          </div>
          <div className="flex items-center mt-5">
            <img src={PeopleI} alt="" />
            <LuText className="text-7xl text-[#39383D]" />
          </div>
          <div className="flex items-center mt-5 mb-4">
            <img src={PeopleI} alt="" />
            <LuText className="text-7xl text-[#39383D]" />
          </div>
        </div>
        <div>
          <p>
            Go to Settings Social and enable “Share my listening activity on
            Spotify.’ You can turn this off at any time.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-[70px] mt-5">
        <button className="w-[233px] h-[62px] bg-white rounded-[40px] text-black font-bold">
          SETTINGS
        </button>
      </div>
    </div>
  );
}

export default Side2