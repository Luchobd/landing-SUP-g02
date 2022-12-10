import React from "react";
import "./Header.css";
import foto from "../../img/yo.jpeg";

export const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="header__nav">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
        </nav>
        <div className="header__logo">
          <div className="header__logo--container">
            <h1 className="header__title">Luis Blanco</h1>
            <h3 className="header__subtitle">FullStack Web Developer</h3>
          </div>
        </div>
      </header>
      <div className="about">
        <picture className="about__img">
          <img src={foto} alt="mi foto" width={150} />
        </picture>
        <h3 className="about__title">About me</h3>
        <p className="about__paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
          recusandae natus iure nobis saepe eos corporis, accusantium quos id
          doloribus? Nulla nobis sunt quod officia rem, earum dignissimos
          ratione incidunt? Eligendi minima quos expedita ex cumque nemo magni
          distinctio eaque rem ullam! Culpa voluptatum quod blanditiis labore
          aperiam possimus provident minus doloribus architecto distinctio
          debitis molestias at excepturi tempora, magnam, voluptatibus soluta?
          Aspernatur deleniti vitae quae quidem quas dolores? Ipsum commodi ut
          hic saepe magnam laudantium velit! Excepturi enim saepe molestias
          dolor, recusandae, tempore itaque praesentium omnis est non qui, natus
          quae architecto. Cupiditate ipsam est tenetur facere distinctio
          consectetur!
        </p>
      </div>
    </div>
  );
};
