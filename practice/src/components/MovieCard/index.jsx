import React from "react";
import { useSelector, useDispatch } from "react-redux";

import classe from "./moviecard.module.css";
const MovieCard = () => {
  const movieList = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  return (
    <div className={classe.container}>
      {movieList.map((movie) => {
        return (
          <>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img src={movie.cover} />
              <p> {movie.name} </p>
              <p> {movie.author} </p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default MovieCard;
