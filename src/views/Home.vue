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
                <AttackerComponent
                    @hit-special-rules="hitSpecialRules = $event"
                    @wound-special-rules="woundSpecialRules = $event"
                />
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
    </div>
</template>

<script>
import AttackerComponent from "@/components/AttackerComponent";
import WeaponStatComponent from "@/components/WeaponStatComponent";
import DefenderComponent from "@/components/DefenderComponent";
import HitSpecialRulesComponent from "@/components/HitSpecialRulesComponent";
import WoundSpecialRulesComponent from "@/components/WoundSpecialRulesComponent";

export default {
    name: 'Home',
    components: {
        WoundSpecialRulesComponent,
        HitSpecialRulesComponent,
        DefenderComponent, WeaponStatComponent, AttackerComponent
    },
    data() {
        return {
            hitSpecialRules: true,
            woundSpecialRules: true
        };
    },
}
</script>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
    transition: all .3s ease-in;
}

.slide-fade-leave-active {
    transition: all .3s ease-out;
}

.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
{
    transform: translateX(10px);
    opacity: 0;
}
</style>