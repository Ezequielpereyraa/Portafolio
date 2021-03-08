import React, { useReducer } from 'react';

import { datosProyectos } from './data';
import ProyectoReducer from './ProyectoReducer';
import ProyectosContext from './ProyectosContext';
import { GET_PROYECTOS } from './Types';

const ProyectoState = (props) => {
  const initialState = {
    proyectosGithub: [],
  };

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(ProyectoReducer, initialState);

  // Funciones para el proyecto;
  const getProyects = async () => {
    try {
      dispatch({
        type: GET_PROYECTOS,
        payload: datosProyectos,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProyectosContext.Provider
      value={{
        proyectosGithub: state.proyectosGithub,
        getProyectsF: getProyects,
      }}
    >
      {props.children}
    </ProyectosContext.Provider>
  );
};
export default ProyectoState;
