import React from "react";
import MoveCard from "./MoveCard";

const MovieList = ({ movie }) => {
  return (
    <div>
      MovieList
      {movie.map((item, index) => {
        <MoveCard item={item} key={index} />;
      })}
    </div>
  );
};

export default MovieList;
