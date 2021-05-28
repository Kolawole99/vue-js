import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

import Sample from "./modules/sample.store";
import Exception from "./modules/exception.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Sample,
    Exception,
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});
