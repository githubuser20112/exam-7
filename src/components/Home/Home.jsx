import React from "react";
import Layout from "../../Layout/Layout";
import Back from "../images/Back.png";
import Forward from "../images/Forward.png";
import Img from "../images/Property 1=Minimized.png";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import ChillMixImage from "../images/Screenshot 2022-06-04 at 20.06 (1).png";
import Pop from "../images/Screenshot 2022-06-04 at 20.05 (2).png";
import Mix1 from "../images/Screenshot 2022-06-04 at 20.06.png";
import Mix5 from "../images/Screenshot 2022-06-04 at 20.06 (1).png";
import Mix4 from "../images/Screenshot 2022-06-04 at 20.06 (2).png";
import Folk from "../images/Screenshot 2022-06-04 at 20.05 (1).png";

const playlists = [
  { id: "1", name: "Chill Mix", image: ChillMixImage },
  { id: "2", name: "Pop Mix", image: Pop },
  { id: "3", name: "Daily Mix 1", image: Mix1 },
  { id: "4", name: "Daily Mix 5", image: Mix5 },
  { id: "5", name: "Folk & Acoustic Mix", image: Folk },
  { id: "6", name: "Daily Mix 4", image: Mix4 },
];

const Home = ({ playlistData, playlistData2, playlistData4, playlistData7 }) => {
  return (
    <div className="w-full">
      <Layout>
        <div className="layout">
          <div className="all w-full p-10">
            <div className="flex gap-6 pl-2">
              <div className="w-10">
                <img src={Back} alt="Back" />
              </div>
              <div className="w-10">
                <img src={Forward} alt="Forward" />
              </div>
            </div>
            <div className="center mt-16 text-5xl pl-3">
              <p className="text-white font-semibold">Good afternoon</p>
            </div>
            <div className="bottom flex gap-7 flex-wrap mt-10">
              {playlists.map((playlist) => (
                <div
                  key={playlist.id}
                  className="section ml-4 flex items-center"
                >
                  <img
                    src={playlist.image}
                    alt={playlist.name}
                    width={82}
                    height={82}
                  />
                  <p className="pl-5 font-semibold">{playlist.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="div-bottom2">
            <div className="bottom2">
              <div className="top">
                <div className="top-top flex justify-between">
                  <p className="p4 font-semibold">Your top mixes</p>
                  <p className="p5 font-semibold">SEE ALL</p>
                </div>
                <div className="top-bottom mt-7 flex flex-wrap">
                  {playlistData.map((item) => (
                    <div key={item.id} className="relative">
                      <Link to={`/single/${item.id}`} className="card">
                        <div className="card-center">
                          <img
                            src={item.images[0].url}
                            alt={item.name}
                            width={182}
                            height={182}
                            className="w-full"
                          />
                          <button className="flex items-center play_btn absolute bottom-[40%] right-[13%] rounded-[50%] bg-green-500 justify-center p-3">
                            <FaPlay className="text-black text-xl" />
                          </button>
                          <p className="p6 text-[20px] font-semibold">
                            {item.name.length > 10
                              ? item.name.slice(0, 10) + "..."
                              : item.name}
                          </p>
                          <p className="p7 text-[18px] text-[#B3B3B3]">
                            {item.description.length > 20
                              ? item.description.slice(0, 20) + "..."
                              : item.description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="made mt-10 ">
                <div className="top-top flex justify-between">
                  <p className="p4 font-semibold">Made for you</p>
                  <p className="p5 font-semibold">SEE ALL</p>
                </div>
                <div className="top-bottom mt-7 flex flex-wrap">
                  {playlistData2.map((item) => (
                    <Link
                      key={item.id}
                      to={`/single/${item.id}`}
                      className="card"
                    >
                      <div className="card-center relative">
                        <img
                          src={item.images[0].url}
                          alt={item.name}
                          width={182}
                          height={182}
                          className="w-full"
                        />
                        <button className="flex items-center play_btn bottom-[40%] right-[6%] absolute rounded-[50%] bg-green-500 justify-center p-3">
                          <FaPlay className="text-black text-xl" />
                        </button>
                        <p className="p6 text-[20px] font-semibold">
                          {item.name.length > 10
                            ? item.name.slice(0, 10) + "..."
                            : item.name}
                        </p>
                        <p className="p7 text-[18px] text-[#B3B3B3]">
                          {item.description.length > 20
                            ? item.description.slice(0, 20) + "..."
                            : item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="played mt-10">
                <div className="top-top flex justify-between">
                  <p className="p4 font-semibold">Recently played</p>
                  <p className="p5 font-semibold">SEE ALL</p>
                </div>
                <div className="top-bottom mt-7 flex flex-wrap">
                  {playlistData4.map((item) => (
                    <Link
                      key={item.id}
                      to={`/single/${item.id}`}
                      className="card"
                    >
                      <div className="card-center relative">
                        <img
                          src={item.images[0].url}
                          alt={item.name}
                          width={182}
                          height={182}
                          className="w-full"
                        />
                        <button className="flex items-center play_btn bottom-[40%] right-[6%] absolute rounded-[50%] bg-green-500 justify-center p-3">
                          <FaPlay className="text-black text-xl" />
                        </button>
                        <p className="p6 text-[20px] font-semibold">
                          {item.name.length > 10
                            ? item.name.slice(0, 10) + "..."
                            : item.name}
                        </p>
                        <p className="p7 text-[18px] text-[#B3B3B3]">
                          {item.description.length > 20
                            ? item.description.slice(0, 20) + "..."
                            : item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="jump mt-10">
                <div className="top-top flex justify-between">
                  <p className="p4 font-semibold">Jump back in</p>
                  <p className="p5 font-semibold">SEE ALL</p>
                </div>
                <div className="top-bottom mt-7 flex flex-wrap">
                  {playlistData2.map((item) => (
                    <Link
                      key={item.id}
                      to={`/single/${item.id}`}
                      className="card"
                    >
                      <div className="card-center relative">
                        <img
                          src={item.images[0].url}
                          alt={item.name}
                          width={182}
                          height={182}
                          className="w-full"
                        />
                        <button className="flex items-center play_btn bottom-[40%] right-[6%] absolute rounded-[50%] bg-green-500 justify-center p-3">
                          <FaPlay className="text-black text-xl" />
                        </button>
                        <p className="p6 text-[20px] font-semibold">
                          {item.name.length > 10
                            ? item.name.slice(0, 10) + "..."
                            : item.name}
                        </p>
                        <p className="p7 text-[18px] text-[#B3B3B3]">
                          {item.description.length > 20
                            ? item.description.slice(0, 20) + "..."
                            : item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="yours mt-10 ">
                <div className="top-top flex justify-between">
                  <p className="p4 font-semibold">Uniquely yours</p>
                  <p className="p5 font-semibold">SEE ALL</p>
                </div>
                <div className="top-bottom mt-7 flex flex-wrap">
                  {playlistData7.map((item) => (
                    <Link
                      key={item.id}
                      to={`/single/${item.id}`}
                      className="card"
                    >
                      <div className="card-center relative">
                        <img
                          src={item.images[0].url}
                          alt={item.name}
                          width={182}
                          height={182}
                          className="w-full"
                        />
                        <button className="flex items-center play_btn bottom-[40%] right-[6%] absolute rounded-[50%] bg-green-500 justify-center p-3">
                          <FaPlay className="text-black text-xl" />
                        </button>
                        <p className="p6 text-[20px] font-semibold">
                          {item.name.length > 10
                            ? item.name.slice(0, 10) + "..."
                            : item.name}
                        </p>
                        <p className="p7 text-[18px] text-[#B3B3B3]">
                          {item.description.length > 20
                            ? item.description.slice(0, 20) + "..."
                            : item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <img src={Img} alt="Minimized" className="w-full" />
    </div>
  );
};

export default Home;
