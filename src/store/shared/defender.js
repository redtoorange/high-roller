const defender = {
    namespaced: true,
    state: {
        toughness: null,
        armorSave: null,
        hasInvulnerable: false,
        invulnerableSave: null,
        hasFeelNoPain: false,
        feelNoPainSave: null,
    },
    mutations: {
        setToughness: (state, payload) => state.toughness = payload,
        setArmorSave: (state, payload) => state.armorSave = payload,
        setHasInvulnerable: (state, payload) => state.hasInvulnerable = payload,
        setInvulnerableSave: (state, payload) => state.invulnerableSave = payload,
        setHasFeelNoPain: (state, payload) => state.hasFeelNoPain = payload,
        setFeelNoPainSave: (state, payload) => state.feelNoPainSave = payload,
    },
    actions: {},
    getters: {
        hasInvulnerable: state => state.hasInvulnerable,
        hasFeelNoPain: state => state.hasFeelNoPain,
        toughness: state => state.toughness,
    },
};

export default defender;
