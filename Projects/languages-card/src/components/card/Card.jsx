import React from "react";
import { languages } from "../../helpers/data";
import Item from "../item/Item";
import "./Card.css";

const Card = () => {
  return (
    <div className="cards-area-container">
      <div className="bars"></div>
      <h1 className="languages-title">Languages</h1>
      <div className="cards-container">
        {languages.map((item, index) => {
          //   return <h4>{item.name}</h4>;
          return <Item {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Card;
