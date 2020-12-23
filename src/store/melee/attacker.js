const attacker = {
    namespaced: true,
    state: {
        models: null,
        WS: null,
        strength: null,
        attacks: null,
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
        setWS(state, payload) {
            state.WS = payload;
        },
        setHasHitRules(state, payload) {
            state.hitSpecialRules = payload;
        },
        setAttacks(state, payload) {
            state.attacks = payload;
        },

        setStrength(state, payload) {
            state.strength = payload;
        },

        setMod: (state, payload) => state.hitRules.mod = payload,
        setReRollOnes: (state, payload) => state.hitRules.reRollOnes = payload,
        setReRollMisses: (state, payload) => state.hitRules.reRollMisses = payload,
        setExploding: (state, payload) => state.hitRules.exploding = payload,
        setExplodesOn: (state, payload) => state.hitRules.explodesOn = payload,

    },
    getters: {
        hitSpecialRules: state => state.hitSpecialRules,

        models: state => state.models,
        WS: state => state.WS,
        strength: state => state.strength,
        attacks: state => state.attacks,
    }
};

export default attacker;
