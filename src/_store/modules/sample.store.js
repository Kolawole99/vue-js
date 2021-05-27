import ApiRequest from "./_requestType";

let ApiReq = new ApiRequest();
let url = "books/";

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
const state = getDefaultState();

const getters = {};

const actions = {
  async resetState({ commit }) {
    await commit("resetState");
  },

  async postOneSample({ commit }, data) {
    try {
      let request = await ApiReq.postOne(url, data);
      commit("postOneSample", request);
    } catch (error) {
      commit("postOneSample", error.response);
    }
  },

  async postManySamples({ commit }, data) {
    try {
      let request = await ApiReq.postMany(url, data);
      commit("postManySamples", request);
    } catch (error) {
      commit("postManySamples", error.response);
    }
  },

  async getAllSamples({ commit }) {
    try {
      let request = await ApiReq.getAll(url);
      commit("getAllSamples", request);
    } catch (error) {
      commit("getAllSamples", error.response);
    }
  },

  async getOneSample({ commit }, id) {
    try {
      let request = await ApiReq.getOne(url, id);
      commit("getOneSample", request);
    } catch (error) {
      commit("getOneSample", error.response);
    }
  },

  async putOneSample({ commit }, data) {
    try {
      let request = await ApiReq.putOne(url, data);
      commit("putOneSample", request);
    } catch (error) {
      commit("putOneSample", error.response);
    }
  },

  async putManySamples({ commit }, data) {
    try {
      let request = await ApiReq.putMany(url, data);
      commit("putManySamples", request);
    } catch (error) {
      commit("putManySamples", error.response);
    }
  },

  async deleteOneSample({ commit }, id) {
    try {
      let request = await ApiReq.deleteOne(url, id);
      commit("deleteOneSample", request);
    } catch (error) {
      commit("deleteOneSample", error.response);
    }
  },

  async deleteManySamples({ commit }, data) {
    try {
      let request = await ApiReq.deleteMany(url, data);
      commit("deleteManySamples", request);
    } catch (error) {
      commit("deleteManySamples", error.response);
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
  postOneSample(state, response) {
    state.postOne = response;
  },
  postManySamples(state, response) {
    state.postMany = response;
  },
  getAllSamples(state, response) {
    state.getAll = response;
  },
  getOneSample(state, response) {
    state.getOne = response;
  },
  putOneSample(state, response) {
    state.putOne = response;
  },
  putManySamples(state, response) {
    state.putMany = response;
  },
  deleteOneSample(state, response) {
    state.deleteOne = response;
  },
  deleteManySamples(state, response) {
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
