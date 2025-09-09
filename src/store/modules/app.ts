import { Module } from "vuex";

export interface AppState {
  appName: string;
  isLoading: boolean;
}

const state: AppState = {
  appName: process.env.VUE_APP_APP_NAME || "Rusoft",
  isLoading: true,
};

const appModule: Module<AppState, unknown> = {
  namespaced: true,
  state,
  getters: {
    appName: (s) => s.appName,
    isLoading: (s) => s.isLoading,
  },
  mutations: {
    setAppName(s, name: string) {
      s.appName = name;
    },
    setLoading(s, loading: boolean) {
      s.isLoading = loading;
    },
  },
  actions: {
    async initializePreloader({ commit }) {
      // Esta acción se ejecutará cuando el preloader termine de cargar
      // El preloader se encargará de llamar a setLoading(false) cuando termine
    },
    setLoading({ commit }, loading: boolean) {
      commit('setLoading', loading);
    },
  },
};

export default appModule;
