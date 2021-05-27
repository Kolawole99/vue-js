/* eslint-disable */
import ApiRequest from "./_requestType";

let ApiReq = new ApiRequest();

class RootStore {
  getDefaultState = () => {
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
  state = this.getDefaultState();

  // Getters for manipulating store state property data before returning it
  getters = {};

  actions = {
    async resetState({ commit }) {
      await commit("resetState");
    },

    async postOne({ commit }, data) {
      try {
        let url = data.url;
        delete data.url;
        let request = await ApiReq.postOne(url, data);
        commit("postOne", request);
      } catch (error) {
        commit("postOne", error.response);
      }
    },

    async postMany({ commit }, data) {
      try {
        let url = data.url;
        delete data.url;
        let request = await ApiReq.postMany(url, data);
        commit("postMany", request);
      } catch (error) {
        commit("postMany", error.response);
      }
    },

    async getAll({ commit }, url) {
      try {
        let request = await ApiReq.getAll(url);
        commit("getAll", request);
      } catch (error) {
        commit("getAll", error.response);
      }
    },

    async getOne({ commit }, url) {
      try {
        let request = await ApiReq.getOne(url);
        commit("getOne", request);
      } catch (error) {
        commit("getOne", error.response);
      }
    },

    async putOne({ commit }, data) {
      try {
        let url = data.url;
        delete data.url;
        let request = await ApiReq.putOne(url, data);
        commit("putOne", request);
      } catch (error) {
        commit("putOne", error.response);
      }
    },

    async putMany({ commit }, data) {
      try {
        let url = data.url;
        delete data.url;
        let request = await ApiReq.putMany(url, data);
        commit("putMany", request);
      } catch (error) {
        commit("putMany", error.response);
      }
    },

    async deleteOne({ commit }, data) {
      try {
        let url = data.url;
        delete data.url;
        let request = await ApiReq.deleteOne(url, data.id);
        commit("deleteOne", request);
      } catch (error) {
        commit("deleteOne", error.response);
      }
    },

    async deleteMany({ commit }, data) {
      try {
        let url = data.url;
        delete data.url;
        let request = await ApiReq.deleteMany(url, data);
        commit("deleteMany", request);
      } catch (error) {
        commit("deleteMany", error.response);
      }
    },

    async modelSearch({ commit }, data) {
      try {
        let url = data.url;
        delete data.url;
        let request = await ApiReq.searchByQuery(url, data.keys, data.keyword);
        commit("modelSearch", request);
      } catch (error) {
        commit("modelSearch", error.response);
      }
    },
  };

  mutations = {
    resetState(state) {
      Object.assign(state, this.getDefaultState());
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
}

export default RootStore;
