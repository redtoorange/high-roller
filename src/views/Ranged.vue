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

        <v-btn @click="roll" v-if="!results" color="primary">Simulate</v-btn>

        <v-card v-if="results">
            <v-card-title>
                Simulation Results
            </v-card-title>
            <v-card-text>
                <div>
                    <h3>To Hit</h3>
                    <p>Hits: {{ results.hitSuccessRolls }} </p>
                    <p>Misses: {{ results.hitFailRolls }}</p>
                    <p><strong>Total: {{ results.hitCount }}</strong></p>
                </div>

                <v-divider class="mb-3"></v-divider>

                <div>
                    <h3>To Wound</h3>
                    <p>Wounded: {{ results.woundSuccessRolls }} </p>
                    <p>Failed: {{ results.woundFailRolls }}</p>
                    <p><strong>Total: {{ results.woundCount }}</strong></p>
                </div>

                <v-divider class="mb-3"></v-divider>

                <div>
                    <h3>Saving Throws</h3>
                    <p>Saved: {{ results.saveSuccessRolls }} </p>
                    <p>Failed: {{ results.saveFailRolls }}</p>
                    <p><strong>Total: {{ results.failedSaves }}</strong></p>
                </div>

                <v-divider class="mb-3"></v-divider>

                <div>
                    <h3>
                        Total Wounds: {{ results.failedSaves }}
                    </h3>
                </div>
            </v-card-text>

            <v-card-actions>
                <v-btn @click="roll" color="primary">Re-Simulate</v-btn>
            </v-card-actions>
        </v-card>

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
            results: null,
        };
    },

    computed: {
        ...mapGetters('attacker', ['hitSpecialRules']),
        ...mapGetters('weapon', ['woundSpecialRules']),
    },

    methods: {
        roll() {
            const resultSet = CalcEngine.runCalculations(this.$store.state);
            console.log(resultSet);

            this.results = resultSet;
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
