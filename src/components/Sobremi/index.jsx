import './sobremi.scss';

import React from 'react';

import sobremiImg from '../../assets/sobremi.svg';

const Sobremi = () => {
  document.title = "GEP | Sobre Mi 👨🏽‍🦱";
  return (
    <section className="sobremi" id="sobremi">
      <h3>Sobre mi</h3>
      <div className="sobremi__container">
        <img className="sobremi__img" src={sobremiImg} alt="" />
        <div>
          <p className="sobremi__descripcion">
            ‎<span>Full Stack Web Developer</span> egresado de Henry, un curso
            intensivo en línea con +700 horas de programación basada en la
            <span> práctica y proyectos reales.</span>
          </p>
          <p className="sobremi__descripcion">
            Las tecnologías con las que he trabajado:{" "}
            <span>
              HTML/CSS/SASS/Styled Componets, Javascript, NodeJS/ExpressJS,
              ReactJS, Redux, PostgreSQL, Sequelize, Passport y Firebase.
            </span>{" "}
            También he finalizado recientemente una aplicaciones móviles usando
            <span> TypeScript con React Native, MongoDB y Mongoose. ‎</span>
          </p>
          <p className="sobremi__descripcion">
            Tengo experiencia usando bibliotecas como{" "}
            <span>Bootstrap, Material UI, rsuite.</span> Tambien estoy
            familiarizado con la Metodologia <span>BEM y Agiles</span> (Scrum).
            ‎ Me apasionan las nuevas tecnologías y el desarrollo de software,
            soy comprometido, responsable, me gusta trabajar en equipo, tengo
            facilidad de adaptación y me encantan los desafíos! Abierto a
            reubicarme para descubrir nuevas oportunidades, experiencias y
            personas.‎
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobremi;
