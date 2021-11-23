export const state = () => ({
    activeDataset: 'LCM-Seq CS13',
    activeLigand: null,
    activeReceptor: null,
    activePlot: 'heatmap'
});

export const mutations = {
    setDataset(state, value) {
        state.activeDataset = value;
    },
    setLigand(state, value) {
        state.activeLigand = value;
    },
    setReceptor(state, value) {
        state.activeReceptor = value;
    },
    setPlot(state, value) {
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
    setDataset({ commit }, value) {
        commit('setDataset', value);
    },
    setLigand({ commit }, value) {
        commit('setLigand', value);
    },
    setReceptor({ commit }, value) {
        commit('setReceptor', value);
    },
    setPlot({ commit }, value) {
        commit('setPlot', value);
    },
};
