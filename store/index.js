export const state = () => ({
    dataset: 'LCM-Seq CS13',
    ligand: null,
    receptor: null,
});

export const mutations = {
    setDataset(state, value) {
        state.dataset = value;
    },
    setLigand(state, value) {
        state.ligand = value;
    },
    setReceptor(state, value) {
        state.receptor = value;
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
    setDataset({ commit }, value) {
        commit('setDataset', value);
    },
    setLigand({ commit }, value) {
        commit('setLigand', value);
    },
    setReceptor({ commit }, value) {
        commit('setReceptor', value);
    },
};
