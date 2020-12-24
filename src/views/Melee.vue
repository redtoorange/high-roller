<template>
    <div>
        <v-row>
            <v-col>
                <h1>
                    Melee Attack
                </h1>
            </v-col>
        </v-row>

        <v-form ref="meleeForm" lazy-validation>
            <v-row>
                <v-col cols="12">
                    <MeleeAttackerComponent/>
                </v-col>
            </v-row>
            <transition name="slide-fade">
                <v-row v-if="hitSpecialRules">
                    <v-col cols="12">
                        <HitSpecialRulesComponent type="melee"/>
                    </v-col>
                </v-row>
            </transition>

            <transition name="slide-fade">
                <v-row v-if="woundSpecialRules">
                    <v-col cols="12">
                        <WoundSpecialRulesComponent type="melee"/>
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
import DefenderComponent from "@/components/shared/DefenderStatComponent";
import HitSpecialRulesComponent from "@/components/shared/HitSpecialRulesComponent";
import WoundSpecialRulesComponent from "@/components/shared/WoundSpecialRulesComponent";
import {mapGetters} from "vuex";
import StatisticsComponent from "@/components/StatisticsComponent";
import StatEngine from "@/services/StatEngine";
import MeleeAttackerComponent from "@/components/melee/MeleeAttackerComponent";
import MeleeWeaponStatComponent from "@/components/melee/MeleeWeaponStatComponent";
import ToolTipButton from "@/components/Misc/ToolTipButton";

export default {
    name: 'Melee',
    components: {
        ToolTipButton,
        MeleeWeaponStatComponent,
        MeleeAttackerComponent,
        StatisticsComponent,
        WoundSpecialRulesComponent,
        HitSpecialRulesComponent,
        DefenderComponent
    },
    data() {
        return {
            stats: null,
            valid: true,
        };
    },

    computed: {
        ...mapGetters('melee/attacker', {
            hitSpecialRules: "hitSpecialRules",
            models: "models",
            WS: "WS",
            attackerStrength: "strength",
            attacks: "attacks",
        }),
        ...mapGetters('melee/weapon', {
            woundSpecialRules: "woundSpecialRules",
            armorPen: "armorPen",
            damage: "damage",
        }),
        ...mapGetters('defender', ['toughness']),
        pageHeight() {
            return document.body.scrollHeight
        },
    },

    methods: {
        statCalc() {
            const isValid = this.$refs.meleeForm.validate();

            if (isValid) {
                this.stats = StatEngine.runCalculations(this.$store.state, 'MELEE');
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
