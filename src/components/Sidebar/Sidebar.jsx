import React from "react";
import Home from "../images/Home_Fill_S.png";
import Search from "../images/Search_S.png";
import Library from "../images/Library_S.png";
import Playlist from "../images/+Library_S (1).png";
import Like from "../images/Liked Songs_S.png";
import Screen from "../images/Screenshot 2022-06-04 at 20.05.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" sidebar">
      <div className="nav  rounded-lg p-5 mt-10">
        <div className="flex items-center gap-4">
          <img src={Home} alt="" width={25} height={28} />
          <span className="font-bold">Home</span>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <img src={Search} alt="" width={25} height={28} />
          <span className="font-bold">Search</span>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <img src={Library} alt="" width={25} height={28} />
          <span className="font-bold">Your Library</span>
        </div>
        <div className="flex items-center gap-4 mt-10">
          <img src={Playlist} alt="" width={25} height={28} />
          <span className="font-bold">Create playlist</span>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <img src={Like} alt="" width={25} height={28} />
          <Link to="/like" className="font-bold">
            Liked Songs
          </Link>
        </div>
        <hr className="mt-7" />
        <div className="scrollable">
          <p className="mt-7 font-semibold">Chill Mix</p>
          <p className="mt-5 font-semibold">Insta Hits</p>
          <p className="mt-5 font-semibold">Your Top Sings 2021</p>
          <p className="mt-5 font-semibold">Mellow Songs</p>
          <p className="mt-5 font-semibold">Anime Lofi & Chillhop Music</p>
          <p className="mt-5 font-semibold">BG Afro “Select” Vibes</p>
          <p className="mt-5 font-semibold">Afro “Select” Vibes</p>
          <p className="mt-5 font-semibold">Happy Hits</p>
          <p className="mt-5 font-semibold">Deep Focus</p>
          <p className="mt-5 font-semibold">Instrumental Study</p>
          <p className="mt-5 font-semibold">Ost Compilations</p>
          <p className="mt-5 font-semibold">Nostalgia for oldsouled mill...</p>
          <p className="mt-5 font-semibold">Mixed Feelings</p>
        </div>
      </div>
      <div className="screen">
        <img src={Screen} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
