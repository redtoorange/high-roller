const attacker = {
    namespaced: true,
    state: {
        models: null,
        BS: null,
        hitSpecialRules: false,
        hitRules: {
            mod: null,
            reRollOnes: false,
            reRollMisses: false,
            exploding: false,
            explodesOn: null,
        },

    },
    mutations: {
        setAttackerModels(state, payload) {
            state.models = payload;
        },
        setBS(state, payload) {
            state.BS = payload;
        },
        setHasHitRules(state, payload) {
            state.hitSpecialRules = payload;
        },

        setMod: (state, payload) => state.hitRules.mod = payload,
        setReRollOnes: (state, payload) => state.hitRules.reRollOnes = payload,
        setReRollMisses: (state, payload) => state.hitRules.reRollMisses = payload,
        setExploding: (state, payload) => state.hitRules.exploding = payload,
        setExplodesOn: (state, payload) => state.hitRules.explodesOn = payload,

    },
    getters: {
        hitSpecialRules: state => state.hitSpecialRules,
        BS: state => state.BS,
        models: state => state.models,
    }
};

export default attacker;
