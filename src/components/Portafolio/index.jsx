import React, { useState, useEffect } from 'react';
import './proyectos.scss';
import Repositorio from './Repositorios';
import destacado1 from '../../assets/destacado1.png';
import destacado2 from '../../assets/destacado2.png';
import destacado3 from '../../assets/destacado3.png';
import destacado4 from '../../assets/destacado4.png';

const Portafolio = () => {
  document.title = 'GEP | Proyectos 💼';
  const [proyectos, setProyectos] = useState([]);
  const url = `https://api.github.com/users/Ezequielpereyraa/repos`;

  useEffect(() => {
    const consultaApi = async () => {
      const proyectosUrl = await fetch(url);
      const datosProyectos = await proyectosUrl.json();
      setProyectos(datosProyectos);
    };
    consultaApi();
  }, [url]);

  return (
    <section className='portafolio' id='portafolio'>
      <h3>Mis Proyectos</h3>
      <div className='destacados'>
        <h5 className='destacados__titulo'>
          Proyectos Destacados
          <span role='img' aria-label='start'>
            ⭐
          </span>
        </h5>
        <div className='destacados__container'>
          <a
            className='destacados__enlaces'
            target='_blank'
            rel='noopener noreferrer'
            href='https://ep-natours.netlify.app/'>
            <img src={destacado1} alt='Proyecto1' />
          </a>
          <a
            className='destacados__enlaces'
            target='_blank'
            rel='noopener noreferrer'
            href='https://ep-buscadorimagenes.netlify.app/'>
            <img src={destacado2} alt='Proyecto2' />
          </a>
          <a
            className='destacados__enlaces'
            target='_blank'
            rel='noopener noreferrer'
            href='https://ep-cotizadorcriptomonedas.netlify.app/'>
            <img src={destacado3} alt='Proyecto3' />
          </a>
          <a
            className='destacados__enlaces'
            target='_blank'
            rel='noopener noreferrer'
            href='https://ep-marvelcomicschallenge.netlify.app/'>
            <img src={destacado4} alt='Proyecto4' />
          </a>
        </div>
      </div>
      <div className='portafolio-container'>
        {proyectos.map((proyecto) => (
          <Repositorio proyecto={proyecto} key={proyecto.id} />
        ))}
      </div>
    </section>
  );
};

export default Portafolio;