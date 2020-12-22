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
