export const state = () => ({
    dataset: 'LCM-Seq CS13',
    receptor: null,
    ligand: null,
});

export const mutations = {
    setDataset(state, text) {
        state.dataset = text;
    },
    setLigand(state, text) {
        state.ligand = text;
    },
    setReceptor(state, text) {
        state.receptor = text;
    },
};

export const getters = {
    activeDataset: (state) => {
        return state.dataset;
    },
    activeLigand: (state) => {
        return state.ligand;
    },
    activeReceptor: (state) => {
        return state.receptor;
    },
};

export const actions = {
    setDataset({ commit }, text) {
        commit('setDataset', text);
    },
    setLigand({ commit }, text) {
        commit('setLigand', text);
    },
    setReceptor({ commit }, text) {
        commit('setReceptor', text);
    },
};