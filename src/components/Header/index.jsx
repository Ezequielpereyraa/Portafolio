import React from "react";
import "./header.scss";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__lista">
          <li className="header__item">
            <NavLink to="/" className="header__enlace">
              Home
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/sobremi" className="header__enlace">
              Sobre mí
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/portafolio" className="header__enlace">
              Proyectos
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/contacto" className="header__enlace">
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
