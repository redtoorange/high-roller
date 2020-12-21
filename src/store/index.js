import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const attacker = {
    namespaced: true,
    state: {
        models: null,
        BS: null,
        hitSpecialRules: false,
        hitRules: {
            mod: 0,
            reRollOnes: false,
            reRollMisses: false,
            explodingSixes: false
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
        setExplodingSixes: (state, payload) => state.hitRules.explodingSixes = payload,

    },
    getters: {
        hitSpecialRules: state => state.hitSpecialRules,
    }
};

const weapon = {
    namespaced: true,
    state: {
        attacks: null,
        strength: null,
        armorPen: null,
        damage: '',
        woundSpecialRules: false,
        woundRules: {
            mod: 0,
            reRollOnes: false,
            reRollMisses: false,
            rending: false,
            rendRules: {
                strength: 0,
                armorPen: 0
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
    }
};

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
    },
};

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        attacker,
        weapon,
        defender
    }
})
