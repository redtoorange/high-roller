import Vue from 'vue'
import Vuex from 'vuex'
import defender from "@/store/shared/defender";
import ranged from "@/store/ranged/ranged";
import melee from "@/store/melee/melee";

Vue.use(Vuex);


export default new Vuex.Store({
    modules: {
        ranged,
        melee,
        defender
    }
})
