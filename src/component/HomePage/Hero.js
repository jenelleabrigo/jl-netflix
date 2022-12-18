import React, { useEffect, useState } from "react";
import "./Hero.css";
import axios from "./axios";
import requests from "./requests";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Hero() {
  const [featured, setFeatured] = useState([]);
  const [featuredUrl, setFeaturedUrl] = useState([]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const featuredList = request.data.results;
      var selectRandom = Math.floor(Math.random() * featuredList.length - 1);
      setFeatured(featuredList[selectRandom]);
    }
    fetchData();
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      //https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handlePlay = (featured) => {
    if (featuredUrl) {
      setFeaturedUrl("");
    } else {
      movieTrailer(featured?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setFeaturedUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div>
      <header
        className="hero"
        style={{
          background: `url(${base_url}${featured?.poster_path}) no-repeat center center/cover`,
        }}
      >
        <div className="hero__content">
          <h2 className="hero__title">{featured?.title || featured?.name || featured?.original_name}</h2>
          <div className="hero__buttons">
            <button className="hero__button" onClick={() => handlePlay(featured)}>
              Play Trailer
            </button>
            <button className="hero__button">My List</button>
          </div>
          <p className="hero__overview">{truncate(featured.overview, 150)}</p>
        </div>
      </header>
      {featuredUrl ? "" : <YouTube videoId={featuredUrl} opts={opts}></YouTube>}
    </div>
  );
}

export default Hero;
