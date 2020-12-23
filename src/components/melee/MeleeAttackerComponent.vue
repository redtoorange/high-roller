<template>
    <v-card>
        <v-card-title>
            Melee Attacker Statistics
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12" md="2">
                    <v-text-field label="Models*" type="number" v-model="models" :rules="notEmpty" required/>
                </v-col>
                <v-col cols="12" md="2">
                    <v-text-field label="WS*" type="number" v-model="WS" :rules="notEmpty"/>
                </v-col>
                <v-col cols="12" md="2">
                    <v-text-field label="Strength*" type="number" v-model="strength" :rules="notEmpty"/>
                </v-col>
                <v-col cols="12" md="2">
                    <v-text-field label="Attacks*" type="number" v-model="attacks" :rules="notEmpty"/>
                </v-col>
                <v-col cols="12" md="2">
                    <v-checkbox label="To Hit Special Rules" @change="setHasHitRules($event)"/>
                </v-col>
                <v-col cols="12" md="2">
                    <v-checkbox label="To Wound Special Rules" @change="setHasWoundRules($event)"/>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import {mapMutations} from "vuex";

export default {
    name: "MeleeAttackerComponent",
    methods: {
        ...mapMutations('melee/attacker', ['setHasHitRules']),
        ...mapMutations('melee/weapon', ['setHasWoundRules']),
    },

    data() {
        return {
            notEmpty: [v => !!v || 'Required Field']
        };
    },

    computed: {
        models: {
            get() {
                return this.$store.state.melee.attacker.models;
            },
            set(value) {
                this.$store.commit('melee/attacker/setAttackerModels', value)
            }
        },

        WS: {
            get() {
                return this.$store.state.melee.attacker.WS;
            },
            set(value) {
                this.$store.commit('melee/attacker/setWS', value)
            }
        },
        strength: {
            get() {
                return this.$store.state.melee.attacker.strength;
            },
            set(value) {
                this.$store.commit('melee/attacker/setStrength', value)
            }
        },
        attacks: {
            get() {
                return this.$store.state.melee.attacker.attacks;
            },
            set(value) {
                this.$store.commit('melee/attacker/setAttacks', value)
            }
        },
    }
}
</script>
