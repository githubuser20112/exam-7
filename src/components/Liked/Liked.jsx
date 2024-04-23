import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import Back from "../images/Back.png";
import Forward from "../images/Forward.png";
import Img from "../images/Property 1=Minimized.png";
import Liked2 from "../images/Screenshot 2022-06-04 at 20 1.png";
import People from "../images/Screenshot 2022-06-05 at 12.21 1.png";
import "./Liked.css";
import { FiHeart } from "react-icons/fi";
import { FaPause } from "react-icons/fa6";
import Start from "../images/Polygon 1.png";
import Down from "../images/Download_XS.png";
import St from "../images/Options_XS.png";
import search from "../images/Search_S.png";
import Custom from "../images/Frame 12.png";

const Liked = ({ playlistData6, playlistData3 }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [audioPlayer, setAudioPlayer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playTrack = (index) => {
    if (currentTrackIndex === index) {
      setCurrentTrackIndex(null);
      setIsPlaying(false);
      if (audioPlayer) {
        audioPlayer.pause();
      }
    } else {
      setCurrentTrackIndex(index);
      setIsPlaying(true);
      if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.src = playlistData3[index].track.preview_url;
        audioPlayer.play();
      }
    }
  };

  const handleAudioLoad = (audio) => {
    setAudioPlayer(audio);
  };

  useEffect(() => {
    if (audioPlayer) {
      audioPlayer.addEventListener("ended", () => {
        setIsPlaying(false);
      });
    }
    return () => {
      if (audioPlayer) {
        audioPlayer.removeEventListener("ended", () => {
          setIsPlaying(false);
        });
      }
    };
  }, [audioPlayer]);

  const formatTrackDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = durationInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="w-full">
      <Layout>
        <div className="all2 w-full h-[550px] p-10 relative">
          <div className="top flex gap-6 pl-2">
            <img src={Back} alt="Back Button" className="w-10" />
            <img src={Forward} alt="Forward Button" className="w-10" />
          </div>
          <div className="center d text-5xl pl-3 flex">
            <img src={Liked2} alt="Liked Song" width={297} height={297} />
            <div className="custom-div2 mt-[100px] ml-8">
              <p className="p1 font-semibold">PUBLIC PLAYLIST</p>
              <p className="p2 font-bold">Liked Songs</p>
              <div className="flex items-center mt-4">
                <img src={People} alt="Profile" className="mr-2" />
                <p className="p3 font-semibold">davidirect3</p>
                <ul className="ml-8">
                  <li className="li font-semibold">34 songs</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-4">
            <audio
              ref={handleAudioLoad}
              controls
              autoPlay
              name="media"
              src={playlistData3[currentTrackIndex]?.track.preview_url}
              className="au"
            />
          </div>
        </div>
        <div className="list">
          <div className="list-center relative">
            <div className="list-center-top flex justify-between">
              <div className="list-center-top-left flex">
                <button
                  className={`play-btn bg-green-500 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isPlaying && "playing"
                  }`}
                  onClick={() => playTrack(currentTrackIndex)}
                >
                  {isPlaying ? (
                    <FaPause className="text-3xl text-black" />
                  ) : (
                    <img src={Start} alt="" />
                  )}
                </button>
                <FiHeart className="text-4xl" />
                <img src={Down} alt="" />
                <img src={St} alt="" />
              </div>
              <div className="list-center-top-right">
                <div className="list-center-top-right-left">
                  <img src={search} alt="" />
                </div>
                <div className="list-center-top-right-right">
                  <p className="font-semibold text-[18px]">Custom order</p>
                  <img src={Custom} alt="" className="w-[20px] h-[20px]" />
                </div>
              </div>
            </div>
            <table className="table">
              <thead className="thead">
                <tr className="tr">
                  <th className="px-4 py-2 HR">#</th>
                  <th className="px-4 py-2 title">Title</th>
                  <th className="px-4 py-2 album">Album</th>
                  <th className="px-4 py-2 date">Date Added</th>
                  <th className="px-4 py-2 time">Time</th>
                </tr>
              </thead>
              <tbody>
                {playlistData6.map((item, index) => (
                  <tr key={index} className="tir">
                    <td className=" px-4 py-2 td1">{index + 1}</td>
                    <td className="td2 relative">
                      <button
                        className="flex items-center play_btn2 absolute top-9 left-[16%]  rounded-[50%] bg-green-500 justify-center p-3"
                        onClick={() => playTrack(index)}
                      >
                        {isPlaying && currentTrackIndex === index ? (
                          <FaPause className="text-black text-2xl" />
                        ) : (
                          <img src={Start} alt="" className="" />
                        )}
                      </button>
                    </td>
                    <td className=" px-4 py-2 ">
                      <div className="flex items-center">
                        <img
                          src={item.images[0].url}
                          alt={item.name}
                          className="w-[52px] h-[52px]  mr-2"
                        />
                        <div>
                          <p className="text-sm font-semibold text-[20px]">
                            {item.name.length > 10
                              ? `${item.name.substring(0, 10)}...`
                              : item.name}
                          </p>
                          <p className="text-sm text-[#B3B3B3] text-[18px]">
                            {item.description.length > 20
                              ? `${item.description.substring(0, 20)}...`
                              : item.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className=" px-4 py-2">{item.name}</td>
                    <td className=" px-4 py-2"></td>
                    <td className=" px-4 py-2">
                      {formatTrackDuration(item.tracks.total)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
      <img src={Img} alt="Minimized Image" className="w-full" />
    </div>
  );
};

export default Liked;
