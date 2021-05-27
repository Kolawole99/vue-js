import ApiRequest from "./_requestType";

let ApiReq = new ApiRequest();
let url = "client/";

// State for returning all store state property data.
const getDefaultState = () => {
  return {
    postOne: [],
    postMany: [],
    getAll: [],
    getOne: [],
    putOne: [],
    putMany: [],
    deleteOne: [],
    deleteMany: [],
    searchByQuery: [],
  };
};

// State for returning all store state property data.
const state = getDefaultState();

// Getters for manipulating store state property data before returning it
const getters = {};

const actions = {
  async resetState({ commit }) {
    await commit("resetState");
  },

  async postOne({ commit }, data) {
    try {
      let request = await ApiReq.postOne(url, data);
      commit("postOne", request);
    } catch (error) {
      commit("postOne", error.response);
    }
  },

  async postMany({ commit }, data) {
    try {
      let request = await ApiReq.postMany(url, data);
      commit("postMany", request);
    } catch (error) {
      commit("postMany", error.response);
    }
  },

  async getAll({ commit }) {
    try {
      let request = await ApiReq.getAll(url);
      commit("getAll", request);
    } catch (error) {
      commit("getAll", error.response);
    }
  },

  async getOne({ commit }, id) {
    try {
      let request = await ApiReq.getOne(url, id);
      commit("getOne", request);
    } catch (error) {
      commit("getOne", error.response);
    }
  },

  async putOne({ commit }, data) {
    try {
      let request = await ApiReq.putOne(url, data);
      commit("putOne", request);
    } catch (error) {
      commit("putOne", error.response);
    }
  },

  async putMany({ commit }, data) {
    try {
      let request = await ApiReq.putMany(url, data);
      commit("putMany", request);
    } catch (error) {
      commit("putMany", error.response);
    }
  },

  async deleteOne({ commit }, id) {
    try {
      let request = await ApiReq.deleteOne(url, id);
      commit("deleteOne", request);
    } catch (error) {
      commit("deleteOne", error.response);
    }
  },

  async deleteMany({ commit }, data) {
    try {
      let request = await ApiReq.deleteMany(url, data);
      commit("deleteMany", request);
    } catch (error) {
      commit("deleteMany", error.response);
    }
  },

  async modelSearch({ commit }, data) {
    try {
      let request = await ApiReq.searchByQuery(url, data.keys, data.keyword);
      commit("modelSearch", request);
    } catch (error) {
      commit("modelSearch", error.response);
    }
  },
};

const mutations = {
  resetState(state) {
    Object.assign(state, getDefaultState());
  },
  postOne(state, response) {
    state.postOne = response;
  },
  postMany(state, response) {
    state.postMany = response;
  },
  getAll(state, response) {
    state.getAll = response;
  },
  getOne(state, response) {
    state.getOne = response;
  },
  putOne(state, response) {
    state.putOne = response;
  },
  putMany(state, response) {
    state.putMany = response;
  },
  deleteOne(state, response) {
    state.deleteOne = response;
  },
  deleteMany(state, response) {
    state.deleteMany = response;
  },
  modelSearch(state, response) {
    state.searchByQuery = response;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
