<template>
    <v-card>
        <v-card-title>
            Ranged Attacker Statistics
        </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="12" md="3">
                    <v-text-field label="Models*" type="number" v-model="models" :rules="notEmpty" required/>
                </v-col>
                <v-col cols="12" md="3">
                    <v-text-field label="BS*" type="number" v-model="BS" :rules="notEmpty" required/>
                </v-col>
                <v-col cols="12" md="3">
                    <v-checkbox label="To Hit Special Rules" @change="setHasHitRules($event)"/>
                </v-col>
                <v-col cols="12" md="3">
                    <v-checkbox label="To Wound Special Rules" @change="setHasWoundRules($event)"/>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
import {mapMutations} from "vuex";

export default {
    name: "RangedAttackerComponent",
    methods: {
        ...mapMutations('ranged/attacker', ['setHasHitRules']),
        ...mapMutations('ranged/weapon', ['setHasWoundRules']),
    },
    data() {
        return {
            notEmpty: [v => !!v || 'Required Field']
        };
    },
    computed: {
        models: {
            get() {
                return this.$store.state.ranged.attacker.models;
            },
            set(value) {
                this.$store.commit('ranged/attacker/setAttackerModels', value)
            }
        },

        BS: {
            get() {
                return this.$store.state.ranged.attacker.BS;
            },
            set(value) {
                this.$store.commit('ranged/attacker/setBS', value)
            }
        }
    }
}
</script>
