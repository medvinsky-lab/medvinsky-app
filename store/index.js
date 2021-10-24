export const state = () => ({
    dataset: 'cs13',
    receptor: 'receptor',
    ligand: 'ligand',
});

export const mutations = {
    setDataset(state, text) {
        state.dataset = text;
    },
    setLignad(state, text) {
        state.receptor = text;
    },
    setReceptor(state, text) {
        state.receptor = text;
    },
};

export const getters = {
    activeDataset: (state) => {
        return state.dataset;
    },
};

export const actions = {
    setDataset({ commit }, text) {
        commit('setDataset', text);
    },
    setLignad({ commit }, text) {
        commit('setLignad', text);
    },
    setReceptor({ commit }, text) {
        commit('setReceptor', text);
    },
};
