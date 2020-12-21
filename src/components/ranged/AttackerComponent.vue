<template>
    <v-card>
        <v-card-title>
            Attacker Statistics
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-row>
                    <v-col cols="12" md="3">
                        <v-text-field label="Models" type="number" v-model="models"/>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-text-field label="BS" type="number" v-model="BS"/>
                    </v-col>
                    <v-col cols="12" md="3">
                        <v-checkbox label="To Hit Special Rules" @change="setHasHitRules($event)"/>
                    </v-col>
                    <v-col cols="12" md="3">
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
    name: "AttackerComponent",
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
