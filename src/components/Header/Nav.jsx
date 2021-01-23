import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label className="navigation__button" htmlFor="navi-toggle">
        <span className="navigation__icon"></span>
      </label>

      <div className="navigation__background"></div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <li className="navigation__item">
              <NavLink to="/" className="navigation__link">
                Home
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/sobremi" className="navigation__link">
                Sobre mí
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/portafolio" className="navigation__link">
                Proyectos
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink to="/contacto" className="navigation__link">
                Contacto
              </NavLink>
            </li>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
