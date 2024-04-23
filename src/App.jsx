import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import Single from "./components/single-page/Single";
import Liked from "./components/Liked/Liked";

const App = () => {
  const ClientId = "f295a6d2526f4900966e865ab55a093e";
  const ClientSecret = "a6c74dc6a56f477e9a0c407a7277252b";
  const tokenUrl = "https://accounts.spotify.com/api/token";
  const apiUrl =
    "https://api.spotify.com/v1/browse/categories/toplists/playlists?limit=4"; //bor 2
  const apiUrl2 =
    "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists?limit=4"; //bor 4
  const apiUrl3 =
    "https://api.spotify.com/v1/playlists/37i9dQZF1DWWY64wDtewQt/tracks";
  const apiUrl4 =
    "https://api.spotify.com/v1/browse/featured-playlists?limit=4"; //bor 1
  const apiUrl5 =
    "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists"; //bor 5
  const apiUrl6 =
    "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists"; // bor 6
  const apiUrl7 =
    "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists?limit=4";

  const [accessToken, setAccessToken] = useState(null);
  const [playlistData, setPlaylistData] = useState([]);
  const [playlistData2, setPlaylistData2] = useState([]);
  const [playlistData3, setPlaylistData3] = useState([]);
  const [playlistData4, setPlaylistData4] = useState([]);
  const [playlistData5, setPlaylistData5] = useState([]);
  const [playlistData6, setPlaylistData6] = useState([]);
  const [playlistData7, setPlaylistData7] = useState([]);

  const getToken = async () => {
    try {
      const response = await fetch(tokenUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(ClientId + ":" + ClientSecret)}`,
        },
        body: `grant_type=client_credentials`,
      });
      const data = await response.json();
      localStorage.setItem("access_token", data.access_token);
      setAccessToken(data.access_token);
    } catch (error) {
      console.log(error);
    }
  };

  const getPlaylist = async () => {
    try {
      const responses = await Promise.all([
        fetch(`${apiUrl}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
        fetch(`${apiUrl2}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
        fetch(`${apiUrl3}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
        fetch(`${apiUrl4}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
        fetch(`${apiUrl5}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
        fetch(`${apiUrl6}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
        fetch(`${apiUrl7}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }),
      ]);

      const data = await responses[0].json();
      setPlaylistData(data.playlists.items);

      const data2 = await responses[1].json();
      setPlaylistData2(data2.playlists.items);

      const data3 = await responses[2].json();
      console.log(data3.items);
      setPlaylistData3(data3.items);

      const data4 = await responses[3].json();
      setPlaylistData4(data4.playlists.items);

      const data5 = await responses[4].json();
      console.log(data5.playlists.items);
      setPlaylistData5(data5.playlists.items);

      const data6 = await responses[5].json();
      setPlaylistData6(data6.playlists.items);

      const data7 = await responses[6].json();
      console.log(data7.playlists.items);
      setPlaylistData7(data7.playlists.items);


    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getToken();
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (accessToken) {
      getPlaylist();
    }
  }, [accessToken]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              playlistData={playlistData}
              playlistData2={playlistData2}
              playlistData4={playlistData4}
              playlistData7={playlistData7}
            />
          }
        />
        <Route
          path="/like"
          element={
            <Liked
              playlistData6={playlistData6}
              playlistData3={playlistData3}
            />
          }
        />
        <Route
          path="/single/:id"
          element={
            <Single
              playlistData={playlistData}
              playlistData2={playlistData2}
              playlistData5={playlistData5}
              playlistData7={playlistData7}
              playlistData3={playlistData3}
            />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
