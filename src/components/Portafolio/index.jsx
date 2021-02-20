import React, { useContext, useEffect } from "react";
import "./proyectos.scss";
import Repositorio from "./Repositorios";
import almazen from "../../assets/Almazen.png";
import petBuddies from "../../assets/Pet-Buddies.jpg";
import ProyectosContext from "../../context/ProyectosContext";

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
                Este es mi proyecto final en Henry. Una App mobile con React
                Native, Redux, Typescript,NodeJs, Express, MongoDB y Firebase
              </p>
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
                href="https://almazenhenry-51bf6.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="portafolio-container">
        {proyectosGithub &&
          proyectosGithub.map((proyecto) => (
            <Repositorio proyecto={proyecto} key={proyecto.node_id} />
          ))}
      </div>
    </section>
  );
};

export default Portafolio;
