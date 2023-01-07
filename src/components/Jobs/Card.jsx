import React from "react";
import "./Card.css";

function Card({ name, image, skill }) {
  return (
    <div className="card__container">
      <div className="card__content">
        <picture className="card__img">
          <img src={image} alt={name} />
        </picture>
        <h2 className="card__name">{name}</h2>
        <h4 className="card__skill">{skill}</h4>
      </div>
    </div>
  );
}

export { Card };
