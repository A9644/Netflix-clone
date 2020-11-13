import React, { useState, useEffect } from "react";
import "./row.css";
import axios from "./Axios";
const Banner = ({ title, fetchURL }) => {
  const [movie, setmovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, [fetchURL]);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <>
      <header
        className="masthead"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-left text-light">
              <h1 className="font-weight-light">
                {movie?.title || movie?.name || movie?.original_name}
              </h1>
              <div className="content-button">
                <button className="btn banner-button ">PlayMe</button>
                <button className="btn  banner-button ml-2">Mylist</button>
              </div>

              <p className="text-left text-justify">
                {truncate(movie?.overview, 120)}
              </p>
            </div>
          </div>
        </div>

        <div className="bottom-fade" />
      </header>
    </>
  );
};

export default Banner;
