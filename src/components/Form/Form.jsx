import React from "react";
import "./Form.css";

export const Form = () => {
  return (
    <div className="form__container">
      <h2 className="form__title">Contacs</h2>
      <form action="" className="form">
        <input type="text" placeholder="Name" className="form__input--name" />
        <input type="text" placeholder="Email" className="form__input--email" />
        <textarea
          placeholder="Description"
          className="form__input--description"
        />
        <div className="form__btn">
          <button className="form__btn--send">SEND</button>
        </div>
      </form>
    </div>
  );
};
