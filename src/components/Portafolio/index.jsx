import './proyectos.scss';

import React, { useContext, useEffect } from 'react';

import Github from '../../assets/github-icon.svg';
import Almazen from '../../assets/Pet-Buddies.jpg';
import ProyectosContext from '../../context/ProyectosContext';
import Repositorio from './Repositorios';
import { data } from './data.js';

const Portafolio = () => {
  document.title = 'GEP | Proyectos 💼';
  console.log({ data });
  const proyectContext = useContext(ProyectosContext);

  const { proyectosGithub, getProyectsF } = proyectContext;
  console.log({ Almazen });
  useEffect(() => {
    getProyectsF();
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
          {data.map(({ title, img, description, linkCoding, linkDemo }) => (
            <div className="destacados__box" key={title}>
              <img className="destacados__box--img" src={img} alt={title} />
              <div className="destacados__box--description">
                <h1>{title}</h1>
                <p>{description}</p>
                <a
                  className="destacados__box--link"
                  href={linkCoding}
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    className="destacados__box--git"
                    src={Github}
                    alt="Github"
                  />
                </a>
                {linkDemo && (
                  <a
                    className="card__enlace"
                    href={linkDemo}
                    target="_blank"
                    rel="noopener noreferrer">
                    Ver Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="portafolio-container">
        {proyectosGithub &&
          proyectosGithub.map((proyecto, index) => (
            <Repositorio proyecto={proyecto} key={index} />
          ))}
      </div>

      <p className="portafolio__vermas">
        Si quieres ver más proyectos visita mi
        <a
          href="https://github.com/Ezequielpereyraa"
          target="_blank"
          rel="noopener noreferrer">
          {' '}
          perfil de Github
        </a>
      </p>
    </section>
  );
};

export default Portafolio;
