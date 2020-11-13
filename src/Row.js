import React, { useState, useEffect } from "react";
import axios from "./Axios";
import "./row.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
const baseURL = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(movie?.name || " ").then((url) => {
        const myUrl = new URLSearchParams(new URL(url).search);
        settrailerUrl(myUrl.get("v"));
      });
    }
  };

  return (
    <>
      <div className="container-fluid rowHeader">
        <div className="row">
          <div className="col-12">
            <p className="text-left text-light">{title}</p>
            <div className="movie_posters ml-1">
              {movies.map((movie) => (
                <img
                  key={movie.id}
                  onClick={() => handleClick(movie)}
                  src={`${baseURL}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt="nameb"
                  className={`${isLargeRow ? "newStyle" : "movieimg"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </>
  );
};

export default Row;
