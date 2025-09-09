import { Module } from "vuex";

export interface AppState {
  appName: string;
}

const state: AppState = {
  appName: process.env.VUE_APP_APP_NAME || "Rusoft",
};

const appModule: Module<AppState, unknown> = {
  namespaced: true,
  state,
  getters: {
    appName: (s) => s.appName,
  },
  mutations: {
    setAppName(s, name: string) {
      s.appName = name;
    },
  },
  actions: {},
};

export default appModule;
