import React from "react";

import "./sobremi.scss";

const Sobremi = () => {
  document.title = "GEP | Sobre Mi 👨🏽‍🦱";
  return (
    <section className="sobremi" id="sobremi">
      <h3>Sobre mi</h3>
      <div className="sobremi__container">
        <p className="sobremi__descripcion">
          ‎Apasionado por la tecnología. En el proceso de convertirme en Full
          Stack Developer. <br /> Soy comprometido, responsable, me gusta
          trabajar en equipo y tengo facilidad de adaptación.
          <br /> Abierto a reubicarme para descubrir nuevas oportunidades,
          experiencias y personas.‎ <br />
          En este momento también me encuentro realizando un proyecto en
          TypeScript con ReactNative y Mongo.
          {/* Actualmente me estoy iniciando en<b> Desarrollo Web </b>y me gustaría
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
          Manejo muy bien el UX/UI, sé modelar de manera prolija mockups. */}
        </p>
        <h1 className="sobremi__skills">Skills</h1>
        <div className="skills">
          <div className="skills__box">
            <h5>HTML</h5>
            <h5>CSS</h5>
            <h5>SASS</h5>
            <h5>BOOTSTRAP</h5>
            <h5>JavaScript</h5>
            <h5>React / Redux</h5>
            <h5>NodeJS</h5>
            <h5>ExpressJS</h5>
            <h5>MongoDB</h5>
            <h5>PostgreSQL</h5>
            <h5>Sequelize</h5>
            <h5>Git</h5>
            <h5>SCRUM</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobremi;
