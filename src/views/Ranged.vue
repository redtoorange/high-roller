<template>
    <div>
        <v-row>
            <v-col>
                <h1>
                    Ranged Attack
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

        <v-btn @click="roll" v-if="!results" color="primary">Simulate Rolls</v-btn>
        <v-btn @click="roll" v-if="!results" color="secondary" class="ml-2" disabled>Percentages</v-btn>

        <transition name="slide-fade">
            <v-row v-if="results">
                <v-col cols="12">
                    <SimulatedRollComponent :results="results" ref="resultCard">
                        <template v-slot:actions>
                            <v-btn @click="roll" color="primary">Re-Simulate Rolls</v-btn>
                            <v-btn @click="roll" color="secondary" class="ml-2" disabled ref="percent-button">
                                Percentages
                            </v-btn>
                        </template>
                    </SimulatedRollComponent>
                </v-col>
            </v-row>
        </transition>

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
import SimulatedRollComponent from "@/components/SimulatedRollComponent";

export default {
    name: 'Home',
    components: {
        SimulatedRollComponent,
        WoundSpecialRulesComponent,
        HitSpecialRulesComponent,
        DefenderComponent, WeaponStatComponent, AttackerComponent
    },
    data() {
        return {
            results: null,
        };
    },

    computed: {
        ...mapGetters('attacker', ['hitSpecialRules']),
        ...mapGetters('weapon', ['woundSpecialRules']),
        pageHeight() {
            return document.body.scrollHeight
        }
    },

    methods: {
        roll() {
            const resultSet = CalcEngine.runCalculations(this.$store.state);
            console.log(resultSet);
            this.results = resultSet;

            this.$vuetify.goTo(this.pageHeight);
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
