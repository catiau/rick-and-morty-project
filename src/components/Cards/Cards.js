import React from "react";
import "./Cards.css"

const Cards = ({ results }) => {
  let displayCard;
  console.log(results);

  if (results) {
    displayCard = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <div key={id} className="cards">
          <div className="card">
            <img src={image} alt="" className="" />
            <div className="content">
              <h3>{name}</h3>
              <div>
                <p>Last location:{location.name}</p>
              </div>
              <div className="badge">
                <p>Status:{status}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    displayCard = (
      <div>
        <p>No results found</p>
      </div>
    );
  }

  return <>{displayCard}</>;
};

export default Cards;
