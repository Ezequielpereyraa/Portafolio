import './sobremi.scss';

import React from 'react';

import sobremiImg from '../../assets/sobremi.svg';

const Sobremi = () => {
  document.title = 'GEP | Sobre Mi 👨🏽‍🦱';
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
            Las tecnologías con las que he trabajado:{' '}
            <span>
              HTML/CSS/SASS/Styled Componets, Javascript, NodeJS/ExpressJS,
              ReactJS, Redux, PostgreSQL, Sequelize, Passport y Firebase.
            </span>{' '}
            También he finalizado recientemente una aplicaciones móviles usando
            <span> TypeScript con React Native, MongoDB y Mongoose. ‎</span>
          </p>
          <p className="sobremi__descripcion">
            Tengo experiencia usando bibliotecas como{' '}
            <span>Bootstrap, Material UI, rsuite.</span> Tambien estoy
            familiarizado con la Metodologia <span>BEM y Agiles</span> (Scrum).
            ‎ Me apasionan las nuevas tecnologías y el desarrollo de software,
            soy comprometido, responsable, me gusta trabajar en equipo, tengo
            facilidad de adaptación y me encantan los desafíos! Abierto a
            reubicarme para descubrir nuevas oportunidades, experiencias y
            personas.‎
          </p>
          <p className="sobremi__descripcion sobremi__descripcion--fz">
            Al momento en el que empecé a indagar en la programación, comence a
            ser autodidacta. Me descubrí a mi mismo comprometido todos los días
            con mis estudios, a querer crecer y perfeccionarme todos los días un
            poco más, este proceso me llevó a conocerme a mi mismo, conocer mis
            tiempo de aprendizaje, conocer distintos métodos para estudiar y
            encontrar cuál se adapta mejor a mi forma de ser y también aprendí a
            ordenar mi rutina diaria para poder abarcar todo lo que yo quería en
            cada día. <br /> Dentro de todo lo que conocí entendí que mi parte
            favorita es el Frontend y mi fuerte es el CSS. <br /> Sigo en el
            proceso de crecer y ser mejor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobremi;
