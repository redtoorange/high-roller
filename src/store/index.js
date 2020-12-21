import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const attacker = {
    state: {
        models: null,
        BS: null,
        hitSpecialRules: false,
        woundSpecialRules: false
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
        setHasWoundRules(state, payload) {
            state.woundSpecialRules = payload;
        },
    },
    getters: {
        hitSpecialRules: state => state.hitSpecialRules,
        woundSpecialRules: state => state.woundSpecialRules,
    }
};

const weapon = {
    state: {
        attacks: null,
        strength: null,
        armorPen: null,
        damage: ''
    },
    mutations: {
        setAttacks(state, payload) {
            state.attacks = payload;
        },
        setStrength: (state, payload) => state.strength = payload,
        setArmorPenetration: (state, payload) => state.armorPen = payload,
        setDamage: (state, payload) => state.damage = payload,
    },
};

const defender = {
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
