import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
        onClick={() => setIsShow(!isShow)}
      />

      <label className="navigation__button" htmlFor="navi-toggle">
        <span className="navigation__icon"></span>
      </label>

      <div
        className="navigation__background"
        style={{ transform: isShow ? "scale(100)" : "scale(0)" }}
      ></div>

      <nav
        className="navigation__nav"
        style={{ width: isShow ? "100%" : "0", opacity: isShow ? 1 : 0 }}
        onClick={() => setIsShow(!isShow)}
      >
        <ul className="navigation__list">
          <li className="navigation__item">
            <li className="navigation__item" onClick={() => setIsShow(!isShow)}>
              <NavLink to="/" className="navigation__link">
                Home
              </NavLink>
            </li>
            <li className="navigation__item" onClick={() => setIsShow(!isShow)}>
              <NavLink to="/sobremi" className="navigation__link">
                Sobre mí
              </NavLink>
            </li>
            <li className="navigation__item" onClick={() => setIsShow(!isShow)}>
              <NavLink to="/portafolio" className="navigation__link">
                Proyectos
              </NavLink>
            </li>
            <li className="navigation__item" onClick={() => setIsShow(!isShow)}>
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
