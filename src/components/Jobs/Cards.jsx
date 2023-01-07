import React from "react";
import { Card } from "./Card";
import { database } from "../../data/data";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards__container">
      <h2 className="cards__title">
        <div className="cards__grid">
          {database &&
            database.map((e, index) => {
              return (
                <div key={index}>
                  <Card image={e.image} name={e.name} skill={e.skill} />
                </div>
              );
            })}
        </div>
      </h2>
    </div>
  );
};

export { Cards };
