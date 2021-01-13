import React from "react";

import "./sobremi.scss";

import html from "../../assets/html-icon.svg";
import css from "../../assets/css-icon.svg";
import sass from "../../assets/sass-icon.svg";
import bootstrap from "../../assets/bootstrap-icon.svg";
import javascript from "../../assets/javascript-icon.svg";
import react from "../../assets/react-icon.svg";

const Sobremi = () => {
  document.title = "GEP | Sobre Mi 👨🏽‍🦱";
  return (
    <section className="sobremi" id="sobremi">
      <h3>Sobre mi</h3>
      <div className="sobremi__container">
        <p className="sobremi__descripcion">
          Me considero una persona <b>comprometida, responsable</b>, con muchas
          ganas de aprender y crecer profesionalmente. Me gusta trabajar en
          equipo y tengo facilidad de adaptación. <br /> <br />
          Actualmente me estoy iniciando en<b> Desarrollo Web </b>y me gustaría
          continuar adquiriendo experiencia para complementar mis conocimientos
          y así obtener más herramientas que me ayuden a desenvolverme de la
          mejor manera en el mundo de la programación. <br /> <br />
          Soy <b>autodidacta</b> y gracias a la curiosidad que he sentido
          siempre por crear cosas y a mi afán de superación constante no paré de
          aprender cosas nuevas y de mejorar dia a dia, hoy soy un apasionado
          del desarrollo web y me especializo en la parte de frontend. <br />
          Soy capas de utilizar las herramientas que tengo a mi disposición y
          soy analítico en lo que hago. Domino varias tecnologías, diversos
          frames y librerías como así también manejo líneas de comando
          (terminal), sistema de gestion de paquetes como <b>NPM</b>,<b>YARN</b>
          , como tambien realizar <b>deploys</b> en host como <b>Netlify</b>,{" "}
          <b>Github Pages</b>. <br />
          Manejo muy bien el UX/UI, sé modelar de manera prolija mockups.
        </p>
        <h1 className="sobremi__skills">Skills</h1>
        <div className="skills">
          <div className="skills__box">
            <h5>HTML</h5>
            <img className="skills__img" src={html} alt="Html" />
          </div>
          <div className="skills__box">
            <h5>CSS</h5>
            <img className="skills__img" src={css} alt="Css" />
          </div>
          <div className="skills__box">
            <h5>SASS</h5>
            <img className="skills__img" src={sass} alt="Sass" />
          </div>
          <div className="skills__box">
            <h5>BOOTSTRAP</h5>
            <img className="skills__img" src={bootstrap} alt="Bootstrap" />
          </div>
          <div className="skills__box">
            <h5>JAVASCRIPT</h5>
            <img className="skills__img" src={javascript} alt="Javascript" />
          </div>
          <div className="skills__box">
            <h5>REACT</h5>
            <img className="skills__img" src={react} alt="React" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobremi;
