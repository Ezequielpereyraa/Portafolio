import React from "react";
import sobremiImg from "../../assets/sobremi.svg";
import "./sobremi.scss";

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
        {/* <h1 className="sobremi__skills">Skills</h1> */}
        {/* <div className="skills">
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
        </div> */}
      </div>
    </section>
  );
};

export default Sobremi;
