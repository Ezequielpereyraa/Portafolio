import './proyectos.scss';

import React, { useContext, useEffect } from 'react';

import almazen from '../../assets/Almazen.png';
import Github from '../../assets/github-icon.svg';
import petBuddies from '../../assets/Pet-Buddies.jpg';
import ProyectosContext from '../../context/ProyectosContext';
import Repositorio from './Repositorios';

const Portafolio = () => {
  document.title = "GEP | Proyectos 💼";

  const proyectContext = useContext(ProyectosContext);

  const { proyectosGithub, getProyectsF } = proyectContext;

  useEffect(() => {
    getProyectsF();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="portafolio" id="portafolio">
      <h3>Mis Proyectos</h3>
      <div className="destacados">
        <h5 className="destacados__titulo">
          Proyectos Destacados
          <span role="img" aria-label="start">
            ⭐
          </span>
        </h5>
        <div className="destacados__container">
          <div className="destacados__box">
            <img
              className="destacados__box--img"
              src={petBuddies}
              alt="PetBuddies"
            />
            <div className="destacados__box--description">
              <h1>PetBuddies</h1>
              <p>
                App mobile con React Native, Redux, Typescript,NodeJs, Express,
                MongoDB y Firebase
              </p>
              <a
                className="destacados__box--link"
                href="https://github.com/Ezequielpereyraa/PetBuddies"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="destacados__box--git"
                  src={Github}
                  alt="Github"
                />
              </a>
            </div>
          </div>

          <div className="destacados__box">
            <img className="destacados__box--img" src={almazen} alt="AlmaZen" />
            <div className="destacados__box--description">
              <h1>AlmaZen</h1>
              <p>
                E-commerce Web con React, Redux, Sass, NodeJs, Express,
                Sequelize, PostgresSQL, Passport
              </p>
              <a
                className="destacados__box--link"
                href="https://github.com/Ezequielpereyraa/ecommerce-ft07-g12-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="destacados__box--git"
                  src={Github}
                  alt="Github"
                />
              </a>
              <a
                className="card__enlace"
                href="https://almazenhenry-51bf6.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Demo →
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="portafolio-container">
        {proyectosGithub &&
          proyectosGithub.map((proyecto, index) => (
            <Repositorio proyecto={proyecto} key={index} />
          ))}
      </div>

      <p className="portafolio__vermas">
        Si quieres ver más proyectos visita mi{" "}
        <a
          href="https://github.com/Ezequielpereyraa"
          target="_blank"
          rel="noopener noreferrer"
        >
          perfil de Github
        </a>
      </p>
    </section>
  );
};

export default Portafolio;
