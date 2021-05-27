import RootStore from "./_root.store";

let SampleStore = new RootStore();

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
