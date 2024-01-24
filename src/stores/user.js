function obtenerLocalStorage() {
  return localStorage.getItem(import.meta.env.VITE_APP_NAME);
}
const datosLocalStorage = JSON.parse(obtenerLocalStorage());
export default {
  state: () => ({
  }),

  getters: {
  },

  actions: {
  },
};
