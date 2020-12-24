<template>
    <div>
        <v-row>
            <v-col>
                <h1>
                    Ranged Attack
                </h1>
            </v-col>
        </v-row>
        <v-form lazy-validation ref="rangedForm">
            <v-row>
                <v-col cols="12">
                    <AttackerComponent/>
                </v-col>
            </v-row>
            <transition name="slide-fade">
                <v-row v-if="hitSpecialRules">
                    <v-col cols="12">
                        <HitSpecialRulesComponent type="ranged"/>
                    </v-col>
                </v-row>
            </transition>

            <transition name="slide-fade">
                <v-row v-if="woundSpecialRules">
                    <v-col cols="12">
                        <WoundSpecialRulesComponent type="ranged"/>
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
        </v-form>


        <ToolTipButton label="Percentages" :on-click="statCalc" tool-tip="Fields Missing"/>

        <transition name="slide-fade">
            <v-row v-if="stats">
                <v-col cols="12">
                    <StatisticsComponent :results="stats" ref="resultCard">
                        <template v-slot:actions>
                            <ToolTipButton label="Percentages" :on-click="statCalc"
                                           tool-tip="Fields Missing"/>
                        </template>
                    </StatisticsComponent>
                </v-col>
            </v-row>
        </transition>

    </div>
</template>

<script>
import AttackerComponent from "@/components/ranged/RangedAttackerComponent";
import WeaponStatComponent from "@/components/ranged/WeaponStatComponent";
import DefenderComponent from "@/components/shared/DefenderStatComponent";
import HitSpecialRulesComponent from "@/components/shared/HitSpecialRulesComponent";
import WoundSpecialRulesComponent from "@/components/shared/WoundSpecialRulesComponent";
import {mapGetters} from "vuex";
import StatEngine from "@/services/StatEngine";
import StatisticsComponent from "@/components/StatisticsComponent";
import ToolTipButton from "@/components/Misc/ToolTipButton";

export default {
    name: 'Ranged',
    components: {
        StatisticsComponent,
        WoundSpecialRulesComponent,
        HitSpecialRulesComponent,
        DefenderComponent, WeaponStatComponent, AttackerComponent, ToolTipButton
    },
    data() {
        return {
            stats: null,
        };
    },

    computed: {
        ...mapGetters('ranged/attacker', ['hitSpecialRules', 'models', 'BS']),
        ...mapGetters('ranged/weapon', ['woundSpecialRules', 'attacks', 'strength', 'armorPen', 'damage']),
        ...mapGetters('defender', ['toughness']),

        pageHeight() {
            return document.body.scrollHeight
        },
    },

    methods: {
        statCalc() {
            const formValid = this.$refs.rangedForm.validate();

            if (formValid) {
                this.stats = StatEngine.runCalculations(this.$store.state, 'RANGED');
                this.$vuetify.goTo(this.pageHeight);
            }
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
