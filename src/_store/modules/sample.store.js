import axios from "axios";
import router from "../../_router/index";

const getDefaultState = () => {
  return {
    registerSuccess: "",
    userDetails: [],
    registerError: "",
  };
};
const state = getDefaultState();

const getters = {
  isAuthenticated: (state) => !!state.token,
};

const actions = {
  resetState({ commit }) {
    commit("resetState");
  },
  REGISTER({ commit }, authData) {
    const requestOptions = {
      email: authData.email,
      first_name: authData.firstName,
      last_name: authData.lastName,
      phone: authData.phone,
      username: authData.username,
      password: authData.password1,
      re_password: authData.password2,
    };
    return new Promise((resolve, reject) => {
      axios
        .post("users/", requestOptions)
        .then((response) => {
          commit("REGISTER_SUCCESS", JSON.parse(JSON.stringify(response)));
          commit("REGISTER_ERROR", state.empty);
          router.push("/login");
          resolve(response);
        })
        .catch((err) => {
          commit("REGISTER_ERROR", JSON.parse(JSON.stringify(err)));
          commit("REGISTER_SUCCESS", state.empty);
          reject(err);
        });
    });
  },
};

const mutations = {
  resetState(state) {
    Object.assign(state, getDefaultState());
  },
  REGISTER_SUCCESS(state, response) {
    state.registerSuccess = response;
  },
  REGISTER_ERROR(state, error) {
    state.registerError = error;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
