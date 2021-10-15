import { GET_PROYECTOS } from './Types';

export default (state, { type, payload }) => {
  switch (type) {
    case GET_PROYECTOS:
      return {
        ...state,
        proyectosGithub: payload
      };
    default:
      return state;
  }
};
