<template>
    <div>
        <v-row>
            <v-col>
                <h1>
                    Melee Attack
                </h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <AttackerComponent/>
            </v-col>
        </v-row>
        <transition name="slide-fade">
            <v-row v-if="hitSpecialRules">
                <v-col cols="12">
                    <HitSpecialRulesComponent/>
                </v-col>
            </v-row>
        </transition>

        <transition name="slide-fade">
            <v-row v-if="woundSpecialRules">
                <v-col cols="12">
                    <WoundSpecialRulesComponent/>
                </v-col>
            </v-row>
        </transition>


        <v-row>
            <v-col cols="12">
                <WeaponStatComponent/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <DefenderComponent/>
            </v-col>
        </v-row>

        <v-btn @click="roll">Roll?</v-btn>
        <div>
            Hit Rolls: {{ rolls }}
        </div>

        <div>
            Wound Rolls: {{ rolls }}
        </div>

        <div>
            Save Rolls: {{ rolls }}
        </div>

        <div>
            Total Wounds: {{ rolls }}
        </div>
    </div>
</template>

<script>
import AttackerComponent from "@/components/ranged/AttackerComponent";
import WeaponStatComponent from "@/components/ranged/WeaponStatComponent";
import DefenderComponent from "@/components/shared/DefenderStatComponent";
import HitSpecialRulesComponent from "@/components/ranged/HitSpecialRulesComponent";
import WoundSpecialRulesComponent from "@/components/ranged/WoundSpecialRulesComponent";
import {mapGetters} from "vuex";
import CalcEngine from "@/services/CalcEngine";

export default {
    name: 'Home',
    components: {
        WoundSpecialRulesComponent,
        HitSpecialRulesComponent,
        DefenderComponent, WeaponStatComponent, AttackerComponent
    },
    data() {
        return {
            rolls: [],
        };
    },

    computed: {
        ...mapGetters(['hitSpecialRules', 'woundSpecialRules']),
    },

    methods: {
        roll() {
            console.log(CalcEngine.runCalculations(this.$store.state))
        }
    }
}
</script>

<style scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
    transition: all .15s ease-in;
}

.slide-fade-leave-active {
    transition: all .15s ease-out;
}

.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
{
    transform: translateY(-15px);
    opacity: 0;
}
</style>
