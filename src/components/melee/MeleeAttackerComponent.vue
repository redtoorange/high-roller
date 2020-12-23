<template>
    <v-card>
        <v-card-title>
            Melee Attacker Statistics
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-row>
                    <v-col cols="12" md="2">
                        <v-text-field label="Models" type="number" v-model="models"/>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-text-field label="WS" type="number" v-model="BS"/>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-text-field label="Strength" type="number" v-model="BS"/>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-text-field label="Attacks" type="number" v-model="BS"/>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-checkbox label="To Hit Special Rules" @change="setHasHitRules($event)"/>
                    </v-col>
                    <v-col cols="12" md="2">
                        <v-checkbox label="To Wound Special Rules" @change="setHasWoundRules($event)"/>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
import {mapMutations} from "vuex";

export default {
    name: "MeleeAttackerComponent",
    methods: {
        ...mapMutations('attacker', ['setHasHitRules']),
        ...mapMutations('weapon', ['setHasWoundRules']),
    },

    computed: {
        models: {
            get() {
                return this.$store.state.attacker.models;
            },
            set(value) {
                this.$store.commit('attacker/setAttackerModels', value)
            }
        },

        BS: {
            get() {
                return this.$store.state.attacker.BS;
            },
            set(value) {
                this.$store.commit('attacker/setBS', value)
            }
        }
    }
}
</script>
