import React from "react";
import Typical from "react-typical";
import "./wrapper.scss";

const Wrapper = () => {
  document.title = "Ezequiel Pereyra 👨🏼‍💻 | Frontend Developer Jr";
  return (
    <>
      <div className="wrapper">
        <div className="wrapper__titulo-box">
          <h1 className="wrapper__titulo">Ezequiel Pereyra</h1>
          <h2 className="wrapper__subtitulo">
            <Typical
              steps={[
                "Hola! 👋🏽 ",
                1000,
                "Soy Frontend Developer Junior  ",
                3000,
                "📣 Bienvenidos a mi Portafolio 💼",
                2000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </h2>
        </div>
      </div>
    </>
  );
};

export default Wrapper;
