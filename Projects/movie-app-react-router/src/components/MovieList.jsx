import React from "react";
import MoveCard from "./MoveCard";

const MovieList = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      {movie?.map((item, index) => {
        return <MoveCard item={item} key={index} />;
      })}
    </div>
  );
};

export default MovieList;
