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
                <MeleeAttackerComponent/>
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
                <MeleeWeaponStatComponent/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <DefenderComponent/>
            </v-col>
        </v-row>

        <v-btn @click="simulate" v-if="!results && !stats" color="primary" disabled>Simulate Rolls</v-btn>
        <v-btn @click="statCalc" v-if="!results && !stats" color="secondary" class="ml-2" :disabled="!formValid">
            Percentages
        </v-btn>

        <transition name="slide-fade">
            <v-row v-if="results">
                <v-col cols="12">
                    <SimulatedRollComponent :results="results" ref="resultCard">
                        <template v-slot:actions>
                            <v-btn @click="simulate" color="primary" disabled>Re-Simulate Rolls</v-btn>
                            <v-btn @click="statCalc" color="secondary" class="ml-2" ref="percent-button"
                                   :disabled="!formValid">
                                Percentages
                            </v-btn>
                        </template>
                    </SimulatedRollComponent>
                </v-col>
            </v-row>
        </transition>

        <transition name="slide-fade">
            <v-row v-if="stats">
                <v-col cols="12">
                    <StatisticsComponent :results="stats" ref="resultCard">
                        <template v-slot:actions>
                            <v-btn @click="simulate" color="primary" disabled>Re-Simulate Rolls</v-btn>
                            <v-btn @click="statCalc" color="secondary" class="ml-2" ref="percent-button"
                                   :disabled="!formValid">
                                Percentages
                            </v-btn>
                        </template>
                    </StatisticsComponent>
                </v-col>
            </v-row>
        </transition>

    </div>
</template>

<script>
import DefenderComponent from "@/components/shared/DefenderStatComponent";
import HitSpecialRulesComponent from "@/components/ranged/HitSpecialRulesComponent";
import WoundSpecialRulesComponent from "@/components/ranged/WoundSpecialRulesComponent";
import {mapGetters} from "vuex";
import SimEngine from "@/services/SimEngine";
import StatisticsComponent from "@/components/StatisticsComponent";
import SimulatedRollComponent from "@/components/SimulatedRollComponent";
import StatEngine from "@/services/StatEngine";
import MeleeAttackerComponent from "@/components/melee/MeleeAttackerComponent";
import MeleeWeaponStatComponent from "@/components/melee/MeleeWeaponStatComponent";

export default {
    name: 'Melee',
    components: {
        MeleeWeaponStatComponent,
        MeleeAttackerComponent,
        StatisticsComponent,
        SimulatedRollComponent,
        WoundSpecialRulesComponent,
        HitSpecialRulesComponent,
        DefenderComponent
    },
    data() {
        return {
            results: null,
            stats: null,
        };
    },

    computed: {
        ...mapGetters('attacker', ['hitSpecialRules', 'models', 'BS']),
        ...mapGetters('weapon', ['woundSpecialRules', 'attacks', 'strength', 'armorPen', 'damage']),
        ...mapGetters('defender', ['toughness']),
        pageHeight() {
            return document.body.scrollHeight
        },

        formValid(otherGetters) {
            return !(
                otherGetters.models == null ||
                otherGetters.BS == null ||
                otherGetters.attacks == null ||
                otherGetters.strength == null ||
                otherGetters.armorPen == null ||
                otherGetters.damage == null ||
                otherGetters.toughness == null
            );
        }
    },

    methods: {
        simulate() {
            this.stats = null;
            const resultSet = SimEngine.runCalculations(this.$store.state);
            console.log(resultSet);
            this.results = resultSet;

            this.$vuetify.goTo(this.pageHeight);
        },

        statCalc() {
            this.results = null;
            const resultSet = StatEngine.runCalculations(this.$store.state);
            console.log(resultSet);
            this.stats = resultSet;

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
