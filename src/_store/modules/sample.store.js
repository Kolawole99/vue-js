import RootStore from "./_root.store";

class Store extends RootStore {}

let SampleStore = new Store();

let state = SampleStore.state;
let getters = SampleStore.getters;
let actions = SampleStore.actions;
let mutations = SampleStore.mutations;

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
