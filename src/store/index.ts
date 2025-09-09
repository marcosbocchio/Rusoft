import { createStore } from "vuex";
import preloaderModule from "./modules/preloader";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    app: preloaderModule
  },
});
