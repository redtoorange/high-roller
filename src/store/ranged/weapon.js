const weapon = {
    namespaced: true,
    state: {
        attacks: null,
        strength: null,
        armorPen: null,
        damage: null,
        woundSpecialRules: false,
        woundRules: {
            mod: null,
            reRollOnes: false,
            reRollMisses: false,
            rending: false,
            rendRules: {
                strength: null,
                armorPen: null
            },
        },
    },
    mutations: {
        setAttacks(state, payload) {
            state.attacks = payload;
        },
        setStrength: (state, payload) => state.strength = payload,
        setArmorPenetration: (state, payload) => state.armorPen = payload,
        setDamage: (state, payload) => state.damage = payload,
        setHasWoundRules(state, payload) {
            state.woundSpecialRules = payload;
        },

        setMod: (state, payload) => state.woundRules.mod = payload,
        setReRollOnes: (state, payload) => state.woundRules.reRollOnes = payload,
        setReRollMisses: (state, payload) => state.woundRules.reRollMisses = payload,
        setRending: (state, payload) => state.woundRules.rending = payload,
    },
    getters: {
        woundSpecialRules: state => state.woundSpecialRules,

        attacks: state => state.attacks,
        strength: state => state.strength,
        armorPen: state => state.armorPen,
        damage: state => state.damage,

    }
};

export default weapon;
