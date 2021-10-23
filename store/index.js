export const state = () => ({
    dataset: 'cs13',
    receptor: 'receptor',
    ligand: 'ligand',
});

export const mutations = {
    setDataset(state, text) {
        state.dataset = text;
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
};
