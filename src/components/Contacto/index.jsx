import './contacto.scss';

import React from 'react';

import email from '../../assets/email-icon.svg';
import linkedin from '../../assets/linkedin-icon.svg';
import twitter from '../../assets/twitter-icon.svg';

const Contacto = () => {
  return (
    <section className="contacto">
      <div className="contacto__container">
        <h3 className="contacto__titulo">Redes Sociales</h3>
        <div className="contacto__redes">
          <a
            href="mailto:gezequielpereyra@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icons"
              src={email}
              alt="gezequielpereyra@hotmail.com"
            />
          </a>
          <a
            href="https://twitter.com/EzhePereyra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icons"
              src={twitter}
              alt="https://twitter.com/EzhePereyra"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/ezequielpereyra/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="icons"
              src={linkedin}
              alt="https://www.linkedin.com/in/ezequielpereyra/"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
