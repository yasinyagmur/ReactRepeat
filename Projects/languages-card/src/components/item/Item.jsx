import React from "react";
import { useState } from "react";
import "./Item.css";

const Item = (item) => {
  const [showLogo, setShowLogo] = useState(true);

  const { name, img, options } = item;
  //   console.log(item);

  const handleClick = () => {
    setShowLogo(!showLogo);
    setTimeout(showTıme, 3000);
  };
  const showTıme = () => {
    setShowLogo(true);
  };

  return (
    <div className="card" onClick={handleClick}>
      {showLogo ? (
        <div>
          <img className="card-logo" src={img} alt={name} />
          <h3 className="card-title">{name}</h3>
        </div>
      ) : (
        <ul className="list">
          {options.map((e, index) => {
            return <li key={index}>{e}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Item;
