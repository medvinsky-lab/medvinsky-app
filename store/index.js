export const state = () => ({
  activeDataset: 'cs13',
  activeLigand: null,
  activeReceptor: null,
  activePlot: 'heatmap',
});

export const mutations = {
  setActiveDataset(state, value) {
    state.activeDataset = value;
  },
  setActiveLigand(state, value) {
    state.activeLigand = value;
  },
  setActiveReceptor(state, value) {
    state.activeReceptor = value;
  },
  setActivePlot(state, value) {
    state.activePlot = value;
  },
};

export const getters = {
  activeDataset: (state) => {
    return state.activeDataset;
  },
  activeLigand: (state) => {
    return state.activeLigand;
  },
  activeReceptor: (state) => {
    return state.activeReceptor;
  },
  activePlot: (state) => {
    return state.activePlot;
  },
};

export const actions = {
  setActiveDataset({ commit }, value) {
    commit('setActiveDataset', value);
  },
  setActiveLigand({ commit }, value) {
    commit('setActiveLigand', value);
  },
  setActiveReceptor({ commit }, value) {
    commit('setActiveReceptor', value);
  },
  setActivePlot({ commit }, value) {
    commit('setActivePlot', value);
  },
};
