import React from 'react';
import './pageNotFound.scss';
import image from '../../assets/error-404.svg';

const PageNotFound = () => {
  return (
    <div className="container2">
      <div className="container__description">
        <div>
          <h3>Oops..</h3>
          <p>Por favor checkea la URL</p>
        </div>
        <img src={image} alt="error404" />
      </div>
    </div>
  );
};

export default PageNotFound;
