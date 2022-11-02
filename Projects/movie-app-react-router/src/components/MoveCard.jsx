import React from "react";

const MoveCard = ({ item }) => {
  console.log("item", item);
  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.poster_path} />
    </div>
  );
};

export default MoveCard;
